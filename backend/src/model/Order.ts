import mongoose, { Schema } from "mongoose";
import { AddressSchema, IUserAddress } from "./User";


interface OrderItem {
    _id: string;
    title: string;
    price: number;
    quantity: number;
    imageURL: string;
}

const OrderItem: Schema = new Schema<OrderItem>({
    _id: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    imageURL: { type: String, required: true },
})  


export interface OrderDocument extends Document {
    user: mongoose.Types.ObjectId;  
    items: OrderItem[];
    address: IUserAddress;
    totalAmount: number;
}

const OrderSchema = new Schema<OrderDocument>({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [OrderItem],
    address: AddressSchema,
    totalAmount: { type: Number, required: true },
},{ timestamps: true })

export default mongoose.model<OrderDocument>("Order",OrderSchema)