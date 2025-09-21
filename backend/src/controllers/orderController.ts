import { Request, Response } from "express";
import { Authrequest } from "../middleware/AuthMiddleware";
import Order from "../model/Order";
import User from "../model/User";

export const getAllOrders = async (req: Request, res: Response) => {
    
    try{
        const { minPrice, maxPrice, dateFrom, dateTo, status, search } = req.query;

        const query: any = {};

        if(search) {
            const searchTerm = search as string;
            const searchRegex = new RegExp(searchTerm, 'i');
            
            const isValidObjectId = /^[0-9a-fA-F]{24}$/.test(searchTerm);

            query.$or = [
                ...(isValidObjectId ? [{ _id: searchTerm }] : []),
                { 'address.name': searchRegex }
            ];
        }


        if (minPrice || maxPrice) {
            query.totalAmount = {};
            if (minPrice) query.totalAmount.$gte = Number(minPrice);
            if (maxPrice) query.totalAmount.$lte = Number(maxPrice);
        }

        if (dateFrom || dateTo) {
            query.createdAt = {};
            if (dateFrom) {
                const fromDate = new Date(dateFrom as string);
                query.createdAt.$gte = fromDate;
            }
            if (dateTo) {
                const toDate = new Date(dateTo as string);
                query.createdAt.$lte = toDate;
            }
        }

        if (status) {
            query.status = status;
        }
        
        const allOrders = await Order.find(query)

        res.status(200).json({message: "Order GET successfully",totalOrders: allOrders.length ,orders: allOrders.reverse()})
    }
    catch(error){
        console.error("Error getting order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getOrderById = async (req: Request, res: Response) => {
    const {orderId} = req.params

    try{
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

export const updateOrderDetails = async (req: Request, res: Response) => {
    try{
        const {orderId} = req.params;
        const {status} = req.body

        if (!orderId) {
            return res.status(400).json({ message: "Order ID is required" });
        }

        const validStatuses = ['placed', 'packed', 'shipped', 'out for delivery', 'delivered', 'cancelled'];
        if (status && !validStatuses.includes(status)) {
            return res.status(400).json({ 
                message: "Invalid status", 
                validStatuses: validStatuses 
            });
        }

        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        const updateData: any = {};
        const trackingUpdate: any = {};

        if (status) {
            updateData.status = status;
            trackingUpdate.status = status;
        }

        if (Object.keys(trackingUpdate).length > 0) {
            trackingUpdate.timestamp = new Date();
            updateData.$push = { trackingHistory: trackingUpdate };
        }

        const updatedOrder = await Order.findByIdAndUpdate(orderId,updateData,{ new: true })

        if (!updatedOrder) {
            return res.status(404).json({ message: "Order not found after update attempt" });
        }

        res.status(200).json({ 
            message: "Order updated successfully", 
            order: updatedOrder 
        });

    }
    catch(error){
        console.error("Error updating order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

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
