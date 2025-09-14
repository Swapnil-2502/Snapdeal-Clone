import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../model/User";

export interface Authrequest extends Request{
    userId?: string
}

export const authMiddleware = (req: Authrequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith("Bearer ")) return res.status(401).json({ message: "Unauthorized. Token missing." });

    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET!) as {id: string}
        req.userId = decoded.id

        next();
    }
    catch(error){
        console.log("Error->",error)
        return res.status(401).json({ message: "Invalid or expired token." });
    }
}

export const requireAdmin = async (req: Authrequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith("Bearer ")) return res.status(401).json({ message: "Unauthorized. Token missing." });

    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET!) as {id: string}
        req.userId = decoded.id

        const user = await User.findById(decoded.id).select('role')
        if(!user) return res.status(404).json({ message: "User not found." });

        if(user.role !== 'admin') return res.status(403).json({ message: "Forbidden. Admin access required." });

        next();
    }
    catch(error){
        console.log("Error->",error)
        return res.status(401).json({ message: "Invalid or expired token." });
    }
}