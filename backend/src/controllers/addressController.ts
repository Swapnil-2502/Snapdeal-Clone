import { Response } from "express";
import { Authrequest } from "../middleware/AuthMiddleware";
import User from "../model/User";

export const getAllAddress = async (req: Authrequest, res: Response) => {
    const userId = req.userId

    try{
        const user = await User.findById(userId)
        if(!user) return res.status(404).json({ message: "User not found." });

        return res.status(200).json({ message: "Addresses fetched successfully.", addresses: user.addresses });
    }
    catch(error){
        console.error("Error getting address:", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
}

export const addAddress = async (req: Authrequest, res: Response) => {
    const userId = req.userId
    const newAddress = req.body

    try{
        const user = await User.findById(userId)
        if(!user) return res.status(404).json({ message: "User not found." });

        user.addresses.push(newAddress)
        await user.save()

        return res.status(200).json({ message: "Address added successfully.", addresses: user.addresses });
    }
    catch(error){
        console.error("Error adding address:", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
}

export const updateAddress = async (req: Authrequest, res: Response) => {
    const userId = req.userId
    const updatedAddress = req.body
    const { addressId } = req.params;

    try{
        const user = await User.findById(userId)
        if(!user) return res.status(404).json({ message: "User not found." });

        const address = user.addresses.find((addr: any) => addr._id?.toString() === addressId)
        if(!address) return res.status(404).json({ message: "Address for given addressId not found." });

        Object.assign(address,updatedAddress)
        await user.save();

        return res.status(200).json({ message: "Address updated successfully.", addresses: user.addresses  });
    }
    catch(error){
        console.error("Error updating address:", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
}

export const deleteAddress = async (req: Authrequest, res: Response) => {
    const userId = req.userId
    const {addressId} = req.params

    try{
        const user = await User.findById(userId)
        if(!user) return res.status(404).json({ message: "User not found." });

        const addressIndex = user.addresses.findIndex((addr: any) => addr._id?.toString() === addressId)
        if(addressIndex === -1) return res.status(404).json({ message: "Address for given addressId not found." });

        user.addresses.splice(addressIndex,1)
        await user.save();

        return res.status(200).json({ message: "Address deleted successfully.", addresses: user.addresses  });
    }
    catch(error){
        console.error("Error deleting address:", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
}