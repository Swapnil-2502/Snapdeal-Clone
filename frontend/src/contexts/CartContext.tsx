import {createContext, useContext, useEffect, useState} from "react"
import type { CartItem } from "../types/types"


type CartContextType = {
    cartItems: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    calculateSubTotal: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({children}: {children: React.ReactNode}) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(()=>{
        const saved = localStorage.getItem("CartItems")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("CartItems", JSON.stringify(cartItems))
    },[cartItems])

    const addItem = (item: CartItem) => {
        setCartItems((prev) => {
            const existingItem = prev.find((i) => i._id === item._id)
            if(existingItem){
                return prev.map((i) => 
                    i._id === item._id
                    ? {...i, quantity: (i.quantity + item.quantity)}
                    : i
                )
            }
            return [...prev,item]
        })
    }

    const removeItem = (id: string) => {
        setCartItems((prev) => prev.filter((i) => i._id !== id))
    }

    const updateQuantity = (id: string, quantity: number) => {
        setCartItems((prev) => prev.map((i) => i._id === id ? {...i,quantity} : i ))
    }

    const clearCart = () => {
        setCartItems([])
    }

    const calculateSubTotal = () =>{
        let Total = 0;
        cartItems.map((item) => Total += item.price* item.quantity)
        return Total
    }

    return (
        <CartContext.Provider value={{cartItems, addItem, removeItem, updateQuantity, clearCart, calculateSubTotal}}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart= ():CartContextType => {
    const context = useContext(CartContext);
    if(!context){
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}