import { createContext, useContext, useEffect, useState } from "react";
import { type StoredUserData, type checkEmailResult, type UserData } from "../types/types";
import axios from "../api/axios";
import { useCart } from "./CartContext";

type AuthContextType = {
    userData: UserData;
    storedUser: StoredUserData | null;
    token: string | null;
    isAuthenticated: boolean;
    setUserData: (data: UserData) => void
    updateUserData: (data: Partial<UserData>) => void
    checkEmail: (email: string) => Promise<checkEmailResult>
    register: () => Promise<void>
    verifyOtp: (email: string, otp: string) => Promise<void>
    logout: () => void;
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
    const [token, setToken] = useState<string | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [storedUser, setStoredUser] = useState<StoredUserData | null>(null)
    const {clearCart} = useCart()
    

    useEffect(() => {
        const localstoredUser = localStorage.getItem("UserData")
        const localstoredToken = localStorage.getItem("Token")

        if(localstoredUser && localstoredToken){
            setStoredUser(JSON.parse(localstoredUser))
            setToken(localstoredToken)
            setIsAuthenticated(true);
        }
    },[])

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

        return res.data
    }

    const verifyOtp = async (email: string, otp: string): Promise<void> => {
        try{
            const res = await axios.post("/auth/verifyotp",{email, otp})
            setToken(res.data.token)
            localStorage.setItem("UserData", JSON.stringify(res.data.user))
            localStorage.setItem("Token", res.data.token)
            setStoredUser(res.data.user)
            setIsAuthenticated(true)
            return res.data
        }
        catch{
            throw new Error('Invalid Otp')
        }
       
    }

    const logout = () => {
        localStorage.removeItem("Token")
        localStorage.removeItem("UserData")

        setUserData(initialUserData)
        setToken(null)
        clearCart()
    }

    return (
        <AuthContext.Provider value={{checkEmail, register, userData, setUserData, updateUserData, verifyOtp, token, logout,isAuthenticated, storedUser}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};