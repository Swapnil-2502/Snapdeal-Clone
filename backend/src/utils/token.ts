import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';

const JWT_SECRET = process.env.JWT_SECRET

export interface JWTPayload {
    _id?: string |  mongoose.Types.ObjectId;
    email?: string;
    phone?: string;
    name?: string;
}

export const SignToken = (payload: JWTPayload) => {
    if (!JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in environment variables");
    }
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '2d' });
} 