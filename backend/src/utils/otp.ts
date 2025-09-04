import crypto from "crypto";
import bcrypt from "bcryptjs";

const OTP_LENGTH = parseInt(process.env.OTP_LENGTH || "6",10)
const OTP_TTL_MINUTES = parseInt(process.env.OTP_TTL_MINUTES || "10",10)

export const generateOTP = () => {
    let otp = ""
    for(let i=0;i<OTP_LENGTH;i++){
        otp+= crypto.randomInt(0,10).toString()
    }
    return otp
}

export const hashOTP = (otp: string): Promise<string> => {
    return bcrypt.hash(otp,10)
}

export const compareOTP = (otp:string, hash: string): Promise<boolean> => {
    return bcrypt.compare(otp,hash)
}

export const getOtpExpiryDate = (): Date => {
    return new Date(Date.now() + OTP_TTL_MINUTES * 60 * 1000)
}