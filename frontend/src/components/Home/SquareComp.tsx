import { useState } from "react";
import { CartItems } from "./CartItems"
import { Pincode } from "./Pincode"
import { useCart } from "../../contexts/CartContext";


export const SquareComp = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const {cartItems} = useCart()

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % 2)
    }

  return (
    <>
        <div className="next-Best-Action-Widget">
            <div className="content">
                <ul id="stack_yuda" className="nextBestActnWidget stack stack--yuda perspective">
                    {cartItems.length > 0 ? (
                        <>
                        <Pincode index={1} currentIndex={currentIndex}  onNext={handleNext}/>
                        <CartItems  index={0} currentIndex={currentIndex}  onNext={handleNext}/>
                        </>
                    ):(
                        <>
                        <Pincode index={1} currentIndex={currentIndex}  onNext={handleNext}/>
                        <CartItems  index={0} currentIndex={currentIndex}  onNext={handleNext}/>
                        </>
                    )}
                </ul>
            </div>
        </div>
    
    </>
  )
}
