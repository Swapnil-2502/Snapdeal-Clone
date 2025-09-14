import { useEffect, useState } from "react"
import {type OrderType } from "../../types/types"
import axios from "../../api/axios"
import { Link } from "react-router-dom"



export const Orders = () => {
  const [orderDetails, setOrderDetails] = useState<OrderType[]>()
 
  const token = localStorage.getItem("Token")
  const headers = {
      Authorization: `Bearer ${token}`,
  }

  useEffect(() => {
    const fetchOrders = async () => {
        const orders = await axios.get("/order",{headers})
        setOrderDetails(orders.data.orders)
    }
    fetchOrders()
  },[])

  const generateSlug = (title: string) => {
     return title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').substring(0, 60); 
  }

  return (
    <>
    <div className="rightWrapper" id="dotAccountSavedAddresses">
        <span className="accountOrder">MY ORDERS</span>
        
        <div className="text"></div>

        {!orderDetails && 
          <div>
            <h1 style={{ textAlign:'center'}}>No Orders</h1>
          </div>
        }
        
        {orderDetails &&  orderDetails.map((data,index) => (
          <div key={index} className="myOrderDetails">
            <div className="orderData">

              <div className="outerOrderDetails">
              
                  <div className="orderId">Order ID: {data._id} ({data.items.length} Item)
                      <span className="OrdDetails sd-tour" data-step="4" data-tour-content="Payment and order details">
                      <Link to={`/orderSummary/order/${data._id}`}>
                        <span className="viewOrder btn btn-theme-secondary">DETAILS</span>
                      </Link>
                    </span>
                  </div>
                  <div className="ordDate" style={{height:"20px"}}></div>

                  {data.items.map((item,index) => {
                    const slug = generateSlug(item.title)

                    return (
                      <>
                    <div key={index} className="subOrderDetails borderSubOrder">
                        
                      <div className="ordContent ">
                        
                        <span className="subOrdImage" >
                          <Link to={`/product/${slug}/${item._id}`} className="subOrderImage">
                            <img alt="" title="" className="gridViewImage"  data-border={0} src={item.imageURL}/>
                          </Link>
                        </span>
                        <span className="softBundleParent">
                          <div className="orderItemNo">Item {index+1}</div>
                          <Link to={`/product/${slug}/${item._id}`} className="subOrdName"><div>{item.title.length > 90 ? item.title.substring(0,90) + "..." : item.title}</div></Link>
                          <span className="subOrdContent">
                            <div className="actionButtons " data-step="1" data-tour-content="Replace/Return/Cancel, and other actions">
                              <input type="hidden" value="" className="userMobileNumber exchangeReceipt"/>
                            </div>  
                            <a href="/helpcenter?subOrderId=66671792640&amp;orderId=58921214420&amp;pageNumber=1" className="needMoreHelp clear"><span className=""></span>Need help?</a>
                          </span>
                        </span>

                        <div data-step="3" data-tour-content="Check latest status and important dates" className=" sd-tour trackingDetails   bottomBorderTrack">
                          <span className="subOrdStatus">Status: <span className="subOrdStatusText">Paid</span></span>
                          <span className="expectDel ">Est. Delivery: <span className="subOrdStatusText"> 2-3 Days</span></span>
                          
                        </div>

                        <div className="subOrdTimeLine">
                                    
                          <span className="statusCircle greenStatusCircle circleVal4"></span>
                          <span className="statusLine statusLine4"></span>
                            <span className="statusCircle circleVal4"></span>
                          <span className="statusLine statusLine4"></span>
                            <span className="statusCircle circleVal4"></span>
                          <span className="statusLine statusLine4"></span>
                            <span className="statusCircle circleVal4"></span>
                          <span className="statusLine statusLine4"></span>
                            <span className="statusCircle circleVal4"></span>
                        </div>
                                  
                        <div className="timeLineText">
                          <span className="timelineStatusText  timelineText5">Placed</span>
                          <span className="timelineStatusText  timelineText5">Packed</span>
                          <span className="timelineStatusText  timelineText5">Shipped</span>
                          <span className="timelineStatusText  timelineText5">Out for delivery</span>
                          <span className="timelineStatusText  timelineText5">Delivered</span>
                        </div>

                        
                        <div className="treak-btn js-real-track-timeline btn btn-theme-secondary btn-line" style={{marginLeft:"20px"}}>TRACK</div>
                                    
                      </div>
                    </div>
                    </>)
                  })}
              </div>
            </div>
          </div>
        ))}
    </div>
    
    </>
  )
}
