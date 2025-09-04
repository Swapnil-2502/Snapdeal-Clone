import { Request, Response } from "express";
import User from "../model/User";
import bcrypt from "bcryptjs";
import { generateOTP, getOtpExpiryDate } from "../utils/otp";
import AuthSession from "../model/AuthSession";
import jwt from 'jsonwebtoken'
import { sendOTP } from "../utils/emailotp";


export const checkEmail = async (req: Request, res: Response) => {
    try{
        const {email} = req.body

        if(!email) return res.status(400).json({message:"Please enter email"})

        const userExist = await User.findOne({email})

        if(userExist){
            const otp = generateOTP()
            const hashedOTP = await bcrypt.hash(otp,10)

            await sendOTP(email,otp)

            const expiresAt = getOtpExpiryDate()

            await AuthSession.create({
                email: email,
                purpose: 'login',
                otp: hashedOTP,
                expiresAt: expiresAt
            })
            return res.json({message: "OTP sent to email", email: email, purpose: 'login'})
        }
        else{
            return res.json({email: email, purpose: 'register'})
        }
    }
    catch(error){
        console.error("Error in checkEmail:", error);
        return res.status(500).json({ message: "Server error", error: error});
    }
}

export const registerUser = async (req: Request, res: Response) => {
    try{
        const {email, phone, name, dob, password} = req.body

        if (!email || !phone || !name || !dob || !password) {
            return res.status(400).json({message: "All fields are required: email, phone, name, dob, password" });
        }

        const otp = generateOTP()
        const hashedOTP = await bcrypt.hash(otp,10)

        const expiresAt = getOtpExpiryDate()

        const hashedPassword = await bcrypt.hash(password,10)

        const payload = {
            phone,
            name,
            dob,
            password: hashedPassword
        }

        const registeredRecord = await AuthSession.create({
            email: email,
            purpose: 'register',
            otp: hashedOTP,
            payload: payload,
            expiresAt: expiresAt
        })

        await sendOTP(email,otp)

        res.status(201).json({
            message: "OTP sent to email. Please verify to complete registration.",
            expiresAt: expiresAt,
            user: registeredRecord
        })

    }
    catch(error){
        console.error("Error in Registering user:", error);
        return res.status(500).json({ message: "Server error", error: error});
    }
}

export const verifyOTP = async (req: Request, res: Response) => {
    const {email, otp} = req.body
    try{
        

        if (!email || !otp) {
            return res.status(400).json({ 
                message: "Email and OTP are required" 
            });
        }

        const authSession = await AuthSession.findOne({email: email})

        if(!authSession){
            return res.status(404).json({ 
                message: "authSession record not found or expired. Please start again." 
            });
        }

        const {purpose, payload} = authSession 

        // if (registedRecord.expiresAt < new Date()) {
        //     await Register.deleteOne({ _id: registedRecord._id });
        //     return res.status(410).json({ 
        //         message: "OTP has expired. Please request a new one." 
        //     });
        // }

        const otpValid = await bcrypt.compare(otp,authSession.otp)
        if (!otpValid) {
            return res.status(401).json({ 
                message: "Invalid OTP" 
            });
        }

        let user;
        let message;

        if(purpose === 'register'){
            user = await User.create({
                email: email,
                phone: payload?.phone,
                name: payload?.name,
                dob: payload?.dob,
                password: payload?.password,
                isVerified: true
            })

            message = "Registration successful!";
        }
        else if (purpose === 'login'){
            user = await User.findOne({ email: email });

            if(!user){
                await AuthSession.deleteOne({email: email})
                return res.status(404).json({message: "User not found. Please register first." })
            }

            message = "Login successful!";
        }


        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined in environment variables");
        }
        const token = jwt.sign(
            { id: user?._id, email: email, phone: user?.phone, name: user?.name },
            process.env.JWT_SECRET,
            { expiresIn: '2d' }
        );

        await AuthSession.deleteOne({ _id: authSession._id })

        res.status(purpose === 'register' ? 201: 200).json({
            message: message,
            user: {
                id: user?._id,
                email: user?.email,
                name: user?.name,
                phone: user?.phone,
            },
            token
        })
    }
    catch(error){
        await AuthSession.deleteOne({ email: email })
        console.error("Error in verifying user otp:", error);
        return res.status(500).json({ message: "Server error", error: error});
    }
}