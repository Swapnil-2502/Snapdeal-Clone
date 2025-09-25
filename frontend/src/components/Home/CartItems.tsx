import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

interface CartItemsProps {
    index: number;
    currentIndex: number;
    onNext: () => void;
}

export const CartItems = ({index,currentIndex,onNext}:CartItemsProps) => {

    const {cartItems, openCartModal} = useCart()

    const isActive = index === currentIndex;

    const styles = {
      opacity: 1,
      zIndex: isActive ? 4 : 3,
      pointerEvents: isActive ? "auto" : "none",
      transform: isActive
        ? "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
        : "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -50, 1)",
      transition: "transform 0.5s ease-out",
      margin: isActive ? "0px" : "14px 0px 0px 12px",
    } as React.CSSProperties

    const generateSlug = (title: string) => {
        return title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').substring(0, 60); 
    }

  return (
    <>
        
        <li className="stack__item nextBestActlist itemsInCartActnWidget stack__item--current"  
            style={styles}>
            <div className="shortListWidget">Your Cart</div>
            <div className="heartLine padL20 padT5">There <span className="areField">are </span> 
                <span className="cartCount">{cartItems.length}</span>  
                <span className="itemsVal"> items</span> in your cart
            </div>
            {cartItems.slice(0,2).map((item, index) => {
                const slug = generateSlug(item.title)
                return (
                <div key={index} className="shortListImgDiv clearfix cartItemDiv">
                    <div className="shortListImg">
                        <Link to={`/product/${slug}/${item._id}`}>
                            <img className="wooble" src={item.imageURL}/>
                        </Link>
                    </div>
                    <div className="shortListName">
                        <Link to={`/product/${slug}/${item._id}`}>
                            <span className="nameDiv">{item.title}</span>
                        </Link>
                        <div className="prodPrice">Rs {item.price}</div> 
                        {/* <div className="ordLink  nbaBuyNow padT10">
                            <span className="nbaBuyLink" >BUY NOW</span> 
                        
                        </div> */}
                    </div>
                </div>)
            })}

            {cartItems.length === 0 && 
                <div style={{margin: "105px 0px"}}>
                    <p> Your Cart is Empty</p>
                </div>
            }

            <div className="controls nextBestActionControls padT10 col-xs-24">
                <button className="btn viewAllCartBtn button--reject btn-theme-secondary col-xs-16 nextBestActionTrack" data-stack="stack_yuda" onClick={() => openCartModal()}>
                    <span className="">VIEW ALL</span>
                </button>
                <button className="btn button--accept btn-light col-xs-7 rfloat" data-stack="stack_yuda" onClick={onNext}>
                    <span className="">NEXT</span>
                </button>
            </div>
        </li>
        
    </>
  )
}
