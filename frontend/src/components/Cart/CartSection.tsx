import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext"
import { useEffect } from "react";
import { EmptyCartSection } from "./EmptyCartSection";
import { usePayment } from "../../contexts/PaymentContext";
import axios from "../../api/axios";

interface CartValidationResult {
  _id: string;
  title: string;
  status: "not_found" | "out_of_stock" | "less_stock_available" | "ok";
  stock?: number; 
}

export const CartSection= () => {
    const {openCart,closeCartModal, removeItem, updateQuantity,cartItems, calculateSubTotal,setCartItems} = useCart()
    const {openPayment} = usePayment()
   
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

    const handlePayment = async () => {
        const cartProducts = JSON.parse(localStorage.getItem('CartItems') || "{}")

        try{
            const res = await axios.post("/product/validateStock", { cartItems: cartProducts });
            const { results } = res.data;

            setCartItems((prev) => 
                prev.map((item) => {
                    const serverItem = results.find((r: any) => r._id === item._id);
                    return serverItem
                        ? { ...item, stockAvailable: serverItem.stock ?? item.stockAvailable }
                        : item;
                })
            )

            const invalidItems = results.filter((r: CartValidationResult) => r.status !== "ok")

            if(invalidItems.length > 0){
                invalidItems.forEach((item: CartValidationResult) => {
                    if (item.status === "out_of_stock"){
                        alert(`"${item.title}" is out of stock`);
                    }
                    else if (item.status === "less_stock_available"){
                        alert(`"${item.title}" has less stocks and only ${item.stock} stocks are left`);
                    }
                    else if (item.status === "not_found") {
                        alert(`"${item.title}" is no longer available`);
                    }
                })
                return;
            }

            openPayment();
        }
        catch(error){
            console.error(error);
            alert("Something went wrong while validating stock.");
        }

    }

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
                                    
                                    <div className="pincode-check-disable ">
                                        <span className="lfloat">Showing Availability</span> 
                                       
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
                                                    <img className="item-image" width="60" alt={product.title} src={product.imageURL} style={{filter:  product.stockAvailable === 0 ? "grayscale(100%)" : "none"}}/>
                                                </Link>
                                                {product.stockAvailable === 0 && (
                                                    <span style={{position:'absolute', top: "5px",  left: "5px",background: "red",color: "white",  padding: "2px 6px",fontSize: "12px",borderRadius: "4px"}}>No Stock</span>
                                                )}
                                            </div>
                                            <div className="cart-minh col-xs-5 ">
                                                <div className="item-description">
                                                    <div className="item-name-wrapper">
                                                        <Link to={`/product/${TitleSlug}/${product._id}`} title={product.title} className="item-name">{product.title}</Link>
                                                    </div>
                                                    <p className="item-extra-feature">
                                                        {product.size && 
                                                            <>
                                                                <span> | </span>
                                                                    <span>Size: {product.size}</span>
                                                            </>}
                                                        {product.color?.length === 1 && 
                                                            <>
                                                                <span> | </span>
                                                                    <span>Color: {product.color[0]}</span>
                                                            </>}
                                                    </p>
                                                </div>
                                                <div className="item-offers "></div>
                                            </div>
                                            
                                            <div className="col-xs-2 unit-price-block "><span className="item-price">₹ {product.price}</span></div>
                                            
                                            <div className="col-xs-4 cart-item-quantity ">
                                                <select  value={product.quantity} onChange={(e) => updateQuantity(product._id, parseInt(e.target.value) || 1)} style={{marginLeft:"70px", textAlign: "center" ,width:"40px",height:"35px", outline:"none", border: "1px solid #ccc"}}>
                                                        {[...Array(Math.min(3,product.stockAvailable))].map((_,i) => (
                                                            <option key={i+1} value={i+1}>{i+1}</option>
                                                        ))}
                                                </select>
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
                                                <br/>
                                                {product.stockAvailable === 0 && (
                                                    <p style={{ color: "red", fontSize: "13px", marginTop: "8px" }}>
                                                        This product just went out of stock, remove it to proceed
                                                    </p>
                                                )}
                                                {product.stockAvailable !==0 && product.stockAvailable < product.quantity && (
                                                <p style={{ color: "red", fontSize: "13px", marginTop: "8px" }}>
                                                    This product now has less quantity, only {product.stockAvailable} stocks are left
                                                </p>
                                            )}
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
                                <button type="button" className="btn btn-xl rippleWhite cart-button" id="rzp-cart-button"  value={TotalBill} style={{lineHeight: "0", width:"100%"}} onClick={handlePayment}>PROCEED TO PAY  ₹{TotalBill}</button>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    </div>
    </>
  )
}
