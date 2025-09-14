import type { ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom"


export const ProtectedAdminRoute = ({children}: { children: ReactNode }) => {

    const location = useLocation()
    const user = JSON.parse(localStorage.getItem("UserData") || "{}")

    return user.role === 'admin' ? children : <Navigate to="/" state={{from: location}} replace />
}
