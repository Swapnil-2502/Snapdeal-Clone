import mongoose, {Schema} from "mongoose";

export type AuthPurpose = 'register' | 'login'

export interface IAuthPayload {
    phone?: string;
    name?: string;
    dob?: string;
    password?: string;
}

export interface IAuthSession extends Document {
    email: string;
    purpose: AuthPurpose;
    otp: string;
    payload: IAuthPayload | null;
    expiresAt: Date;
}

const PayloadSchema: Schema = new Schema<IAuthPayload>({
    phone: {type: String},
    name: {type: String},
    dob: {type: String},
    password: {type: String},
},{_id: false}) 

const AuthSessionSchema: Schema = new Schema<IAuthSession>({
    email: {type: String, required: true, lowercase: true, index: true},
    purpose: {type: String, enum: ['login','register'], required: true},
    otp: {type: String, required: true},
    payload: {type: PayloadSchema, default: null},
    expiresAt: { type: Date, required: true, index: true },
},{timestamps: true})


export default mongoose.model<IAuthSession>("auth_sessions",AuthSessionSchema)



// db.registers.createIndex(
// |   { "expiresAt": 1 }, 
// |   { 
// |     expireAfterSeconds: 0,
// |     background: true 
// |   }
// | )

// RegisterSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// RegisterSchema.index({ email: 1, purpose: 1})
