import { Request, Response } from "express";
import { razorpay } from "../config/razorpay";
import { readData, writeData } from "../utils/fileStorage";
import crypto from 'crypto';
import dotenv from "dotenv"

dotenv.config()

export const createOrder = async (req: Request, res: Response): Promise<void> => {
    try{
        const {amount, currency, receipt, notes} = req.body

        const options = {
            amount: amount * 100, 
            currency: currency || "INR",
            receipt: receipt || "receipt#1",
            notes: notes || {},
        };

        const order = await razorpay.orders.create(options);

        const orders = readData();

        orders.push({
            order_id: order.id,
            amount: order.amount,
            currency: order.currency,
            receipt: order.receipt,
            status: "created",
        })

        writeData(orders);

        res.json(order);
    }
    catch(error){
        console.error(error);
        res.status(500).send("Error creating order");
    }
}

export const verifyPayment =  async (req: Request, res: Response) => {
    console.log("VerifyPayment", req.body)
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    try{
        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_SECRET as string)
            .update(body)
            .digest('hex');

        const isValidSignature = expectedSignature === razorpay_signature;

        if(isValidSignature){
            const orders = readData();
            const order = orders.find((o: any) => o.order_id === razorpay_order_id);

            if(order){
                order.status = "paid";
                order.payment_id = razorpay_payment_id;
                writeData(orders);
            }
            return res.status(200).json({ status: "ok" });
        } 
        else{
            return res.status(400).json({ status: "verification_failed" });
        }
        
    }
    catch(error){
        console.error(error);
        res.status(500).json({ status: "error" });
    }
}