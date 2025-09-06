export type AuthStep = 'login-register' | 'signup' | 'verify-otp'

export type checkEmailResult = {
    message?: string
    email: string,
    purpose: 'login' | 'register'
}

export interface UserData {
    email:string;
    phone: string;
    name: string;
    dob: string;
    password: string;
} 

export interface AuthData {
    email: string;
    purpose: 'login' | 'register';
    otp: string;
    payload: {
        phone?: string;
        name?: string;
        dob?: string;
        password?: string;
    }
}