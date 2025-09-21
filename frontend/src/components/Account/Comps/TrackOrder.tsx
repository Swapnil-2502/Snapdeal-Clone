import { useEffect, useState } from "react";
import { useCart } from "../../../contexts/CartContext"
import type { OrderType } from "../../../types/types";
import axios from "../../../api/axios"

interface TrackOrderProps {
  orderId?: string;
  onClose: () => void
}

export const TrackOrder = ({orderId,onClose}: TrackOrderProps) => {
    const {trackOrder,closeTrackOrder} = useCart()
	const [orderDetails, setOrderDetails] = useState<OrderType>()
	console.log("FUCK",orderId)

	useEffect(() => {
			if(trackOrder) {
				document.body.style.overflow = "hidden";
			}
			else{
				document.body.style.overflow = "";
			}
	
			return () => {
				document.body.style.overflow = "";
			};
	},[trackOrder])

	const token = localStorage.getItem("Token")
	const headers = {
		Authorization: `Bearer ${token}`,
	}

	useEffect(() => {
		const fetchOrders = async () => {
			const orders = await axios.get(`/order/${orderId}`,{headers})
			setOrderDetails(orders.data.order)
		}
		fetchOrders()
	},[])

	const reversedHistory = orderDetails?.trackingHistory?.slice().reverse() || [];


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

  return (
    <>
        <div id="sidebar_modal_right" className="sidebar rightside bigwidth open">
			
			<div className="sidebarin detailedTimelineSection">
                <div style={{display:'flex',justifyContent:'flex-end',alignItems: 'center', marginBottom: '1rem'}}>
                    <div className="sidebarin-heading" style={{ marginRight: 'auto' }}>
                        <h3 style={{color: 'black', margin:"0px"}}>Detailed Timeline</h3>
                    </div>
                    <button style={{background: "none",border: "none",fontSize: "24px",color: "grey",cursor: "pointer", padding: "0px", marginRight:"20px"}} 
						onClick={() =>{
							closeTrackOrder()
							onClose()
						}} >×</button>
                </div>
                <div className="sidebarin-content">

					<div className="realtrackTimeline">
						{reversedHistory.map((history,index) => (
							<div key={index} className="educativeInfo ">
								<div className="  plusInfo  expandCollapse">
									<div className="educativeInfoId">
										<span className="educativeStageId blackLabel">{history.status}</span>
									</div>
									<span className="educativeStageDt">10:42 PM, 12 Sep, 2025</span>
									
								</div>
									<ul className="stageSteps  noBullets">
										{history.status === 'cancelled' && 
											<li className="educativeDetailedSteps" style={{paddingBottom:'12px'}}>Order has been Cancelled<span className="educativeDates">{history.timestamp ? formatDate(history.timestamp.toString()) : 'N/A'}</span></li>
										}
										{history.status === 'delivered' && 
											<li className="educativeDetailedSteps" style={{paddingBottom:'12px'}}>Order has been Delivered<span className="educativeDates">{history.timestamp ? formatDate(history.timestamp.toString()) : 'N/A'}</span></li>
										}
										{history.status === 'out for delivery' && 
											<li className="educativeDetailedSteps" style={{paddingBottom:'12px'}}>Order has been out for delivery<span className="educativeDates">{history.timestamp ? formatDate(history.timestamp.toString()) : 'N/A'}</span></li>
										}
										{history.status === 'shipped' && 
											<li className="educativeDetailedSteps" style={{paddingBottom:'12px'}}>Order has been Shipped<span className="educativeDates">{history.timestamp ? formatDate(history.timestamp.toString()) : 'N/A'}</span></li>
										}
										{history.status === 'packed' && 
											<li className="educativeDetailedSteps" style={{paddingBottom:'12px'}}>Order has been Packed<span className="educativeDates">{history.timestamp ? formatDate(history.timestamp.toString()) : 'N/A'}</span></li>
										}
										{history.status === 'placed' && (
											<>
												<li className="educativeDetailedSteps" style={{paddingBottom:'12px'}}>Order has been confirmed<span className="educativeDates">{history.timestamp ? formatDate(history.timestamp.toString()) : 'N/A'}</span></li>
												<li className="educativeDetailedSteps" style={{paddingBottom:'12px'}}>Order is pending for verification<span className="educativeDates">{history.timestamp ? formatDate(history.timestamp.toString()) : 'N/A'}</span></li>
												<li className="educativeDetailedSteps" style={{paddingBottom:'12px'}}>Order processing has been initiated<span className="educativeDates">{history.timestamp ? formatDate(history.timestamp.toString()) : 'N/A'}</span></li>
											</>
										)}
										
									</ul>
							</div>
						))}
						{orderDetails?.status === 'pending' && 
							<div className="educativeInfo ">
								<div className="  expandCollapse">
									<div className="educativeInfoId">
										
										
										<span className="educativeStageId blackLabel ">Placed</span>
									</div>
									<span className="educativeStageDt">{orderDetails.createdAt ? formatDate(orderDetails.createdAt.toString()) : 'N/A'}</span>
								</div>
								
								<ul className="stageSteps  noBullets">
									<li className="educativeDetailedSteps" style={{paddingBottom:'12px'}}>Order is pending for verification<span className="educativeDates">{orderDetails.createdAt ? formatDate(orderDetails.createdAt.toString()) : 'N/A'}</span></li>
									<li className="educativeDetailedSteps" style={{paddingBottom:'12px'}}>Order processing has been initiated<span className="educativeDates">{orderDetails.createdAt ? formatDate(orderDetails.createdAt.toString()) : 'N/A'}</span></li>
								</ul>
							</div>
						}

					</div>

				</div>
        
    		</div>
		</div>
    </>
  )
}
