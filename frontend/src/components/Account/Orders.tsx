import  { useEffect, useState } from "react"
import {type OrderType } from "../../types/types"
import axios from "../../api/axios"
import { Link } from "react-router-dom"
import { TrackOrder } from "./Comps/TrackOrder"



export const Orders = () => {
  const [orderDetails, setOrderDetails] = useState<OrderType[]>()
  const [trackingOrderId, setTrackingOrderId] = useState<string | null>(null);
 
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
  
  const formatDate = (timestamp: string) => {
        const date = new Date(timestamp);
        return date.toLocaleString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour12: true
        });
    };

  // const getStatusClasses = (currentStatus: string) => {
  //     const statusOrder = ['placed', 'packed', 'shipped', 'out for delivery', 'delivered'];
  //     const currentIndex = statusOrder.indexOf(currentStatus);

  //     const circles = [];
  //     const lines = [];

  //     for (let i = 0; i < statusOrder.length; i++) {
  //       if (i <= currentIndex) {
          
  //         circles.push('greenStatusCircle');
  //         if (i < statusOrder.length - 1) {
  //           lines.push('greenStatusLine');
  //         }
  //       } else {
          
  //         circles.push('circleVal4'); 
  //         if (i < statusOrder.length - 1) {
  //           lines.push('statusLine4'); 
  //         }
  //       }
  //     }
    
  //   return { circles, lines };

  // }

    const updatedStatus = []

    const createStatusArray= (order: OrderType) => {
        order.trackingHistory?.map((pastStatus) => {
          updatedStatus.push(pastStatus.status)
        })

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
          
          <>
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
                    createStatusArray(data)
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
                          <span className="subOrdStatus">Status: <span className="subOrdStatusText">{data.status.charAt(0).toUpperCase() + data.status.slice(1)}</span></span>
                          <span className="expectDel ">{data.status === 'delivered' ? "Delivered at: ": "Est. Delivery:"}  <span className="subOrdStatusText">{data.status === 'delivered' ? data.updatedAt ? formatDate(data.updatedAt.toString()) : 'N/A' : "2-3 Days"} </span></span>
                          
                        </div>
                        {/* greenStatusCircle greenStatusLine */}
                        <div className="subOrdTimeLine">  
                          
                          <span className="statusCircle greenStatusCircle circleVal4"></span>
                          {[ 'packed', 'shipped', 'out for delivery', 'delivered'].map((status) => {
                            const isCompleted = data.trackingHistory?.some(item => item.status === status);
                            
                            return (
                             
                              <>
                                <span className={`statusLine statusLine4 ${isCompleted ? 'greenStatusLine' : ''} `}></span>
                                <span className={`statusCircle circleVal4 ${isCompleted ? 'greenStatusCircle' : ''}`}></span>
                              </>
                              
                            )
                          })}
                                    
                        </div>
                                  
                        <div className="timeLineText">
                          <span className="timelineStatusText  timelineText5">Placed</span>
                          <span className="timelineStatusText  timelineText5">Packed</span>
                          <span className="timelineStatusText  timelineText5">Shipped</span>
                          <span className="timelineStatusText  timelineText5">Out for delivery</span>
                          <span className="timelineStatusText  timelineText5">Delivered</span>
                        </div>

                        
                        <div className="treak-btn js-real-track-timeline btn btn-theme-secondary btn-line" style={{marginLeft:"20px"}} onClick={() => setTrackingOrderId(data._id)}>TRACK</div>
                                    
                      </div>
                    </div>
                    
                    </>)
                  })}
              </div>
            </div>
          </div>
          {trackingOrderId === data._id && <TrackOrder orderId={trackingOrderId} onClose={() => setTrackingOrderId(null)} />}
          </>
        ))}
    </div>
    
    </>
  )
}
