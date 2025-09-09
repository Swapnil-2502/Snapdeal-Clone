import { useEffect, useState } from "react"
import axios from "../api/axios"
import { Link, useParams } from "react-router-dom"
import type {ProductData } from "../types/types"
import { useCart } from "../contexts/CartContext"

export const Tocart = () => {
    const {cartItems,calculateSubTotal,openCartModal} = useCart()
    const {productId} = useParams<{productId: string}>()
    const [product, setProduct] = useState<ProductData | null>(null)
    const [close, setClose] = useState(true)

    useEffect(() => {
        const fetchProduct = async () =>{
            const res = await axios.get(`/product/${productId}`)
            setProduct(res.data.product)
        }
        fetchProduct()
    },[])

    const TotalBill = calculateSubTotal()

    const generateSlug = (title: string) => {
        return title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').substring(0, 60); 
    }

    const TitleSlug = product?.title ? generateSlug(product?.title) : ""

  return (
    <>
    <div className="wrapper">
        <div className="col-xs-24">
            <div id="cartProductContainer">
                <div className="card">
                    {close && 
                        <div className="mess-container">
                            <span className="mess-text">{product?.title}</span>
                            <button style={{background: "none",border: "none",fontSize: "44px",color: "white",cursor: "pointer", paddingBottom:"28px", paddingRight:"10px"}} onClick={() => setClose(false)}>×</button>
                        </div>
                    }
                    <div className="cart-item-container row">
                        <div className="col-xs-10 products">
                            <div className="parent-product row">
                                <div className="col-xs-6 reset-padding image-container">
                                    <Link to={`/product/${TitleSlug}/${product?._id}`} data-pog="635947174556" className="cart-link">
                                        <img className="img-size" src={product?.images[0]}/>
                                    </Link>
                                </div>
                                <div className="col-xs-18">
                                    <span className="product-name">
                                        <Link to={`/product/${TitleSlug}/${product?._id}`} className="cart-link">{product?.title}
                                        </Link></span>
                                    <span className="price">₹{product?.price}</span>
                                </div>
                            </div>
                        </div> 
                        <div className="col-xs-14">
                            <div className="action-container row">
                            <div className="col-xs-9 info-container">
                                <div className="cart">Your Order&nbsp;<span className="count">{cartItems.length}&nbsp;Items</span></div>
                                
                                <div className="you-pay">You Pay: <span className="price">₹ {TotalBill}</span></div>
                                <div className="extra-charges">(Including delivery and other charges. View Cart for details)</div>
                            </div>
                            <div className="col-xs-15 btn-container">
                                <a href="javascript:void(0)" className="btn marR5" id="rzp-quickcart-button">Proceed To Checkout</a>
                                <div className="btn btn-theme-secondary open-cart" onClick={() => openCartModal()}>View Cart</div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
		    </div>
        </div>
    </div>
    <div className="hardbundle-cont marT40">
        <div className="container-fluid reset-padding orderThnkyou-hardbundle">
            <div className="tabs">
                <ul className="tab-links col-xs-24 reset-padding"></ul>
            </div>
		</div>
	</div>
    </>
  )
}
