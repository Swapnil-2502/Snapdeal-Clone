import mongoose, {Schema} from "mongoose";

export interface IUser extends Document {
    email: string,
    phone: string,
    name: string,
    dob: string,
    password: string,
    isVerified: boolean
} 

const UserSchema: Schema = new Schema<IUser>({
    email:{type: String, required: true, unique:true },
    phone:{type: String, required: true, unique:true },
    name:{type: String, required: true},
    dob:{type: String, required: true},
    password:{type: String, required: true},
    isVerified:{type: Boolean, default: false}

},{timestamps:true})

export default mongoose.model<IUser>("users",UserSchema)