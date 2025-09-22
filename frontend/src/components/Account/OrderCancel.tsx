import { useEffect, useRef, useState } from "react"
import { TopBar } from "./Comps/TopBar"
import { Link, useParams } from "react-router-dom";
import axios from '../../api/axios';
import type { OrderType } from "../../types/types";
import FooterTop from "../footer/FooterTop";
import { FooterMiddleTop } from "../footer/footerbottom/FooterMiddleTop";
import { FooterMiddleBottom } from "../footer/footerbottom/FooterMiddleBottom";
import { FooterCopyRight } from "../footer/footerbottom/FooterCopyRight";

export const OrderCancel = () => {
    const {orderId} = useParams<string>()
    const [order, setOrder] = useState<OrderType | null>(null)
    const [isOpen, setIsOpen] = useState(false);
    const [selectedReason, setSelectedReason] = useState<{ code: string; label: string } | null>(null);
    const [comments, setComments] = useState("");
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [isSumbitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const res = await axios.get(`/order/orderbyId/${orderId}`);
                setOrder(res.data.order);
            } catch (error) {
                console.error("Error fetching order details:", error);
                alert("Failed to fetch order details");
            } 
        };
        
        if (orderId) {
            fetchOrderDetails();
        }
    }, [orderId]);

    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
        };
        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, []);

    const reasons = [
        { code: "BTP", label: "I placed the order by mistake" },
        { code: "ODP", label: "I need to change shipping address" },
        { code: "BPOTD", label: "I'm getting better price elsewhere" },
        { code: "BDP", label: "I want to buy a different product" },
        { code: "NAH", label: "I'll not be able to take delivery" },
        { code: "OTHR", label: "My reason is not listed" }
    ];

    const handleSelect = (r: { code: string; label: string }) => {
        setSelectedReason(r);
        setIsOpen(false);
    };

    const handleSubmit = async () => {
        if (!selectedReason) return;
        await axios.patch(`/order/${orderId}`,{ status: 'cancelled',note: comments})
        setIsSubmitted(true)
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const generateSlug = (title: string) => {
		return title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').substring(0, 60); 
	}

  return (
    <>
      <TopBar />
      <div id="content_wrapper" className="comp-content-wrapper materialDesignRevamp" style={{backgroundColor: ""}}>
        <div className="pageWrapper SDOrderCancel myOrdersRevamp">
          <div className="pageWrapper">
            <div id="userOrderHeaderContainer">
              <span className="accountOrder">CANCEL<span className="blackText">&nbsp; IN 1 EASY STEP</span></span>
              <div className="subOrderDetailContainer">
                {order?.items.map((item) => {

                    const slug = generateSlug(item.title)

                    return (

                    <div style={{display:'flex', flexDirection:'column'}}>
                        <div style={{display:'flex'}}>
                            <Link to={`/product/${slug}/${item._id}`}  className="subOrderImage">
                                <img height="132" src={item.imageURL}/>
                            </Link>
                            <div className="subOrderInfo">
                                <Link to={`/product/${slug}/${item._id}`}  className="subOrderImage">
                                    <h3 className="subOrderTitle">{item.title}</h3>
                                </Link>
                                <div><span className="greyLabel">Suborder ID:</span> {item._id}</div>
                                <div><span className="greyLabel">Order Placed on:</span> {order.createdAt ? formatDate(order.createdAt.toString()) : 'N/A'}</div>
                            </div>
                        </div>
                    </div>)
                })}
                
              </div>
            </div>
          </div>

          <div className="accordion-menu-wrapper" data-theme="accordion-menu-wrapper">

            {!isSumbitted ? (

            <>
                        <h2 className="clear accordionMenuHeader" data-role="accordion-menu-header" data-header-count="1" data-disabled="0">
                        <span className="cancelOrderSprites action reasonForCancel">Order Cancellation Icon</span>
                        1. Reason for Cancellation<span className="headerSubText" id="reasonSubText"></span>
                        <a id="reasonForCancelSecondaryAction" className="secondaryAction headerlink"></a>
                        </h2>

                        <div className="accordionMenuContent clear" data-role="accordion-menu-content" data-menu-count="1">
                            <ul className="SDOrderCancelWrapper">
                                <li>
                                <label htmlFor="cancellationReasonsNonCOD">Reason</label>
                                <div id="cancellationReasonsNonCOD" ref={dropdownRef} className="sdDropDownOuter lfloat positionRelative" style={{cursor: "pointer"}}>
                                    <div
                                    className="sdDropDownHead"
                                    onClick={() => setIsOpen(prev => !prev)}
                                    >
                                    {selectedReason ? selectedReason.label : "Select Reason"}
                                    </div>

                                    <div
                                    id="sdPopup"
                                    className="sdDropDownPopup"
                                    style={{display: isOpen ? "block" : "none"}}
                                    >
                                    {reasons.map(r => (
                                        <div className="sdDropDownContent" key={r.code}>
                                        <a data-id="" data-code={r.code} onClick={(e) => { e.preventDefault(); handleSelect(r); }}
                                        >
                                            {r.label}
                                        </a>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                                </li>

                                {selectedReason && (
                                <>
                                    <li id="commentsForCancellationWrapper" style={{display:"list-item"}}>
                                    <label htmlFor="commentsForCancellation">Comments:</label>
                                    <textarea id="commentsForCancellation" className="orderCancelTextarea" value={comments} onChange={(e) => setComments(e.target.value)} style={{border: '1px solid black'}}/>
                                    </li>

                                    <li>
                                    <div id="submitCancellationCOD" className="buyBlueButton button37x97">
                                        <a className="long-buy-btn-lang" style={{display: 'inline-block',padding: '10px 16px',backgroundColor: '#333',color: '#fff',textTransform: 'uppercase',textDecoration: 'none',borderRadius: '4px'}}
                                        onClick={(e) => { e.preventDefault(); handleSubmit(); }}
                                        >
                                        Submit
                                        </a>
                                    </div>
                                    </li>
                                </>
                                )}
                            </ul>
                        </div>
          
            </>  
            ):(
                        <h2 className="clear accordionMenuHeader inactive" data-role="accordion-menu-header" data-header-count="1" data-disabled="0" data-complete="1" data-submitted="1">
							<span className="cancelOrderSprites status replaceSuccess"></span>
							<span className="cancelOrderSprites action reasonForCancel">Order Cancellation Icon</span>
							1. Reason for Cancellation<span className="headerSubText" id="reasonSubText" >&nbsp;-&nbsp;{selectedReason?.label}</span>
							
						</h2>

            )}

            {isSumbitted && 
                (
                    <div className="requestProcessWrapper" id="requestProcessContainer" style={{display:'flex', flexDirection:'column', alignContent:'start'}}>
						<div className="clearfix goGreenWrapper hidden">
							<div className="col-xs-19">
								<div className="clearfix goGreenHR">
									
									<span className="cancelOrderSprites requestSuccessful requestSuccessfulIcon" id="requestSuccessfulIcon"> Request Successful Icon </span>
									<div className="requestProcessText">
										<h2 className="requestProcessStatus" id="requestProcessStatus">REQUEST SUCCESSFUL!</h2>
										<h3 className="thankYouNote" id="thankYouNote" style={{display: "inline-block"}}>Thank you. You will receive an email shortly confirming the same.</h3>
									</div>
	  							</div>
		  						<div className="clearfix goGreenMessage">
	  								You can also contribute to Go-Green initiative by cancelling the order within 24hrs of order placement. This will save carbon emissions &amp; packaging waste.
	  							</div>
	  						</div>
	  						<div className="col-xs-4">
	  							<div className="sd-icon sd-icon-gogreen"></div>
	  						</div>
	  					</div>
						    <div id="nonGoGreen">
		  						
								<span className="cancelOrderSprites requestSuccessful requestSuccessfulIcon" id="requestSuccessfulIcon"> Request Successful Icon </span>
								<div className="requestProcessText">
									<h2 className="requestProcessStatus" id="requestProcessStatus">REQUEST SUCCESSFUL!</h2>
									<h3 className="thankYouNote" id="thankYouNote" style={{display: "inline-block"}}>Thank you. You will receive an email shortly confirming the same.</h3>
								</div>
		  					</div>
						
						
						
                            <a className=" btn btn-theme-secondary" href="/myaccount/myorders" style={{display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '30px 40px',
                                borderRadius:'10px',
                                alignSelf: 'flex-start',
                                width: 'auto',
                                background:'#333',
                                marginTop: '80px'
                                }}>
                                Back to my orders
                            </a>
						
					</div>
                )
            }

          </div>
        </div>
      </div>
      <div id="sdFooter">
        <FooterTop />
        <div className="middleContent-footer">
          <FooterMiddleTop />
          <FooterMiddleBottom />
          <FooterCopyRight />
        </div>
      </div>
    </>
  )
}


