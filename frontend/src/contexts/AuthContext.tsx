import { createContext, useContext, useState } from "react";
import { type checkEmailResult, type UserData } from "../types/types";
import axios from "../api/axios";

type AuthContextType = {
    userData: UserData;
    setUserData: (data: UserData) => void
    updateUserData: (data: Partial<UserData>) => void
    checkEmail: (email: string) => Promise<checkEmailResult>
    register: () => Promise<void>
    verifyOtp: (email: string, otp: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const initialUserData : UserData ={
    email: "",
    phone: "",
    name: "",
    dob: "",
    password: ""
};

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const [userData, setUserData] = useState<UserData>(initialUserData)

    const updateUserData = (data: Partial<UserData>) => {
        setUserData((prev) => ({...prev, ...data}))
    }

    const checkEmail = async (email: string): Promise<checkEmailResult> => {
        const res = await axios.post("/auth/check-email",{email})
        console.log("check-email",res.data)
        updateUserData({
            email: email
        })
        return res.data
    }

    const register = async (): Promise<void> => {
        const res = await axios.post("/auth/register",JSON.stringify(userData))

        console.log("From register->",userData)
        console.log("RES.DATA",res.data)
        return res.data
    }

    const verifyOtp = async (email: string, otp: string): Promise<void> => {
        try{
            const res = await axios.post("/auth/verifyotp",{email, otp})

            localStorage.setItem("UserData", JSON.stringify(res.data.user))
            localStorage.setItem("Token", res.data.token)
            console.log("FROM VERIFYOTP->",res.data)
            return res.data
        }
        catch{
            throw new Error('Invalid Otp')
        }
       
    }

    return (
        <AuthContext.Provider value={{checkEmail, register, userData, setUserData, updateUserData, verifyOtp}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};