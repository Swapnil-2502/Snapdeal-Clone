import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext"
import { useEffect } from "react";
import { EmptyCartSection } from "./EmptyCartSection";
import { usePayment } from "../../contexts/PaymentContext";

export const CartSection= () => {
    const {openCart,closeCartModal, removeItem, updateQuantity} = useCart()
    const {openPayment} = usePayment()
    const {cartItems, calculateSubTotal} = useCart()

    useEffect(() => {
        if(openCart) {
            document.body.style.overflow = "hidden";
        }
        else{
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    },[openCart])

    const generateSlug = (title: string) => {
        return title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').substring(0, 60); 
    }

    const TotalBill = calculateSubTotal()

  return (
    <>
    <div id="cartModal" className={`modal-box fade-animation ${openCart ? "in" : ""}`} style={{display: openCart ? "block" : "none"}} >
        <div className={`modal-box-backdrop fade-animation  ${openCart ? "in" : ""}`} data-omniturename="cartCloseFadedArea"></div>
        
        <div className={`modal-box-dialog ${openCart ? "in" : ""} ${cartItems.length===0 ? 'empty-cart':''}`} data-omniturename="cartCloseFadedArea">
            
                <div className="modal-box-content">
                    <div className="cart-container" id="rtbScriptContainer" style={{height: "584px"}}>

                        {cartItems.length === 0 && <EmptyCartSection />}

                        {cartItems.length !== 0 && <>
                        <div className="cart-heading clearfix">
                            <h3>Shopping Cart <span>({cartItems.length})</span></h3>
                            <span className="icon-font-grey-size24 close-popup-icon" data-omniturename="cartCrossedNew"> 
                                <button style={{background: "none",border: "none",fontSize: "44px",color: "black",cursor: "pointer", paddingBottom:"28px", paddingRight:"10px"}} onClick={() => closeCartModal()}>×</button>
                            </span>
                        </div>


                        <div className="cart-head-label-wrapper">
                            <div className="clearfix cart-head-label pincode-check">
                                <div className="col-xs-3 cart-list-heading">
                                    <span>Item Details</span>
                                </div>
                                <div className="col-xs-5 cart-list-heading"></div>
                                <div className="col-xs-2 cart-list-heading unit-price-block">
                                    <span className="unit-price-heading">Price</span>
                                </div>
                                <div className="col-xs-4 cart-list-heading text-center">Quantity</div>
                                <div className="col-xs-6 cart-list-heading pincode-block">
                                    {/* <div className="pincode-check-enable disp-none">
                                        <span className="lfloat">Delivery with Charges</span> 
                                        <input type="text" id="pincode-value"  maxLength={6} placeholder="Pincode" data-id="pincode-error-tooltip" style={{borderColor: "rgb(213, 213, 213)"}}/> 
                                        <a id="send-pincode" data-omniturename="checkZipcart" className="col-xs-5 btn btn-small btn-theme-secondary rippleWhite pincode-button">Check</a>
                                        <div id="pincode-error-tooltip" className="hidden">
                                        <p className="pincode-error-text">Please enter a valid pincode.</p>
                                        </div>
                                    </div> */}
                                    <div className="pincode-check-disable ">
                                        <span className="lfloat">Showing Availability</span> 
                                        {/* <span className="cart-pincode">440027</span>  */}
                                        {/* <a className="cart-pin-change" data-omniturename="changeZipcart"><i className="sd-icon sd-icon-edit"></i></a> */}
                                    </div>
                                </div>
                                <div className="col-xs-4 cart-list-heading cart-list-heading-subtotal">
                                    <div className="text-right">
                                        <span className="subtotal-heading">Subtotal</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cart-items-list clearfix" style={{maxHeight: "459px"}}>
                            <ul className="clearfix">
                                {cartItems.map((product,index) => {
                                    const TitleSlug = generateSlug(product.title)
                                    return (
                                        <li key={index} className="clearfix cart-item">
                                            <div className="broder-top-line-cart"></div>
                                            <div className="col-xs-3 img-field  pad-3px-top">
                                                <Link to={`/product/${TitleSlug}/${product._id}`}>
                                                    <img className="item-image" width="60" alt={product.title} src={product.imageURL}/>
                                                </Link>
                                            </div>
                                            <div className="cart-minh col-xs-5 ">
                                                <div className="item-description">
                                                    <div className="item-name-wrapper">
                                                        <Link to={`/product/${TitleSlug}/${product._id}`} title={product.title} className="item-name">{product.title}</Link>
                                                    </div>
                                                </div>
                                                <div className="item-offers "></div>
                                            </div>
                                            
                                            <div className="col-xs-2 unit-price-block "><span className="item-price">₹ {product.price}</span></div>
                                            
                                            <div className="col-xs-4 cart-item-quantity ">
                                                <input type="text" min={1} value={product.quantity} onChange={(e) => updateQuantity(product._id, parseInt(e.target.value) || 1)} style={{marginLeft:"70px", textAlign: "center" ,width:"30px",height:"30px", outline:"none", border: "1px solid #ccc"}}/>
                                            </div>
                            
                                            <div className="col-xs-6 delivery-container">
                                                <div className="delivery-options clearfix"><span>Standard Delivery By 2 - 3 days <span className="avail-free">FREE </span> </span></div>
                                                <div className="social-nudge-container" style={{position : "relative",left:"-50%"}}>
                                                    <div className="nudges-container">
                                                        <div className="left-nudge nudge-info hidden" style={{position:"static",marginBottom: "3%",marginTop: "3%", display:"inline-block"}}></div>
                                                        <div className="right-nudge nudge-info hidden" style={{position:"static",marginBottom: "3%",marginTop: "1%", display:"inline-block"}}></div>
                                                        <div className="rating-nudge nudge-info hidden">
                                                            <div className="rating-stars ">  <div className="grey-stars"></div> <div className="filled-stars"></div></div><div className="rfloat nudge-rating"></div>
                                                        </div>
                                                    </div>
		                                        </div>
                                            </div>
                                            
                                            <div className="col-xs-4 cart-item-details">
                                                <div className="text-right">
                                                    <div className="cart-collapsed">
                                                        <p><span className="item-subtotal-black">₹ {product.price}</span></p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="clearfix shortlist-color row">
                                            <div className="remove-item-div">
                                                <span className="remove-item-shortlist" data-name="India @100 : Envisioning Tomorrow’s Economic Powerhouse" data-live="true" data-omniturename="removeFromCartNew" 
                                                    data-catalogid="686805720004" data-bundleid="" data-vendorcode="S477d3" data-heroitem="false" data-bundletype="" data-supc="SDL933213784" 
                                                    data-pogid="635947174556" data-sellingprice="592" data-promoapplied="false" onClick={() => removeItem(product._id)}>
                                                        <button style={{background: "none",border: "none",fontSize: "18px",color: "black",cursor: "pointer", paddingBottom:"28px", paddingRight:"10px"}} >×</button>
                                                        REMOVE
                                                </span>
                                            </div>
                                            </div>
                                        </li>)
                                })}
                            </ul>
                        </div>
                        </>}
                    </div>
                </div>
                
                {cartItems.length !== 0 && 
                <div className="cart-footer-wrapper clearfix">
                    <div className="cart-footer-content row">
                        <div className="col-xs-11 cart-trust-wrap">
                            <div className="cart-security-footer">
                                <div className="safe-secure"> Safe and Secure Payments</div> 
                                <div className="trustpay"> 100% Payment Protection, Easy Returns Policy</div>
                            </div>
                        </div>
                        <div className="col-xs-6 cart-bill-summary">
                            <div className="cart-bill-wrapper ">
                                <div className="clearfix sub-total-charges">
                                    <div className="cart-sub-total text-right clearfix">
                                        <label className="lfloat">Sub Total: </label> 
                                        <span className="rfloat">₹ {TotalBill}</span>
                                    </div>
                                    <div className="cart-sub-total text-right clearfix">
                                        <label>Delivery Charges: </label> <span className="rfloat delivery-color">FREE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-7 cart-bill-summary ">
                            <div className="cart-bill-wrapper rfloat" >
                                <button type="button" className="btn btn-xl rippleWhite cart-button" id="rzp-cart-button"  value={TotalBill} style={{lineHeight: "0", width:"100%"}} onClick={openPayment}>PROCEED TO PAY  ₹{TotalBill}</button>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    </div>
    </>
  )
}
