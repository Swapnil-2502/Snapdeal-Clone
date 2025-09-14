import mongoose, {Schema} from "mongoose";

export type UserRole = 'user' | 'admin'

export interface IUserAddress {
    pincode: string,
    name: string,
    address: string,
    landmark?: string,
    city: string,
    state: string,
    mobileNumber: string,
    alternateNumber?: string,
    addressType: "Home" | "Office",
}

export interface IUser extends Document {
    email: string,
    phone: string,
    name: string,
    dob: string,
    password: string,
    role: UserRole,
    addresses: IUserAddress[]
} 

export const AddressSchema: Schema = new Schema<IUserAddress>({
    pincode: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    landmark: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    alternateNumber: { type: String },
    addressType: { type: String, enum: ["Home", "Office"], required: true },
})

const UserSchema: Schema = new Schema<IUser>({
    email:{type: String, required: true, unique:true },
    phone:{type: String, required: true, unique:true },
    name:{type: String, required: true},
    dob:{type: String, required: true},
    password:{type: String, required: true},
    role: {type: String, enum: ['user','admin'], default: 'user'},
    addresses: [AddressSchema]
},{timestamps:true})

export default mongoose.model<IUser>("users",UserSchema)