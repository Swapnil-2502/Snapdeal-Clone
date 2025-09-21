import mongoose, { Schema } from "mongoose";
import { AddressSchema, IUserAddress } from "./User";


interface OrderItem {
    _id: string;
    title: string;
    price: number;
    quantity: number;
    imageURL: string;
    size?: string
}

const OrderItem: Schema = new Schema<OrderItem>({
    _id: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    imageURL: { type: String, required: true },
    size: { type: String }
})  


export interface OrderDocument extends Document {
    user: mongoose.Types.ObjectId;  
    items: OrderItem[];
    address: IUserAddress;
    totalAmount: number;
    status: string;
    trackingHistory: {
        status: string,
        timestamp: Date,
        note?: string
    }
}

const OrderSchema = new Schema<OrderDocument>({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [OrderItem],
    address: AddressSchema,
    totalAmount: { type: Number, required: true },
    status: {
        type: String,
        enum: ['pending','placed', 'packed', 'shipped', 'out for delivery', 'delivered', 'cancelled'],
        default: 'pending'
    },
    trackingHistory: [{
        status: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
        note: { type: String }
    }]
},{ timestamps: true })

export default mongoose.model<OrderDocument>("Order",OrderSchema)