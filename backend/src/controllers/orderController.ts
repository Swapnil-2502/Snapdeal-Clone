import { Response } from "express";
import { Authrequest } from "../middleware/AuthMiddleware";
import Order from "../model/Order";
import User from "../model/User";

export const getUserOrders = async (req: Authrequest, res: Response) => {
    const userId = req.userId

    try{
        const userExist = await User.findById(userId)
        if(!userExist) return res.status(404).json({message: "User not found"})
        
        const allOrders = (await Order.find({user: userId})).reverse()

        res.status(200).json({message: "Order GET successfully",orders: allOrders})
    }
    catch(error){
        console.error("Error getting order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getUserOrderById = async (req: Authrequest, res: Response) => {
    const userId = req.userId
    const {orderId} = req.params

    try{
        const userExist = await User.findById(userId)
        if(!userExist) return res.status(404).json({message: "User not found"})

        if(!orderId) return res.status(400).json({ message: "Product ID is required" });

        const order = await Order.findById(orderId)
         if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        return res.status(200).json({ order });

    }
    catch(error){
        console.error("Error getting order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const createUserOrder = async (req: Authrequest, res: Response) => {
    const userId = req.userId
    const { items, address, totalAmount } = req.body;

    try{
        if (!items || items.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }
        if (!address) {
        return res.status(400).json({ message: "Address is required" });
        }

        const newOrder = new Order({user: userId, items, address, totalAmount})
        await newOrder.save();

        res.status(201).json({message: "Order created successfully",order: newOrder})
    }
    catch(error){
        console.error("Error creating order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
    
}
