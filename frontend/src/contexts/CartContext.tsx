import {createContext, useContext, useEffect, useState} from "react"
import type { CartItem } from "../types/types"


type CartContextType = {
    cartItems: CartItem[];
    openCart: boolean;
    trackOrder: boolean;
    setTrackOrder: React.Dispatch<React.SetStateAction<boolean>>;
    closeTrackOrder: () => void;
    openCartModal: () => void;
    closeCartModal: () => void;
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    calculateSubTotal: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({children}: {children: React.ReactNode}) => {
    const [trackOrder, setTrackOrder] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const openCartModal = () => setOpenCart(true)
    const closeCartModal = () => setOpenCart(false)
    const [cartItems, setCartItems] = useState<CartItem[]>(()=>{
        const saved = localStorage.getItem("CartItems")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("CartItems", JSON.stringify(cartItems))
    },[cartItems])

    const closeTrackOrder = () => {
        setTrackOrder(false)
    }

    const addItem = (item: CartItem) => {
        setCartItems((prev) => {
            const existingItem = prev.find((i) => i._id === item._id)
            if(existingItem){
                return prev.map((i) => 
                    i._id === item._id
                    ? {...i, quantity: Math.min(i.quantity + item.quantity, i.stockAvailable)}
                    : i
                )
            }
            return [...prev,{ ...item, quantity: Math.min(item.quantity, item.stockAvailable) }]
        })
    }

    const removeItem = (id: string) => {
        setCartItems((prev) => prev.filter((i) => i._id !== id))
    }

    const updateQuantity = (id: string, quantity: number) => {
        setCartItems((prev) => prev.map((i) => i._id === id ? {...i,quantity: Math.min(quantity,i.stockAvailable)}:i ))
    }

    const clearCart = () => {
        setCartItems([])
    }

    const calculateSubTotal = () =>{
        return cartItems.reduce((total,item) => {
            return total + (item.price * item.quantity)
        },0)
    }

    return (
        <CartContext.Provider value={{cartItems, addItem, removeItem, updateQuantity, clearCart, calculateSubTotal,openCart,openCartModal,closeCartModal, trackOrder, setTrackOrder, closeTrackOrder}}>
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