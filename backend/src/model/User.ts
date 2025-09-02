import mongoose, {Schema} from "mongoose";

export interface IUser extends Document {
    phone: string,
    email: string,
    name: string,
    dob: string,
    password: string
} 

const UserSchema: Schema = new Schema<IUser>({

    phone:{type: String, required: true, unique:true },
    email:{type: String, required: true, unique:true },
    name:{type: String, required: true},
    dob:{type: String, required: true},
    password:{type: String, required: true}
    
},{timestamps:true})

export default mongoose.model<IUser>("users",UserSchema)