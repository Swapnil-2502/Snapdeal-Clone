import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "../../api/axios"
import type { OrderType } from "../../types/types"
import { TrackOrder } from "./Comps/TrackOrder"
import { useCart } from "../../contexts/CartContext"


export const OrderDetail = () => {
	const {orderId} = useParams()
	const {trackOrder, setTrackOrder} = useCart()
	const [orderDetails, setOrderDetails] = useState<OrderType>()
	const [trackingOrderId, setTrackingOrderId] = useState<string | null>(null);
	
	const UserData = JSON.parse(localStorage.getItem("UserData") || "{}")
	const token = localStorage.getItem("Token")
	const headers = {
		Authorization: `Bearer ${token}`,
	}
	
	useEffect(() => {
		const fetchOrders = async () => {
			const orders = await axios.get(`/order/${orderId}`,{headers})
			setOrderDetails(orders.data.order)
			setTrackingOrderId(orders.data.order._id)
		}
		fetchOrders()
	},[])

	const generateSlug = (title: string) => {
		return title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').substring(0, 60); 
	}

  return (
    <>
        <div className="ordersummarybox">
		    	<span className="accountOrder">ORDER DETAILS</span>
		   
		    	<div className="ordHeaderDetails">
					<span className="orderNo">Order ID: {orderDetails?._id}  <span className="orderNo">(2 Items)</span></span>
				</div>

			    <div className="customerInfomation  ">
			    	<span className="customerEmail">Customer Information<div className="cusEmail"><span className="cusmail">Email</span>: {UserData.email}</div></span>
			    		
						<span className="priceDetails">
								<div><span className="amountDetails">Total&nbsp;&nbsp;<i className="detColon">:</i></span><span className="amntVal"> ₹ {orderDetails?.totalAmount}</span></div>
						    	<div><span className="amountDetails">Delivery Charges&nbsp;&nbsp;<i className="detColon">:</i></span><span className="amntVal"> FREE </span></div>
								<div className="paymentDiv">
                                	<div><span className="amountDetails amtPaid">Payable Amount&nbsp;&nbsp;<i className="detColon">:</i></span><span className="amntVal amtPaid"> ₹ {orderDetails?.totalAmount}</span></div>
                                </div>							   	    
					    </span>

					<span className="paymentMethod">Payment Method<div className="ordCOD">Online</div></span>
				</div>
			    
			   	{orderDetails?.items.map((item,index) => {
					const slug = generateSlug(item.title)
					return (
				<div key={index} className="suborderSummary">
											 	
					<div className="subOrdSumDetails">
						<span className="orderNo subOrdId">Suborder Id: {item._id}</span>
									
						<div className="subOrdTopActions">	
							<span className="subordSumImage">
								
								<Link to={`/product/${slug}/${item._id}`}  className="subOrderImage">
									<img alt={item.title} title={item.title} className="gridViewImage" data-border={0} src={item.imageURL}/>
								</Link>
							</span>
								    <span className="subOrdSumAction ">
										<div className="subOrderItemNo">Item {index+1}</div>
								   		<Link to={`/product/${slug}/${item._id}`} className="subOrdName subOrdSumaryName"   ><div style={{paddingTop: "10px"}}>{item.title}</div></Link>
										<div className="subOrderItemNo" style={{paddingTop: "20px"}}>Quantity: {item.quantity}</div>
										<div className="subOrderItemNo" style={{paddingTop: "20px"}}>Unit Price: ₹ {item.price}</div>
					
									</span>
									<span className="subOrdPriceDetails">
										<div className="totalAmntOuter"><span className="amountDetails totalAmountDetails"  style={{fontSize:"18px"}}>₹</span><span className="amntClt" style={{fontSize:"18px"}}>{item.price * item.quantity}</span><span className="signCircle "></span></div>
										
									</span>
						</div>
														   
						<div className="trackingDetails  bottomBorderTrack">									        					 
							<span className="subOrdStatus">Status: <span className="subOrdStatusText">ORDER CONFIRMED</span></span>
							<span className="expectDel ">Est. Delivery: <span className="subOrdStatusText  "> 2-3 Days</span></span>					            
						            		
							
						</div>					
						
						<div className="subOrdTimeLine">  
                          
                          <span className="statusCircle greenStatusCircle circleVal4"></span>
                          {[ 'packed', 'shipped', 'out for delivery', 'delivered'].map((status) => {
                            const isCompleted = orderDetails.trackingHistory?.some(item => item.status === status);
                            
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
				
													
						
										   		
						<div className="treak-btn js-real-track-timeline btn btn-theme-secondary btn-line" 
							onClick={() => {
								setTrackOrder(true)
								setTrackingOrderId(orderDetails._id)
							}}>TRACK</div>
                        <div className="promotionalBtn "></div>
                        <div className="deliverySellerDetails">
                            <span className="deliveryDet">
                                <span className="delHead">Shipping Information</span><br/>
                                <span className="delName" style={{paddingBottom:"8px"}}>{orderDetails.address.name},</span>
                                <span className="delContent">{orderDetails.address.address}, {orderDetails.address.landmark}, {orderDetails.address.city}</span>
                                <span className="delContent">{orderDetails.address.state} -{orderDetails.address.pincode}</span> 
                                <span className="mobDetails padB5">Mobile No: <span className="delMob">{orderDetails.address.mobileNumber}</span></span>
                            </span> 
                        </div>		
														
					</div>
				</div>)
				})}
				{trackingOrderId === orderDetails?._id && trackOrder && <TrackOrder orderId={orderDetails?._id} onClose={() => setTrackingOrderId(null)}/>}
	    </div>
		
    </>
  )
}
