import { createContext, useContext, useState } from "react"


type PaymentContextType = {
    isOpen: boolean;
    openPayment: () => void;
    closePayment: () => void;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined)

export const PaymentProvider =  ({children}: {children: React.ReactNode}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openPayment = () => setIsOpen(true)
    const closePayment = () =>{
        setIsOpen(false)
        localStorage.removeItem("BuyNowProduct")
    } 

    return (
        <PaymentContext.Provider value={{isOpen,openPayment,closePayment}}>
            {children}
        </PaymentContext.Provider>
    )
}

export const usePayment = () => {
    const context = useContext(PaymentContext);
    if(!context){
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}