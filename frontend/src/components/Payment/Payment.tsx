import { useCart } from "../../contexts/CartContext"
import { usePayment } from "../../contexts/PaymentContext"
import type { CartItem } from "../../types/types"
import axios from "../../api/axios"



declare global {
  interface Window {
    Razorpay: any;
  }
}



interface CreateOrderResponse {
  id: string;
  amount: number;
  currency: string;
  status: string;
  
}

interface VerifyPaymentResponse {
  status: 'ok' | 'verification_failed' | 'error';
  error?: string;
}

export const Payment = () => {
    const {closePayment} = usePayment()
    const {calculateSubTotal} = useCart()
    const token = localStorage.getItem("Token")
    const headers = {
        Authorization: `Bearer ${token}`,
    }

    let TotalBill = 0

    const DefaultAddress = JSON.parse(localStorage.getItem("DefaultAddress") || "{}")

    const buynowproduct = localStorage.getItem("BuyNowProduct")
    const cartItems = localStorage.getItem("CartItems")

    const isBuyNowCase = !!buynowproduct
    const isCartCase = !!cartItems 

    if(isCartCase) TotalBill = calculateSubTotal()
   

    const products: CartItem[] = isBuyNowCase 
        ? [JSON.parse(buynowproduct)] 
        : isCartCase 
        ? JSON.parse(cartItems) 
        : []

    if(isBuyNowCase) TotalBill = products.reduce((sum, p) => sum + p.price, 0)

    const items = JSON.parse(localStorage.getItem("CartItems") || "[]")
    const address = JSON.parse(localStorage.getItem("DefaultAddress") || "{}")

    const handlePayment = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try{
            const response = await axios.post<CreateOrderResponse>("/payment/create-order", {amount: TotalBill, currency: "INR", receipt: "receipt#1" })
            JSON.stringify(response)
            const order = response.data
        
            const options = {
                key: "rzp_test_RGdtPXPT3NrwUx",
                amount: order.amount,
                currency: order.currency,
                name: "Snapdeal Clone",
                description: "Test Transaction",
                order_id: order.id,
                

                handler: async (response:any) => {
                    console.log(response.razorpay_order_id,response.razorpay_payment_id,response.razorpay_signature)
                    const verifyPayment = await axios.post<VerifyPaymentResponse>("/payment/verify-payment", {
                        hello: 'goodword',
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature
                    })

                    const product = await axios.post("/order",{items,address,totalAmount:TotalBill},{headers})
                    console.log("Hello->",product)

                    const data = verifyPayment.data
                    console.log("aobve if->",data)
                    if (data.status === "ok") {
                        window.location.href = "/";
                    } else {
                        alert("Payment verification failed");
                    }
                    
                },
                prefill: {
                    name: "Test User",
                    email: "test@example.com",
                    contact: "9999999999",
                },
                theme: {
                    color: "#F37254",
                },
                
            }
            const rzp = new window.Razorpay(options);
            rzp.open();

        
        }
        catch(err){
            console.log(err)
        }
       
    }


  return (
    <>
    <div className="payment-overlay">
      <div className="payment-modal">
        <div id="container" className="mfix svelte-m8cs0k redesign noimage redesign-v165 magic-dweb downtime-v2 font-loaded drishy">
  
            
            <div id="modal" className="mchild svelte-m8cs0k full-height one-cc one-click-checkout">
                
                <div id="modal-inner">

                    <div id="content" className="one-cc header-expanded">
                        <div id="redesign-header" className="svelte-m8cs0k" style={{transition:" all 0.5s" }}>

                            <div id="header-redesign-v15-wrap" className="svelte-m8cs0k">
                                <div id="header-1cc" className="svelte-s662vu">
                                    
                                    <div className="header-wrapper svelte-s662vu">
                                        <div className="title-section svelte-s662vu">
                                            <div className="header-container svelte-s662vu title-container">
                                                <p className="header-title svelte-s662vu">Snapdeal</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="header-body-wrapper svelte-s662vu">
                                        <div className="rtb-expanded-wrapper svelte-1ngfbr8 light-bg">
                                            <div className="rtb-icon-wrapper svelte-1ngfbr8">
                                                <img src="https://checkout-static-next.razorpay.com/build/assets/images/rtb-live.d7eecf4c.svg" height="16" width="16" alt="rtb-logo"/>
                                            </div>
                                            <div className="rtb-text svelte-1ngfbr8">Razorpay Trusted Business</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M5.4 4.2H6.6V3H5.4V4.2ZM5.4 9H6.6V5.4H5.4V9ZM5.994 12C2.682 12 0 9.312 0 6C0 2.688 2.682 0 5.994 0C9.312 0 12 2.688 12 6C12 9.312 9.312 12 5.994 12ZM6 1.2C3.348 1.2 1.2 3.348 1.2 6C1.2 8.652 3.348 10.8 6 10.8C8.652 10.8 10.8 8.652 10.8 6C10.8 3.348 8.652 1.2 6 1.2Z" fill="#FFFFFF"></path></svg>

                                        </div>
                                        <div onClick={closePayment}>
                                            <button style={{background: "#E40046",border: "none",fontSize: "22px",color: "white",cursor: "pointer", paddingBottom:"15px"}}>×</button>
                                        </div>
                                       
                                    </div>

                                </div>
                            
                            </div>

                             <div id="topbar-redesign-v15-wrap">
                                <div id="topbar-new" className="svelte-k4bukd">
                                    <div className="title-section svelte-k4bukd"> </div> 
                                    <div data-test-id="breadcrumb-nav" className="breadcrumb svelte-k4bukd">
                                            <span className="item svelte-1wcexm7">
                                            <span className="text svelte-1wcexm7 theme text-bold">Summary</span> 
                                            <span className="icon svelte-1wcexm7"> <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.707 6.293a1 1 0 0 0-1.414 1.414L9.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5Z" fill="#676A6D"></path><path d="M13.707 6.293a1 1 0 1 0-1.414 1.414L16.586 12l-4.293 4.293a1 1 0 0 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5Z" fill="#676A6D"></path><path d="M6.707 6.293a1 1 0 0 0-1.414 1.414L9.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5Z" stroke="#fff" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.707 6.293a1 1 0 1 0-1.414 1.414L16.586 12l-4.293 4.293a1 1 0 0 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5Z" stroke="#fff" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></span>
                                            <span className="item svelte-1wcexm7"><span className="text svelte-1wcexm7">Payments</span> </span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div id="body" className="sub svelte-m8cs0k">
                            <form id="form" className="svelte-m8cs0k">
                                <div id="form-fields">

                                    <div id="form-home-1cc" className="tab-content showable screen svelte-i7wtun drishy resetMargin tab-content-one-cc">
                                        <div className="container svelte-1h7sd1r">
                                            <div className="screen screen-comp svelte-2vl1z0 redesign-v15">
                                                <div data-test-id="summary-screen" className="coupon-container svelte-4vja0c"> 
                                                    <div className="widget-wrapper svelte-4vja0c">
                                                        <div className="contact-container">
                                                            <div className="contact-header svelte-mjp5jo">
                                                                <div className="contact-title svelte-mjp5jo"> 
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#F0F0F4"></circle><path d="M16.1643 14.4138C16.7362 13.9638 17.1536 13.3468 17.3585 12.6486C17.5634 11.9504 17.5456 11.2056 17.3075 10.518C17.0694 9.83035 16.6229 9.23402 16.0302 8.81196C15.4374 8.38989 14.7278 8.16309 14.0001 8.16309C13.2724 8.16309 12.5629 8.38989 11.9701 8.81196C11.3773 9.23402 10.9308 9.83035 10.6927 10.518C10.4547 11.2056 10.4368 11.9504 10.6417 12.6486C10.8466 13.3468 11.2641 13.9638 11.836 14.4138C10.856 14.8064 10.001 15.4576 9.36197 16.2979C8.72299 17.1382 8.32403 18.1362 8.20762 19.1855C8.19919 19.2621 8.20594 19.3396 8.22747 19.4136C8.249 19.4876 8.28489 19.5566 8.3331 19.6167C8.43046 19.7382 8.57208 19.8159 8.72679 19.833C8.8815 19.85 9.03663 19.8048 9.15806 19.7075C9.27949 19.6101 9.35727 19.4685 9.37429 19.3138C9.50238 18.1735 10.0461 17.1203 10.9016 16.3556C11.7571 15.5908 12.8643 15.1681 14.0118 15.1681C15.1593 15.1681 16.2665 15.5908 17.122 16.3556C17.9775 17.1203 18.5212 18.1735 18.6493 19.3138C18.6651 19.4571 18.7335 19.5895 18.8413 19.6854C18.949 19.7813 19.0884 19.8338 19.2326 19.833H19.2968C19.4497 19.8154 19.5895 19.738 19.6856 19.6179C19.7818 19.4977 19.8265 19.3443 19.8101 19.1913C19.6932 18.1391 19.292 17.1385 18.6498 16.2969C18.0075 15.4553 17.1483 14.8043 16.1643 14.4138ZM14.0001 13.9996C13.5386 13.9996 13.0875 13.8628 12.7038 13.6064C12.3201 13.35 12.021 12.9856 11.8444 12.5592C11.6678 12.1329 11.6216 11.6637 11.7116 11.2111C11.8017 10.7585 12.0239 10.3427 12.3502 10.0164C12.6765 9.69005 13.0923 9.46783 13.5449 9.37779C13.9975 9.28776 14.4667 9.33397 14.893 9.51057C15.3194 9.68718 15.6838 9.98625 15.9402 10.37C16.1966 10.7537 16.3335 11.2048 16.3335 11.6663C16.3335 12.2851 16.0876 12.8786 15.65 13.3162C15.2125 13.7538 14.619 13.9996 14.0001 13.9996Z" fill="#171A1E" stroke="#171A1E" stroke-width="0.3"></path></svg>
                                                                    <span className="contact-text svelte-mjp5jo">Contact Details</span>
                                                                </div> 
                                                                <div data-test-id="edit-contact" className="contact-edit theme svelte-mjp5jo">Change</div>
                                                            </div> 
                                                            <div className="contact-info svelte-mjp5jo">
                                                                <div className="phone-text svelte-mjp5jo">+91 {DefaultAddress.mobileNumber}</div> 
                                                            </div>   
                                                        </div>
                                                    </div> 
                                                    <div className="separator svelte-4vja0c"></div> 
                                                    <div className="widget-wrapper svelte-4vja0c">
                                                        <div className="address-widget-container svelte-1a5r2nu" id="delivery-address-widget">
                                                            <div className="col-center label-container flex-row svelte-1a5r2nu">
                                                                <div className="col-center flex-row svelte-1a5r2nu"> 
                                                                    <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="14" fill="#F0F0F4"></circle><path clip-rule="evenodd" d="M8.18 12.794a5.759 5.759 0 0 1 11.517.039v.065c-.04 2.068-1.193 3.979-2.609 5.472-.809.84-1.713 1.584-2.693 2.217a.698.698 0 0 1-.913 0 14.862 14.862 0 0 1-3.79-3.547 7.37 7.37 0 0 1-1.512-4.226v-.02Z" stroke="#171A1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.938 14.75a1.846 1.846 0 1 0 0-3.692 1.846 1.846 0 0 0 0 3.692Z" stroke="#171A1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> 
                                                                    <span className="label-text svelte-1a5r2nu">Delivery Address</span> 
                                                                    <p className="label-cta total-addresses svelte-1a5r2nu"></p>
                                                                </div> 
                                                                <button data-test-id="manage-address-cta" className="label-cta theme svelte-1a5r2nu">Add / Change</button>
                                                            </div>  
                                                            <button data-testid="address-box" id="address-container-PDEKsJeH5rFBNl" className="card address-container svelte-vf2ov2"> 
                                                                <div className="box-header svelte-vf2ov2">
                                                                    <div className="box-title svelte-vf2ov2">
                                                                        <span className="address-name data-hj-suppress svelte-vf2ov2">{DefaultAddress.name}</span> 
                                                                    </div>
                                                                </div> 
                                                                <div className="svelte-vf2ov2">
                                                                    <div className="svelte-vf2ov2">
                                                                        <p className="address-phone-number svelte-vf2ov2">+91 {DefaultAddress.mobileNumber}</p> 
                                                                        <p className="address-text svelte-vf2ov2">{DefaultAddress.address}</p> 
                                                                        <p className="address-text svelte-vf2ov2">{DefaultAddress.landmark}</p> 
                                                                        <p className="address-text svelte-vf2ov2">{DefaultAddress.city}, {DefaultAddress.state}, {DefaultAddress.pincode}</p> 
                                                                    </div>  
                                                                    <span className="svelte-1a5r2nu"></span>
                                                                </div>
                                                            </button>  
                                                        </div>
                                                    </div> 
                                                    <div className="separator svelte-4vja0c"></div>    
                                                </div>  
                                                <div className="shadow shadow-top svelte-2vl1z0"></div>
                                                <div className="shadow shadow-bottom svelte-2vl1z0"></div>
                                            </div> 
                                        </div> 
                                    </div>
                                </div>
                                <div className="cta-container has-tooltip svelte-1milfy7 with-amount"> 
                                    <div className="flex-column svelte-1milfy7">  
                                        <span className="price-label svelte-1milfy7">₹ {TotalBill}</span>  
                                    </div> 
                                    <div className="redesign-v15-cta-wrapper svelte-1milfy7">
                                        <button id="redesign-v15-cta" className="svelte-1milfy7" onClick={handlePayment}>Continue</button>
                                    </div>
                                </div>
                                
                            </form>
                        </div>

                    </div>
                </div>
                <div className="pane-wrapper svelte-1yl26hc">
                    <div className="backgroud-pane-content svelte-1yl26hc">
                        <div data-test-id="summary-modal">
                            <span className="summary-header svelte-1fj9hzc">Order Summary</span> 
                            <div className="cartsxy">
                                <div id="cart-list" className="svelte-1ath32x" style={{maxHeight: "200px", overflowY: "auto"}}>
                                    {products.map((product,index) => (
                                    <div key={index} className="cart-item svelte-2zg5gr" >
                                        <img alt="item-img" src={product.imageURL} className="svelte-2zg5gr"/> 
                                        <div className="info svelte-2zg5gr">
                                            <p className="text name shift-up svelte-2zg5gr">{product.title}</p> 
                                            <p className="text quantity svelte-2zg5gr">Qty: 1</p>
                                        </div> 
                                        <div className="shift-up svelte-2zg5gr">
                                            <p className="text price svelte-2zg5gr">₹{product.price}</p> 
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div> 
                            <hr className="svelte-1fj9hzc"/> 
                            <div id="summary-table" className="summary-table svelte-oqjupz">  
                                <div className="summary-row base-amount svelte-oqjupz"><div>Price </div> 
                                    <div data-test-id="cart-amount" data-testid="cart-amount">₹ {TotalBill}</div>
                                </div>    
                                <div className="summary-row svelte-oqjupz text-green">
                                    <div>Delivery Charges</div> 
                                    <div data-test-id="shipping-amount" data-testid="shipping-amount">Free</div>
                                </div>           
                                <hr className="total-separator mv-16 svelte-oqjupz mv-12"/> 
                                <div className="summary-row total-charges-text svelte-oqjupz">
                                    <div className="svelte-oqjupz">Total Amount</div> 
                                    <div data-test-id="total-amount" className="svelte-oqjupz">₹ {TotalBill}</div>
                                </div>
                            </div>
                        </div>

                        <div className="rzp-branding svelte-1yl26hc">
                            <div className="rzp-icon-section rzp-row svelte-1cp8jw7">
                                <span className="brand-text-row brand-text-content svelte-1cp8jw7"> Secured by</span>  
                                <svg width="110" height="17" viewBox="0 0 110 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_13_19)">
                                        <path d="M17.1054 5.73546C16.9921 6.15915 16.7723 6.47015 16.4462 6.66866C16.1196 6.86717 15.6617 6.96668 15.071 6.96668H13.1942L13.853 4.50447H15.7298C16.32 4.50447 16.7253 4.60375 16.9455 4.80226C17.1652 5.00104 17.2188 5.312 17.1054 5.73546ZM19.049 5.68244C19.2876 4.79151 19.1887 4.10745 18.7523 3.63094C18.3158 3.15446 17.5511 2.9163 16.4589 2.9163H12.2695L9.74805 12.3402H11.7834L12.8 8.54144H14.1348C14.4341 8.54144 14.6697 8.59009 14.842 8.68713C15.0147 8.78443 15.1158 8.95651 15.147 9.20325L15.51 12.3402H17.6908L17.3371 9.41521C17.265 8.76217 16.9666 8.37833 16.4422 8.26367C17.1107 8.06975 17.6706 7.74736 18.1216 7.29724C18.5721 6.84739 18.8815 6.30924 19.049 5.68244Z" fill="#0C2651"></path>
                                        <path d="M23.995 8.96519C23.8249 9.60038 23.5629 10.0859 23.2091 10.4211C22.8549 10.7565 22.4312 10.924 21.9381 10.924C21.4352 10.924 21.0942 10.7587 20.9144 10.4277C20.7338 10.0969 20.7276 9.61842 20.8955 8.99159C21.063 8.36521 21.3302 7.87552 21.6981 7.52225C22.0655 7.16966 22.4958 6.99295 22.9893 6.99295C23.4825 6.99295 23.8165 7.16305 23.9896 7.50269C24.1629 7.84229 24.165 8.32978 23.995 8.96519ZM24.8871 5.62968L24.6322 6.5827C24.5219 6.23847 24.3087 5.9651 23.9932 5.76219C23.6772 5.55927 23.2856 5.45756 22.8188 5.45756C22.2461 5.45756 21.6954 5.60549 21.1671 5.90107C20.6388 6.19685 20.1769 6.61369 19.7818 7.15184C19.3867 7.69019 19.097 8.30339 18.9129 8.99159C18.7287 9.68006 18.6918 10.2866 18.8026 10.8115C18.9133 11.3367 19.1533 11.7403 19.5229 12.0227C19.8921 12.3053 20.3677 12.4462 20.9491 12.4462C21.4159 12.4462 21.8607 12.3491 22.2826 12.155C22.7045 11.9611 23.0627 11.6917 23.3576 11.3477L23.0918 12.3403H25.0607L26.8562 5.62968H24.8871Z" fill="#0C2651"></path>
                                        <path d="M33.9363 5.62968H28.2138L27.8139 7.12541H31.144L26.741 10.9372L26.3652 12.3403H32.2727L32.6731 10.8448H29.1052L33.575 6.97973L33.9363 5.62968Z" fill="#0C2651"></path>
                                        <path d="M38.9747 8.95197C38.7976 9.61355 38.5352 10.1081 38.188 10.4345C37.8408 10.7609 37.4206 10.924 36.9275 10.924C35.8963 10.924 35.557 10.267 35.9087 8.95197C36.0836 8.29894 36.3473 7.80705 36.6998 7.47626C37.0527 7.14524 37.4799 6.97973 37.9823 6.97973C38.4754 6.97973 38.8081 7.14524 38.9795 7.47626C39.1509 7.80705 39.1496 8.29894 38.9747 8.95197ZM40.1267 5.88102C39.6735 5.59884 39.0947 5.45756 38.3897 5.45756C37.6759 5.45756 37.0149 5.59884 36.4062 5.88102C35.7975 6.16361 35.2793 6.56949 34.8516 7.09879C34.4235 7.62832 34.115 8.24592 33.926 8.95197C33.737 9.65803 33.7151 10.2754 33.8601 10.8049C34.0047 11.3345 34.3053 11.7403 34.7633 12.0227C35.2208 12.3053 35.8062 12.4462 36.52 12.4462C37.225 12.4462 37.8794 12.3053 38.4838 12.0227C39.0872 11.7403 39.6036 11.3345 40.0317 10.8049C40.4593 10.2754 40.7679 9.65803 40.9569 8.95197C41.1459 8.24592 41.1679 7.62832 41.0232 7.09879C40.8782 6.56949 40.5793 6.16361 40.1267 5.88102Z" fill="#0C2651"></path>
                                        <path d="M60.7213 8.96519C60.5512 9.60038 60.2893 10.0859 59.9355 10.4211C59.5816 10.7565 59.1571 10.924 58.664 10.924C58.1621 10.924 57.8206 10.7587 57.6408 10.4277C57.4601 10.0969 57.454 9.61842 57.6219 8.99159C57.7893 8.36521 58.0566 7.87552 58.4244 7.52225C58.7918 7.16966 59.2222 6.99295 59.7157 6.99295C60.2088 6.99295 60.5429 7.16305 60.716 7.50269C60.8892 7.84229 60.8914 8.32978 60.7213 8.96519ZM61.6135 5.62968L61.3586 6.5827C61.2483 6.23847 61.0351 5.9651 60.7195 5.76219C60.4035 5.55927 60.012 5.45756 59.5452 5.45756C58.9725 5.45756 58.4218 5.60549 57.8935 5.90107C57.3652 6.19685 56.9033 6.61369 56.5082 7.15184C56.1131 7.69019 55.8234 8.30339 55.6392 8.99159C55.4551 9.68006 55.4186 10.2866 55.5289 10.8115C55.6397 11.3367 55.8792 11.7403 56.2493 12.0227C56.6185 12.3053 57.094 12.4462 57.6755 12.4462C58.1422 12.4462 58.5871 12.3491 59.009 12.155C59.4309 11.9611 59.7891 11.6917 60.084 11.3477L59.8181 12.3403H61.7871L63.5825 5.62968H61.6135Z" fill="#0C2651"></path>
                                        <path d="M47.1475 7.43002L47.6495 5.60345C47.4789 5.51523 47.253 5.47099 46.9713 5.47099C46.5217 5.47099 46.0887 5.58344 45.6717 5.80861C45.3135 6.00173 45.0084 6.2729 44.7509 6.61261L45.012 5.62894L44.4419 5.62989H43.0436L41.2344 12.3405H43.2306L44.169 8.83312C44.3057 8.3214 44.5509 7.92214 44.9056 7.63537C45.2594 7.34859 45.7011 7.20507 46.2298 7.20507C46.5559 7.20507 46.8614 7.28016 47.1475 7.43002Z" fill="#0C2651"></path>
                                        <path d="M52.7032 8.99136C52.5353 9.61819 52.2751 10.0967 51.9226 10.4275C51.5693 10.7585 51.1465 10.9238 50.6533 10.9238C50.1598 10.9238 49.8236 10.7563 49.6447 10.4209C49.4653 10.0857 49.4609 9.60038 49.631 8.96496C49.8011 8.32955 50.0657 7.84202 50.4253 7.50242C50.7847 7.16282 51.2115 6.99272 51.7051 6.99272C52.1894 6.99272 52.5186 7.16943 52.6931 7.52225C52.8672 7.87525 52.8707 8.36521 52.7032 8.99136ZM54.0982 5.90084C53.7277 5.60522 53.2561 5.45756 52.6839 5.45756C52.1815 5.45756 51.7033 5.57222 51.2506 5.80157C50.7966 6.03133 50.4288 6.34408 50.1466 6.74134L50.153 6.69732L50.4883 5.6285H50.1024V5.62945H48.5397L48.0435 7.48514C48.0378 7.50671 48.033 7.52684 48.0272 7.54864L45.9805 15.1991H47.9763L49.0069 11.3477C49.108 11.6915 49.3181 11.9608 49.6363 12.1548C49.9545 12.3489 50.347 12.4459 50.8142 12.4459C51.3957 12.4459 51.9486 12.3051 52.4738 12.0225C52.9986 11.7403 53.4548 11.3365 53.8416 10.8113C54.2287 10.2866 54.5145 9.67979 54.6986 8.99136C54.8828 8.30312 54.921 7.68996 54.8142 7.15161C54.7074 6.61346 54.4683 6.19662 54.0982 5.90084Z" fill="#0C2651"></path>
                                        <path d="M71.8486 5.63154L71.8499 5.62968H70.641C70.6023 5.62968 70.5683 5.63078 70.5329 5.63154H69.9055L69.5846 6.07923C69.5589 6.11295 69.5332 6.1469 69.5055 6.18629L69.4706 6.23813L66.9208 9.79471L66.392 5.62968H64.3035L65.3612 11.9587L63.0254 15.1993H63.092H64.2846H65.1063L65.6723 14.3963C65.689 14.3723 65.7033 14.3527 65.7211 14.3274L66.3817 13.3895L66.4006 13.3626L69.3563 9.16625L71.8466 5.63431L71.8499 5.63154H71.8486Z" fill="#0C2651"></path>
                                        <path d="M4.6209 3.99565L4.02344 6.19774L7.44215 3.98327L5.20643 12.3379L7.47681 12.34L10.7796 4.00543e-05L4.6209 3.99565Z" fill="#3395FF"></path>
                                        <path d="M0.939923 8.82782L0 12.34H4.65377C4.65377 12.34 6.55728 5.19696 6.55781 5.19487C6.55602 5.19601 0.939923 8.82782 0.939923 8.82782Z" fill="#0C2651"></path>
                                    </g>
                                    <path d="M74.8905 13.1929L75.5505 4.64887H77.0265L79.5345 11.6929H78.9225L82.5225 4.64887H83.9985L83.3385 13.1929H81.6825L82.1385 7.42087L82.5825 7.52887L79.7145 13.1929H78.5025L76.5105 7.52887L76.9785 7.42087L76.5345 13.1929H74.8905ZM87.4615 13.2889C86.9495 13.2889 86.4975 13.1729 86.1055 12.9409C85.7215 12.7009 85.4175 12.3649 85.1935 11.9329C84.9775 11.4929 84.8695 10.9689 84.8695 10.3609C84.8695 9.68887 84.9895 9.10087 85.2295 8.59687C85.4775 8.08487 85.8175 7.68487 86.2495 7.39687C86.6895 7.10087 87.1975 6.95287 87.7735 6.95287C88.2375 6.95287 88.6375 7.05287 88.9735 7.25287C89.3095 7.45287 89.5695 7.73287 89.7535 8.09287L89.6215 8.38087L89.7175 7.10887H91.5055L91.0255 13.1929H89.2375L89.3335 11.9449L89.4775 12.1129C89.3655 12.3529 89.2095 12.5649 89.0095 12.7489C88.8095 12.9249 88.5775 13.0609 88.3135 13.1569C88.0495 13.2449 87.7655 13.2889 87.4615 13.2889ZM88.0735 11.9209C88.5055 11.9209 88.8495 11.7489 89.1055 11.4049C89.3615 11.0609 89.4895 10.6009 89.4895 10.0249C89.4895 9.46487 89.3695 9.04487 89.1295 8.76487C88.8895 8.47687 88.5535 8.33287 88.1215 8.33287C87.6735 8.33287 87.3175 8.50887 87.0535 8.86087C86.7975 9.20487 86.6695 9.67287 86.6695 10.2649C86.6695 10.7929 86.7895 11.2009 87.0295 11.4889C87.2775 11.7769 87.6255 11.9209 88.0735 11.9209ZM93.0641 13.9609C93.4401 14.1689 93.8081 14.3129 94.1681 14.3929C94.5361 14.4809 94.9201 14.5249 95.3201 14.5249C95.7761 14.5249 96.1361 14.4089 96.4001 14.1769C96.6641 13.9449 96.8161 13.5689 96.8561 13.0489L96.9641 11.6689L97.1561 11.8489C97.0441 12.0889 96.8841 12.2969 96.6761 12.4729C96.4761 12.6489 96.2361 12.7849 95.9561 12.8809C95.6841 12.9769 95.3841 13.0249 95.0561 13.0249C94.5281 13.0249 94.0681 12.9089 93.6761 12.6769C93.2841 12.4449 92.9801 12.1209 92.7641 11.7049C92.5481 11.2809 92.4401 10.7849 92.4401 10.2169C92.4401 9.59287 92.5601 9.03687 92.8001 8.54887C93.0401 8.06087 93.3801 7.67287 93.8201 7.38487C94.2601 7.09687 94.7721 6.95287 95.3561 6.95287C95.8441 6.95287 96.2561 7.05287 96.5921 7.25287C96.9281 7.45287 97.1881 7.73287 97.3721 8.09287L97.2281 8.39287L97.3241 7.10887H99.1121L98.6561 12.8449C98.5681 13.9169 98.2321 14.6889 97.6481 15.1609C97.0721 15.6409 96.2761 15.8809 95.2601 15.8809C94.2601 15.8809 93.3961 15.6969 92.6681 15.3289L93.0641 13.9609ZM95.6561 11.6449C96.1041 11.6449 96.4601 11.4849 96.7241 11.1649C96.9881 10.8449 97.1201 10.4169 97.1201 9.88087C97.1201 9.36887 96.9961 8.98487 96.7481 8.72887C96.5001 8.46487 96.1521 8.33287 95.7041 8.33287C95.2561 8.33287 94.9001 8.49287 94.6361 8.81287C94.3721 9.13287 94.2401 9.57287 94.2401 10.1329C94.2401 10.6129 94.3641 10.9849 94.6121 11.2489C94.8601 11.5129 95.2081 11.6449 95.6561 11.6449ZM100.094 13.1929L100.574 7.10887H102.398L101.918 13.1929H100.094ZM100.742 4.25287H102.686L102.554 5.95687H100.61L100.742 4.25287ZM106.495 13.2889C105.847 13.2889 105.283 13.1649 104.803 12.9169C104.331 12.6689 103.967 12.3209 103.711 11.8729C103.455 11.4249 103.327 10.9049 103.327 10.3129C103.327 9.61687 103.467 9.02087 103.747 8.52487C104.027 8.02087 104.419 7.63287 104.923 7.36087C105.427 7.08887 106.019 6.95287 106.699 6.95287C107.203 6.95287 107.651 7.02087 108.043 7.15687C108.443 7.29287 108.783 7.47687 109.063 7.70887L108.475 8.96887C108.211 8.77687 107.935 8.62487 107.647 8.51287C107.367 8.40087 107.083 8.34487 106.795 8.34487C106.283 8.34487 105.887 8.51687 105.607 8.86087C105.327 9.19687 105.187 9.67287 105.187 10.2889C105.187 10.8169 105.315 11.2169 105.571 11.4889C105.835 11.7609 106.187 11.8969 106.627 11.8969C106.939 11.8969 107.227 11.8449 107.491 11.7409C107.763 11.6369 108.031 11.4849 108.295 11.2849L108.691 12.5449C108.411 12.7849 108.075 12.9689 107.683 13.0969C107.299 13.2249 106.903 13.2889 106.495 13.2889Z" fill="#0C2651"></path>
                                    <defs>
                                    <clipPath id="clip0_13_19">
                                    <rect width="71.8494" height="15.1989" fill="white"></rect>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        </div>
        
    </div>
   
    </>
  )
}
