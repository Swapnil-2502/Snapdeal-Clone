import { useState } from "react";
import { Link } from "react-router-dom";
import { useProductFilters } from "../../contexts/ProductFilterContext";

export const LeftSideNavbar = () => {
	const [hoverMenFashion, setHoverMenFashion] = useState(false)
	const [hoverWomenFashion, setHoverWomenFashion] = useState(false)
	const [hoverHomeAndKitchen, setHoverHomeAndKitchen] = useState(false)
	const [hoverToys, setHoverToys] = useState(false);
	const {setFilters} = useProductFilters()
  return (
    <>
	<div className="dp-click-widgets">
        <div id="leftNavMenuRevamp" className="dp-widget lfloat catNavSection dp-fired" data-dpidt="catside_nav" data-dpdit="v_lst" data-dpwlbl="Left Nav" data-dpcol="l" data-dpdat="cat_lst" data-dppos="1" data-dpid="catside_nav_175673780233227117_9728_1757251004433" style={{minHeight: "673px", borderRadius: "3px"}}>
            <div className="leftNavWrapperRevamp">
	        <div className="hgtHackLeftNav20"></div>
	            <div className="leftNavigationLeftContainer expandDiv">
		            <ul className="nav smallNav">
			            <div className="leftHead topCats">Top Categories</div>
                        
                        <li className={`navlink ${hoverMenFashion ? 'hoverIn': ""}`} onMouseEnter={() => setHoverMenFashion(true)} onMouseLeave={() => setHoverMenFashion(false)} data-nav-index="1">
                            <a className="menuLinks leftCategoriesProduct ">
                                <span className="labelIcon" style={{ backgroundImage: "url('https://g.sdlcdn.com/imgs/k/v/x/Men_sitenavigation-b972a.jpg')" }}></span>
                                <span className="catText">Men's Fashion</span>
                            </a>
                            <div id="category1Data" className={`leftNavigationRightBlock  ${hoverMenFashion ? 'slideLeft': ""}`}  style={{display: hoverMenFashion? "block" : "none", width: "450px", top: "0px"}}>
                                <div className="leftData colDataBlk">
									<div className="colDataSection noBorder">
										<div className="colDataInnerBlk"> 
												<p><a href="" data-index="1.1.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">Clothing</span></a></p>
																	<p>
																		<Link to={"/products/Shirts-for-men"} data-index="1.1.2" className="rightMenuLink  noHasTagWidth dp-widget-link">
																			<span className="linkTest" onClick={() => setFilters(prev => ({...prev,type:'Shirts'}))}>Shirts</span>
																		</Link>
                                                                    </p>
                                                						<p><a href="" data-index="1.1.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">Footwear</span></a>
                                                                    </p>
                                                                    <p>
																		<Link to={"/products/Shoes-for-men"} data-index="1.1.2" className="rightMenuLink  noHasTagWidth dp-widget-link">
                                                                    		<span className="linkTest" onClick={() => setFilters(prev => ({...prev,type:'Shoes'}))}>Sports Shoes</span>
																		</Link>
                                                                    </p>
                                                                    <p><a href="" data-index="1.1.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
                                                                    <span className="linkTest">Casual Shoes</span></a>
                                                                    </p>
                                                                    <p><a href="" data-index="1.1.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
                                                                    <span className="linkTest">Slippers &amp; Flip Flops</span></a>
                                                                    </p>
                                                                    <p><a href="" data-index="1.1.5" className="rightMenuLink  noHasTagWidth dp-widget-link">
                                                                    <span className="linkTest">Sandals &amp; Floaters</span></a>
                                                                    </p>
                                                                    <p><a href="" data-index="1.1.6" className="rightMenuLink  noHasTagWidth dp-widget-link">
                                                                    <span className="linkTest">Formal Shoes</span></a>
                                                                    </p>
                                                                    <p><a href="" data-index="1.1.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
                                                                    <span className="linkTest">Loafers</span></a>
                                                                    </p>
                                                                    <p><a href="" data-index="1.1.8" className="rightMenuLink  noHasTagWidth dp-widget-link">
                                                                    <span className="linkTest">Sneakers</span></a>
                                                                    </p>
                                                                    <p><a href="" data-index="1.1.9" className="rightMenuLink  noHasTagWidth dp-widget-link">
                                                                    <span className="linkTest">Ethnic Footwear</span></a>
                                                                    </p>
                                                                    <p><a href="" data-index="1.1.10" className="rightMenuLink  noHasTagWidth dp-widget-link">
                                                                    <span className="linkTest">Shoe Accessories</span></a>
                                                                    </p>
                                                                    <p><a href="" data-index="1.1.12" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Bags &amp; Luggage</span></a>
                                                                    </p>
                                                                    <p><a href="" data-index="1.1.13" className="rightMenuLink  noHasTagWidth dp-widget-link">
                                                                    <span className="linkTest">Backpacks</span></a>
                                                                    </p>
                                                                    <p><a href="" data-index="1.1.14" className="rightMenuLink  noHasTagWidth dp-widget-link">
                                                                    <span className="linkTest">Laptop Bags</span></a>
                                                                    </p>
                                                                    <p><a href="" data-index="1.1.15" className="rightMenuLink  noHasTagWidth dp-widget-link">
                                                                    <span className="linkTest">Hiking Bags</span></a>
                                                                    </p>
                                                                    <p><a href="" data-index="1.1.16" className="rightMenuLink  noHasTagWidth dp-widget-link">
                                                                    <span className="linkTest">Luggage &amp; Suitcases</span></a>
                                                                    </p>
                                                                    <p><a href="" data-index="1.1.17" className="rightMenuLink  noHasTagWidth dp-widget-link">
                                                                    <span className="linkTest">Travel Accessories</span></a>
                                                                    </p>
                                                                    <p><a href="" data-index="1.1.18" className="rightMenuLink  noHasTagWidth dp-widget-link">
                                                                    <span className="linkTest">Office Bags</span></a>
                                                                    </p>
                                                                    
                                                                    <p style={{display:"none"}}><a href="" data-index="20" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
                                                                    <span className="headingText"></span></a>
                                                        </p><p style={{display:"none"}}><a href="" data-index="21" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
                                                                    <span className="headingText"></span></a>
                                                        </p><p style={{display:"none"}}><a href="" data-index="22" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
                                                                    <span className="headingText"></span></a>
                                                        </p><p style={{display:"none"}}><a href="" data-index="23" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
                                                                    <span className="headingText"></span></a>
                                                        </p></div>
                                            </div>
                                    </div>
                                <div className="commonOffer fstOffer">
                                    <div className="firstOfferForm">
                                        <a className="bannerLink dp-widget-link" href="">
                                            <img className="bigOfferBanner hidden-inview wooble" height="510" width="195" src="https://g.sdlcdn.com/imgs/i/1/o/MF-05994.jpg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
						
                        
                        <li className={`navlink ${hoverWomenFashion ? 'hoverIn': ""}`} onMouseEnter={() => setHoverWomenFashion(true)} onMouseLeave={() => setHoverWomenFashion(false)} data-nav-index="2">
								<a href="" className="menuLinks leftCategoriesProduct ">
									<span className="labelIcon" style={{ backgroundImage: "url('https://g.sdlcdn.com/imgs/k/v/x/WoMen_sitenav-5a8ca.jpg')" }}></span>
									<span className="catText">Women's Fashion</span>
                                </a>
								<div id="category2Data" className={`leftNavigationRightBlock ${hoverWomenFashion ? 'slideLeft': ""}`} style={{display: hoverWomenFashion ? "block":"none", width: "896px", top: "0px"}}>
									<div className="leftData colDataBlk">
											 <div className="colDataSection noBorder">
											    <div className="colDataInnerBlk"> 
											    	<p><a href="" data-index="1.1.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">Ethnic Wear</span></a>
																     </p>
																     <p><a href="" data-index="1.1.2" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Sarees</span></a>
																     </p>
																     <p><a href="" data-index="1.1.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Kurtas &amp; Kurtis</span></a>
																     </p>
																     <p><a href="" data-index="1.1.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Lehengas</span></a>
																     </p>
																     <p><a href="" data-index="1.1.5" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Salwar Suits</span></a>
																     </p>
																     <p><a href="" data-index="1.1.6" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Ethnic Bottomwear</span></a>
																     </p>
																     <p><a href="" data-index="1.1.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Saree Blouses</span></a>
																     </p>
																     {/* <p><a href="" data-index="1.1.8" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p> */}
																     <p><a href="" data-index="1.1.9" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Footwear</span></a>
																     </p>
																     <p><a href="" data-index="1.1.10" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Heels</span></a>
																     </p>
																     <p><a href="" data-index="1.1.11" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Flats &amp; Sandals</span></a>
																     </p>
																     <p><a href="" data-index="1.1.12" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Slippers &amp; Flip Flops</span></a>
																     </p>
																     <p><a href="" data-index="1.1.13" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Ballerinas</span></a>
																     </p>
																     <p><a href="" data-index="1.1.14" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Casual Shoes</span></a>
																     </p>
																     <p><a href="" data-index="1.1.15" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Sports Shoes</span></a>
																     </p>
																     <p><a href="" data-index="1.1.16" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Ethnic Footwear</span></a>
																     </p>
																     <p><a href="" data-index="1.1.17" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Floater Sandal</span></a>
																     </p>
																     {/* <p><a href="" data-index="1.1.18" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p> */}
																     <p><a href="" data-index="1.1.19" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Perfumes &amp; Fragrances</span></a>
																     </p>
																     <p><a href="" data-index="1.1.20" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Perfumes</span></a>
																     </p>
																     <p><a href="" data-index="1.1.21" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Deodorants</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" data-index="22" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="23" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
										     </div>
									    </div>
								    <div className="midData colDataBlk">
									  		<div className="colDataSection ">
										  		<div className="colDataInnerBlk">
										  			                <p><a href="" data-index="1.2.1" className="rightMenuLink  shiftHeadTop noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Women's Clothing</span></a>
																     </p>
																     <p><a href="" data-index="1.2.2" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Dresses &amp; Gowns</span></a>
																     </p>
																     <p><a href="" data-index="1.2.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Tops &amp; Tunics</span></a>
																     </p>
																     <p><a href="" data-index="1.2.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">T-Shirts</span></a>
																     </p>
																     <p><a href="" data-index="1.2.5" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Shirts</span></a>
																     </p>
																     <p><a href="" data-index="1.2.6" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Jeans</span></a>
																     </p>
																     <p><a href="" data-index="1.2.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Trousers</span></a>
																     </p>
																     <p><a href="" data-index="1.2.8" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Innerwear</span></a>
																     </p>
																     <p><a href="" data-index="1.2.9" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Nightwear</span></a>
																     </p>
																     <p><a href="" data-index="1.2.10" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Sportswear &amp; Gymwear</span></a>
																     </p>
																     {/* <p><a href="" data-index="1.2.11" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p> */}
																     <p><a href="" data-index="1.2.12" className="rightMenuLink  headingTextLink noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Winter Wear</span></a>
																     </p>
																     <p><a href="" data-index="1.2.13" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Outerwear &amp; Jackets</span></a>
																     </p>
																     <p><a href="" data-index="1.2.14" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Sweatshirts</span></a>
																     </p>
																     <p><a href="" data-index="1.2.15" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Cardigans &amp; Pullovers</span></a>
																     </p>
																     <p><a href="" data-index="1.2.16" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Shrugs &amp; Waistcoats</span></a>
																     </p>
																     <p><a href="" data-index="1.2.17" className="rightMenuLink  headingTextLink noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Maternity Wear</span></a>
																     </p>
																     <p><a href="" data-index="1.2.18" className="rightMenuLink  headingTextLink noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Handbags &amp; Clutches</span></a>
																     </p>
																     <p><a href="" data-index="1.2.19" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Handbags</span></a>
																     </p>
																     <p><a href="" data-index="1.2.20" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Wallets</span></a>
																     </p>
																     <p><a href="" data-index="1.2.21" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Clutches</span></a>
																     </p>
																     <p><a href="" data-index="1.2.22" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Utility bags</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														            </p>
                                                </div>
									  		</div>
								  		</div>
							  		<div className="rightData colDataBlk">
									  		<div className="colDataSection ">
										  		<div className="colDataInnerBlk"> 
										  			<p><a href="" data-index="1.3.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">Eyewear</span></a>
																     </p>
																     <p><a href="" data-index="1.3.2" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Sunglasses</span></a>
																     </p>
																     <p><a href="" data-index="1.3.3" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Spectacle Frames</span></a>
																     </p>
																     <p><a href="" data-index="1.3.4" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Watches</span></a>
																     </p>
																     <p><a href="" data-index="1.3.5" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Fashion Jewellery</span></a>
																     </p>
																     <p><a href="" data-index="1.3.6" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Necklaces &amp; Sets</span></a>
																     </p>
																     <p><a href="" data-index="1.3.7" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Earrings</span></a>
																     </p>
																     <p><a href="" data-index="1.3.8" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Bangles &amp; Bracelets</span></a>
																     </p>
																     <p><a href="" data-index="1.3.9" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Pendants &amp; Sets</span></a>
																     </p>
																     {/* <p><a href="" data-index="1.3.10" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p> */}
																     <p><a href="" data-index="1.3.11" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Gold Coins &amp; Bars</span></a>
																     </p>
																     <p><a href="" data-index="1.3.12" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Fashion Accessories</span></a>
																     </p>
																     <p><a href="" data-index="1.3.13" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Hair Accessories</span></a>
																     </p>
																     <p><a href="" data-index="1.3.14" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Stoles &amp; Scarves</span></a>
																     </p>
																     <p><a href="" data-index="1.3.15" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Socks &amp; Stockings</span></a>
																     </p>
																     {/* <p><a href="" data-index="1.3.16" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p> */}
																     <p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
                                                                    </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="commonOffer fstOffer">
											     <div className="firstOfferForm">
												    <a className="bannerLink dp-widget-link" >
														    <img className="bigOfferBanner hidden-inview wooble" height="510" width="195" src="https://g.sdlcdn.com/imgs/i/n/g/MS_WomenWatches_LeftNav1Aug-e15a1.jpg" /></a>
															</div>
											     </div>
									     </div>
                        </li>
						
                        <li className={`navlink ${hoverHomeAndKitchen ? 'hoverIn': ""}`} onMouseEnter={() => setHoverHomeAndKitchen(true)} onMouseLeave={() => setHoverHomeAndKitchen(false)} data-nav-index="3">
								<a href="" className="menuLinks leftCategoriesProduct ">
									<span className="labelIcon" style={{ backgroundImage: "url('https://g.sdlcdn.com/imgs/k/v/x/HOme_sitenavigation-d7a00.jpg')" }}></span>
									<span className="catText">Home &amp; Kitchen</span>
									</a>
								<div id="category3Data" className={`leftNavigationRightBlock ${hoverHomeAndKitchen? 'slideLeft': ''}`} style={{display:hoverHomeAndKitchen ? "block": "none", width: "896px", top: "0px"}}>
									<div className="leftData colDataBlk">
											 <div className="colDataSection noBorder">
											    <div className="colDataInnerBlk"> 
											    	<p><a href="" data-index="1.1.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">Kitchen Appliances</span></a>
																     </p>
																     <p><a href="" data-index="1.1.2" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Juicer Mixer Grinders</span></a>
																     </p>
																     <p><a href="" data-index="1.1.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Water Purifiers</span></a>
																     </p>
																     <p><a href="" data-index="1.1.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Gas Stoves &amp; Hobs</span></a>
																     </p>
																     <p><a href="" data-index="1.1.5" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Induction Cooktops</span></a>
																     </p>
																     <p><a href="" data-index="1.1.6" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Kettles &amp; Coffee Makers</span></a>
																     </p>
																     <p><a href="" data-index="1.1.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Choppers &amp; Blenders</span></a>
																     </p>
																     <p><a href="" data-index="1.1.8" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Sandwich Makers</span></a>
																     </p>
																     <p><a href="" data-index="1.1.9" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Roti Makers</span></a>
																     </p>
																     <p><a href="" data-index="1.1.10" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Electric Cookers</span></a>
																     </p>
																     {/* <p><a href="https://www.snapdeal.com/products/appliances-kitchen?sort=plrty" data-index="1.1.11" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p> */}
																     <p><a href="" data-index="1.1.12" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Kitchenware</span></a>
																     </p>
																     <p><a href="" data-index="1.1.13" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Cookware &amp; Bakeware</span></a>
																     </p>
																     <p><a href="" data-index="1.1.14" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Kitchen Storage</span></a>
																     </p>
																     <p><a href="" data-index="1.1.15" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Dining &amp; Serving</span></a>
																     </p>
																     <p><a href="" data-index="1.1.16" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Kitchen Tools</span></a>
																     </p>
																     <p><a href="" data-index="1.1.17" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Pressure Cookers</span></a>
																     </p>
																     <p><a href="" data-index="1.1.18" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Water Bottles</span></a>
																     </p>
																     <p><a href="" data-index="1.1.19" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Tea &amp; Coffeeware</span></a>
																     </p>
																     <p><a href="" data-index="1.1.20" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Bar Accessories</span></a>
																     </p>
																     {/* <p><a href="https://www.snapdeal.com/products/home-kitchen?sort=plrty" data-index="1.1.21" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p> */}
																     <p style={{display:"none"}}><a href="" data-index="22" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="23" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
										     </div>
									    </div>
								    <div className="midData colDataBlk">
									  		<div className="colDataSection ">
										  		<div className="colDataInnerBlk">
										  			<p><a href="" data-index="1.2.1" className="rightMenuLink  shiftHeadTop noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Home Furnishing</span></a>
																     </p>
																     <p><a href="" data-index="1.2.2" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Bed Linen</span></a>
																     </p>
																     <p><a href="" data-index="1.2.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Bath Linen</span></a>
																     </p>
																     <p><a href="" data-index="1.2.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Blankets &amp; Quilts</span></a>
																     </p>
																     <p><a href="" data-index="1.2.5" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Curtains &amp; Accessories</span></a>
																     </p>
																     <p><a href="" data-index="1.2.6" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Mattresses</span></a>
																     </p>
																     {/* <p><a href="" data-index="1.2.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p> */}
																     <p><a href="" data-index="1.2.8" className="rightMenuLink  headingTextLink noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Home Décor</span></a>
																     </p>
																     <p><a href="" data-index="1.2.9" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Lighting Fixtures</span></a>
																     </p>
																     <p><a href="" data-index="1.2.10" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Wall Decor</span></a>
																     </p>
																     <p><a href="" data-index="1.2.11" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Gifts &amp; Decor</span></a>
																     </p>
																     <p><a href="" data-index="1.2.12" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Religion &amp; Spirituality</span></a>
																     </p>
																     <p><a href="" data-index="1.2.13" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">LED Bulbs</span></a>
																     </p>
																     {/* <p><a href="" data-index="1.2.14" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p> */}
																     <p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="rightData colDataBlk">
									  		<div className="colDataSection ">
										  		<div className="colDataInnerBlk"> 
										  			<p><a href="" data-index="1.3.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">Home Improvement</span></a>
																     </p>
																     <p><a href="" data-index="1.3.2" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Home Utility</span></a>
																     </p>
																     <p><a href="" data-index="1.3.3" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Cleaning Mops</span></a>
																     </p>
																     <p><a href="" data-index="1.3.4" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Plants &amp; Gardening</span></a>
																     </p>
																     <p><a href="" data-index="1.3.5" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Ironing Boards</span></a>
																     </p>
																     <p><a href="" data-index="1.3.6" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Home Cleaning</span></a>
																     </p>
																     <p><a href="" data-index="1.3.7" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Laundry Accessories</span></a>
																     </p>
																     {/* <p><a href="" data-index="1.3.8" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p> */}
																     <p><a href="" data-index="1.3.9" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Tools &amp; Hardware</span></a>
																     </p>
																     <p><a href="" data-index="1.3.10" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Power &amp; Hand Tools</span></a>
																     </p>
																     <p><a href="" data-index="1.3.11" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Bathroom Accessories</span></a>
																     </p>
																     <p><a href="" data-index="1.3.12" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Electrical</span></a>
																     </p>
																     <p><a href="" data-index="1.3.13" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Taps &amp; Showers</span></a>
																     </p>
																     <p><a href="" data-index="1.3.14" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Safes Lock &amp; Door Fitting</span></a>
																     </p>
																     <p><a href="" data-index="1.3.15" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Sanitaryware</span></a>
																     </p>
																     {/* <p><a href="https://www.snapdeal.com/products/kitchen-bathroom-fittings?sort=plrty" data-index="1.3.16" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p> */}
																     <p><a href="" data-index="1.3.17" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Pet Supplies</span></a>
																     </p>
																     <p><a href="" data-index="1.3.18" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Dog Supplies</span></a>
																     </p>
																     <p><a href="" data-index="1.3.19" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Cat Supplies</span></a>
																     </p>
																     <p><a href="" data-index="1.3.20" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Fish &amp; Aquatic Supplies</span></a>
																     </p>
																     <p><a href="" data-index="1.3.21" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Bird Supplies</span></a>
																     </p>
																     {/* <p><a href="" data-index="1.3.22" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p> */}
																     <p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="commonOffer fstOffer">
											     <div className="firstOfferForm">
												    <a className="bannerLink dp-widget-link" href="https://www.snapdeal.com/offers/super_savers_offers">
														    <img className="bigOfferBanner hidden-inview wooble" height="510" width="195" src="https://g.sdlcdn.com/imgs/i/1/r/GM_28oct-e8cd1.jpg"/></a>
															</div>
											     </div>
									     </div>
                        </li>

						<li className={`navlink ${hoverToys ? 'hoverIn': ""}`} onMouseEnter={() => setHoverToys(true)} onMouseLeave={() => setHoverToys(false)} data-nav-index="4">
								<a href="" className="menuLinks leftCategoriesProduct ">
									<span className="labelIcon" style={{ backgroundImage: "url('https://g.sdlcdn.com/imgs/k/v/x/Toys_Sitenavigation-ef666.jpg')" }}></span>
									<span className="catText">Toys, Kids' Fashion &amp; more</span>
									</a>
								<div id="category4Data" className={`leftNavigationRightBlock ${hoverToys? 'slideLeft':''}`} style={{display: hoverToys? "block" : "none", width: "896px", top: "0px"}}>
									<div className="leftData colDataBlk">
											 <div className="colDataSection noBorder">
											    <div className="colDataInnerBlk"> 
											    	<p><a href="" data-index="1.1.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">Toys</span></a>
																     </p>
																     <p><a href="" data-index="1.1.2" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Toy Cars</span></a>
																     </p>
																     <p><a href="" data-index="1.1.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Electronic Toys</span></a>
																     </p>
																     <p><a href="" data-index="1.1.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Action  Toys  &amp; Figures</span></a>
																     </p>
																     <p><a href="" data-index="1.1.5" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Ride On &amp; Scooters</span></a>
																     </p>
																     <p><a href="" data-index="1.1.6" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Outdoor Toys</span></a>
																     </p>
																     <p><a href="" data-index="1.1.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Soft Toys</span></a>
																     </p>
																     <p><a href="" data-index="1.1.8" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Educational Toys</span></a>
																     </p>
																     <p><a href="" data-index="1.1.9" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Toddler Toys</span></a>
																     </p>
																     <p><a href="" data-index="1.1.10" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Dolls &amp; Doll Houses</span></a>
																     </p>
																     <p><a href="" data-index="1.1.11" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Activity Sets</span></a>
																     </p>
																     <p><a href="" data-index="1.1.12" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Indoor &amp; Board Games</span></a>
																     </p>
																     <p><a href="" data-index="1.1.13" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Party Supplies</span></a>
																     </p>
																     <p><a href="" data-index="1.1.14" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Bicycles &amp; Tricycles</span></a>
																     </p>
																     <p><a href="" data-index="1.1.15" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Kids' Footwear</span></a>
																     </p>
																     <p><a href="" data-index="1.1.16" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Boys Footwear</span></a>
																     </p>
																     <p><a href="" data-index="1.1.17" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Girls Footwear</span></a>
																     </p>
																     <p><a href="" data-index="1.1.18" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Baby Footwear</span></a>
																     </p>
																     <p><a href="" data-index="1.1.19" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Kids Eyewear</span></a>
																     </p>
																     <p><a href="" data-index="1.1.20" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Kids' Watches</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" data-index="21" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="22" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="23" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
										     </div>
									    </div>
								    <div className="midData colDataBlk">
									  		<div className="colDataSection ">
										  		<div className="colDataInnerBlk">
										  			<p><a href="" data-index="1.2.1" className="rightMenuLink  shiftHeadTop noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Kids' Fashion</span></a>
																     </p>
																     <p><a href="" data-index="1.2.2" className="rightMenuLink  headingTextLink noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Girls' Clothing</span></a>
																     </p>
																     <p><a href="" data-index="1.2.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Girls Clothing Sets</span></a>
																     </p>
																     <p><a href="" data-index="1.2.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Frocks &amp; Dresses</span></a>
																     </p>
																     <p><a href="" data-index="1.2.5" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">T-Shirts, Tops &amp; Shirts</span></a>
																     </p>
																     <p><a href="" data-index="1.2.6" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Jumpsuits &amp; Dungarees</span></a>
																     </p>
																     <p><a href="" data-index="1.2.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Girls Sweatshirts</span></a>
																     </p>
																     <p><a href="" data-index="1.2.8" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Girls Jackets</span></a>
																     </p>
																     <p><a href="" data-index="1.2.9" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Girls Jeans</span></a>
																     </p>
																     <p><a href="" data-index="1.2.10" className="rightMenuLink  headingTextLink noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Boys' Clothing</span></a>
																     </p>
																     <p><a href="" data-index="1.2.11" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Boys Clothing Sets</span></a>
																     </p>
																     <p><a href="" data-index="1.2.12" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Boys Tshirt &amp; Polos</span></a>
																     </p>
																     <p><a href="" data-index="1.2.13" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Boys Shirt</span></a>
																     </p>
																     <p><a href="" data-index="1.2.14" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Boys Trackpant</span></a>
																     </p>
																     <p><a href="" data-index="1.2.15" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Boys Jeans</span></a>
																     </p>
																     <p><a href="" data-index="1.2.16" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Boys Sweatshirts</span></a>
																     </p>
																     <p><a href="" data-index="1.2.17" className="rightMenuLink  headingTextLink noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Baby Clothing</span></a>
																     </p>
																     <p><a href="" data-index="1.2.18" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Baby Boys &amp; Girls Sets</span></a>
																     </p>
																     <p><a href="" data-index="1.2.19" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Baby T-Shirt, Tops&amp;Shirts</span></a>
																     </p>
																     <p><a href="" data-index="1.2.20" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Baby Girl Frock, &amp;Dresses</span></a>
																     </p>
																     <p><a href="" data-index="1.2.21" className="rightMenuLink  headingTextLink noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Kids Accessories</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="rightData colDataBlk">
									  		<div className="colDataSection ">
										  		<div className="colDataInnerBlk"> 
										  			<p><a href="" data-index="1.3.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">Baby Care</span></a>
																     </p>
																     <p><a href="" data-index="1.3.2" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Baby Mosquito Nets</span></a>
																     </p>
																     <p><a href="" data-index="1.3.3" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Baby Blankets</span></a>
																     </p>
																     <p><a href="" data-index="1.3.4" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Baby Carriers</span></a>
																     </p>
																     <p><a href="" data-index="1.3.5" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Baby Strollers</span></a>
																     </p>
																     <p><a href="" data-index="1.3.6" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Walkers</span></a>
																     </p>
																     <p><a href="" data-index="1.3.7" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Feeding &amp; Nursing</span></a>
																     </p>
																     <p><a href="" data-index="1.3.8" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Lab Equipment</span></a>
																     </p>
																     <p><a href="" data-index="1.3.9" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Stationery</span></a>
																     </p>
																     <p><a href="" data-index="1.3.10" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Pens &amp; Markers</span></a>
																     </p>
																     <p><a href="" data-index="1.3.11" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Pencil Boxes</span></a>
																     </p>
																     <p><a href="" data-index="1.3.12" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Files &amp; Folders</span></a>
																     </p>
																     <p><a href="" data-index="1.3.13" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Calculators</span></a>
																     </p>
																     <p><a href="" data-index="1.3.14" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Diaries &amp; Planners</span></a>
																     </p>
																     <p><a href="" data-index="1.3.15" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Printing Papers</span></a>
																     </p>
																     <p><a href="" data-index="1.3.16" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Notebooks</span></a>
																     </p>
																     <p><a href="" data-index="1.3.17" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Writing Pads</span></a>
																     </p>
																     <p><a href="" data-index="1.3.18" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Photo Papers</span></a>
																     </p>
																     <p><a href="" data-index="1.3.19" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Art &amp; Craft Supplies</span></a>
																     </p>
																     <p><a href="" data-index="1.3.20" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Tapes</span></a>
																     </p>
																     <p><a href="" data-index="1.3.21" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Card Holders</span></a>
																     </p>
																     <p><a href="" data-index="1.3.22" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Staplers</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="commonOffer fstOffer">
											     <div className="firstOfferForm">
												    <a className="bannerLink dp-widget-link" href="">
														    <img className="bigOfferBanner hidden-inview wooble" height="510" width="195" src="https://g.sdlcdn.com/imgs/i/1/o/toys-7fc92.jpg" /></a>
															</div>
											     </div>
									     </div>
                        </li>

						<li className="navlink marB18" data-nav-index="5">
								<a href="javascript:void(0);" className="menuLinks leftCategoriesProduct ">
									<span className="labelIcon" style={{ backgroundImage: "url('https://g.sdlcdn.com/imgs/k/v/x/Beauty_Site_navigation-5f3be.jpg')" }}></span>
									<span className="catText">Beauty, Health &amp; Daily Needs</span>
									</a>
								<div id="category5Data" className="leftNavigationRightBlock" style={{display: "none", width: "896px", top: "0px"}}>
									<div className="leftData colDataBlk">
											 <div className="colDataSection noBorder">
											    <div className="colDataInnerBlk"> 
											    	<p><a href="https://www.snapdeal.com/products/beauty" data-index="1.1.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">Beauty</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/make-up-face?sort=plrty" data-index="1.1.2" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Face</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/make-up-eyes?sort=plrty" data-index="1.1.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Eyes</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/make-up-lips?sort=plrty" data-index="1.1.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Lips</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/make-up-nails?sort=plrty" data-index="1.1.5" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Nails</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/makeup-kits?sort=plrty" data-index="1.1.6" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Makeup Palettes</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/make-up-brushes-applicators?sort=plrty" data-index="1.1.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Brushes &amp; Applicators</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/personal-care-grooming" data-index="1.1.8" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Personal Care &amp; Grooming</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/perfumes-beauty-skin-care?sort=plrty" data-index="1.1.9" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Skin Care</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/perfumes-beauty-hair-care?sort=plrty" data-index="1.1.10" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Hair Care</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/beauty-bath-shower?sort=plrty" data-index="1.1.11" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Bath &amp; Shower</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/perfumes-beauty-oral-care?sort=plrty" data-index="1.1.12" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Oral Care</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/perfumes-beauty-mens-grooming?sort=plrty" data-index="1.1.13" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Men's Grooming</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/perfumes-beauty-feminine-care?sort=plrty" data-index="1.1.14" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Feminine Hygiene</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/personal-care-waxing-hair-removal?sort=plrty" data-index="1.1.15" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Waxing &amp; Hair Removal</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/deodorants-roll-on?sort=plrty" data-index="1.1.16" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Deodorants &amp; Roll-ons</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sexual-wellness" data-index="1.1.17" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Sexual Wellness</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sexual-wellness-condoms?sort=plrty" data-index="1.1.18" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Condoms</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sexual-wellness-lubricants" data-index="1.1.19" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Lubes</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sexual-wellness-toys" data-index="1.1.20" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Adult Sex Toys</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sexual-wellness-performance-enlargement" data-index="1.1.21" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Performance &amp; Enlargement</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sexy-lingerie-nightwear-role-play" data-index="1.1.22" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Sexy Lingerie</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" data-index="23" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
										     </div>
									    </div>
								    <div className="midData colDataBlk">
									  		<div className="colDataSection ">
										  		<div className="colDataInnerBlk">
										  			<p><a href="https://www.snapdeal.com/products/food" data-index="1.2.1" className="rightMenuLink  shiftHeadTop noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Food and Gourmet</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/food-tea-coffee-beverages" data-index="1.2.2" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Tea, Coffee &amp; Beverages</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/food-noodles-soups-pasta" data-index="1.2.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Noodles, Soups &amp; Pastas</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/food-biscuits-snacks" data-index="1.2.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Biscuits</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/food-breakfast" data-index="1.2.5" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Breakfast Foods</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/food-ready-to-cook-eat" data-index="1.2.6" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Ready To Cook &amp; Eat</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/food-sauces-dressings" data-index="1.2.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Sauces &amp; Dressings</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/food-baking-essentials" data-index="1.2.8" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Baking Essentials</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/food-chocolates-mints" data-index="1.2.9" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Chocolates &amp; Candies</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/food-staples-oils-spices" data-index="1.2.10" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Staples, Oils &amp; Spices</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/food-dry-fruits-nuts-gifts-boxes" data-index="1.2.11" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Dry Fruits &amp; Gifts Boxes</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/dietary-supplements" data-index="1.2.12" className="rightMenuLink  headingTextLink noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Nutrition &amp; Supplements</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/health-nutrition-proteins?sort=plrty" data-index="1.2.13" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Proteins</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/health-supplements?sort=plrty" data-index="1.2.14" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Vitamins &amp; Minerals</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/search?keyword=Nutrition%20Drink&amp;santizedKeyword=Nutrition%20Drink&amp;catId=597&amp;categoryId=46139365&amp;suggested=false&amp;vertical=p&amp;noOfResults=20&amp;searchState=k3%3Dtrue%7Ck5%3D0%7Ck6%3D0%7Ck7%3D41MUaT8%3D%7Ck8%3D0&amp;clickSrc=searchOnSubCat&amp;lastKeyword=&amp;prodCatId=&amp;changeBackToAll=false&amp;foundInAll=false&amp;categoryIdSearched=&amp;cityPageUrl=&amp;categoryUrl=&amp;url=&amp;utmContent=&amp;dealDetail=&amp;sort=rlvncy#bcrumbSearch:Nutrition%20Drink|bcrumbLabelId:597" data-index="1.2.15" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Health Drinks</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/health-supplements-meals-replacements?sort=plrty" data-index="1.2.16" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Meal Replacements</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/health-nutrition-proteins-supplements-gainers?sort=plrty" data-index="1.2.17" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Weight Gainers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/health-nutrition-proteins-supplements-pre-workout?sort=plrty" data-index="1.2.18" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Workout Supplements</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/health-nutrition-proteins-supplements-post-workout?sort=plrty" data-index="1.2.19" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Muscle Support</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="rightData colDataBlk">
									  		<div className="colDataSection ">
										  		<div className="colDataInnerBlk"> 
										  			<p><a href="https://www.snapdeal.com/products/health-monitors-devices" data-index="1.3.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">Health Monitoring Devices</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/health-heart-rate-bp-monitor?sort=plrty" data-index="1.3.2" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">BP Monitors</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/health-diabetes-care" data-index="1.3.3" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Diabetic Care</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/health-monitoring-weighing-scales?sort=plrty" data-index="1.3.4" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Weighing Scales</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/health-monitoring-devices-body-fat-analyzers" data-index="1.3.5" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Body Fat Analysers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/heath-devices-respiratory-care?sort=plrty" data-index="1.3.6" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Respiratory &amp; Heart Care</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/heath-devices-thermometers?sort=plrty" data-index="1.3.7" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Thermometers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/daily-needs-general-wellness" data-index="1.3.8" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">General Wellness</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/health-massagers-pain-relief?sort=plrty" data-index="1.3.9" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Massagers &amp; Pain Relief</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/general-wellness-mobility-aids-safety?sort=plrty" data-index="1.3.10" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Mobility Rehabilitation</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/general-wellness-first-aid?sort=plrty" data-index="1.3.11" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">First Aid</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/health-smoking-cessation-nicotine-gums?sort=plrty" data-index="1.3.12" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Nicotine Gums</span></a>
																     </p>
																     <p><a href="http://www.snapdeal.com/products/baby-care" data-index="1.3.13" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Baby Care</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/kids-toys-diapers" data-index="1.3.14" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Diapers &amp; Potty Training</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/kids-toys-infant-care" data-index="1.3.15" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Bath, Skin &amp; Health Care</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/baby-food" data-index="1.3.16" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Baby Food</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/household-essentials" data-index="1.3.17" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Household Essentials</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/household-essentials-detergents-fabric-care" data-index="1.3.18" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Detergents &amp; Fabric Care</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/household-essentials-house-kitchen-cleaners" data-index="1.3.19" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">House &amp; Kitchen Cleaners</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/household-essentials-repellents" data-index="1.3.20" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Repellents</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/perfumes-beauty-car-perfumes-air-freshners?sort=plrty" data-index="1.3.21" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Air Fresheners</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="commonOffer fstOffer">
											     <div className="firstOfferForm">
												    <a className="bannerLink dp-widget-link" href="https://www.snapdeal.com/products/daily-needs/?q=HighConversion_s%3AHC%7ChpsaScore_tf1%3A1%7C&amp;showAds=false&amp;sort=plrty">
														    <img className="bigOfferBanner hidden-inview wooble" height="510" width="195" src="https://g.sdlcdn.com/imgs/i/x/e/Beauty_2912-5548d.jpg"/></a>
															</div>
											     </div>
									     </div>
                        </li>

						<li className="leftHead">More Categories</li>
									<li className="navlink lnHeight" data-nav-index="6">
                                        <a href="javascript:void(0);" className="menuLinks leftCategoriesProduct ">
                                            <span className="catText">Automotives</span>
                                        </a>
								<div id="category6Data" className="leftNavigationRightBlock" style={{top: "0px", display: "none", width: "672px"}}>
									<div className="leftData colDataBlk">
											 <div className="colDataSection noBorder">
											    <div className="colDataInnerBlk"> 
											    	<p><a href="https://www.snapdeal.com/products/automotive" data-index="1.1.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">Automotive Accessories</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/car-vehicle-electronics?sort=plrty" data-index="1.1.2" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Car &amp; Vehicle Electronics</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/car-bluetooth-devices?sort=plrty" data-index="1.1.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Bluetooth Devices</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/gps-tracking-devices?sort=plrty" data-index="1.1.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Car GPS Navigation</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/car-vehicle-electronics?sort=plrty" data-index="1.1.5" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p>
																     <p><a href="https://www.snapdeal.com/products/automotive-car-interior" data-index="1.1.6" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Car Accessories</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/car-exterior-accessories-car-body-covers" data-index="1.1.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Car Body Covers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/car-interior-accessories/filters/Type_s~Car%20Mobile%20Chargers?sort=plrty" data-index="1.1.8" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Car Mobile Chargers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/automotive-car-interior/filters/Type_s~Car%20Mobile%20Holders?sort=plrty" data-index="1.1.9" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Car Mobile Holders</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" data-index="10" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="11" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="12" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="13" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="14" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="15" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="16" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="17" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="18" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="19" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="20" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="21" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="22" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="23" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
										     </div>
									    </div>
								    <div className="midData colDataBlk">
									  		<div className="colDataSection ">
										  		<div className="colDataInnerBlk">
										  			<p><a href="https://www.snapdeal.com/products/car-freshners?sort=plrty" data-index="1.2.1" className="rightMenuLink  shiftHeadTop noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Car Fresheners</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/car-air-purifiers-lonizers?sort=plrty" data-index="1.2.2" className="rightMenuLink  headingTextLink noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Air Purifiers &amp; Ionizers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/automotive-bike-accessories" data-index="1.2.3" className="rightMenuLink  headingTextLink noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Biker Gear &amp; Accessories</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/automotive-bike-accessories-bike-body-covers" data-index="1.2.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Bike Body Covers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/biker-protective-gear" data-index="1.2.5" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Biker Protective Gear</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/biker-protective-gear-rain-coats?sort=plrty" data-index="1.2.6" className="rightMenuLink  headingTextLink noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Biker Raincoats</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/automotive-helmets" data-index="1.2.7" className="rightMenuLink  headingTextLink noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Helmets &amp; Accessories</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/bike-helmets-locks-accessories?sort=plrty" data-index="1.2.8" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Helmet Accessories</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/automotive-car-parts" data-index="1.2.9" className="rightMenuLink  headingTextLink noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Parts &amp; Spares</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/automotive-filters" data-index="1.2.10" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Filters</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/automotive-lighting-electrical" data-index="1.2.11" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Lighting</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/automotive-exterior-parts?sort=plrty&amp;" data-index="1.2.12" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">External Parts</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="rightData colDataBlk">
									  		<div className="colDataSection  noBorder">
										  		<div className="colDataInnerBlk"> 
										  			<p style={{display:"none"}}><a href="" className="rightMenuLink 
														             shiftHeadTop noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="commonOffer fstOffer">
											     <div className="firstOfferForm">
												    <a className="bannerLink dp-widget-link" href="https://www.snapdeal.com/offers/car_store">
														    <img className="bigOfferBanner hidden-inview wooble" height="510" width="195" src="https://g.sdlcdn.com/imgs/i/1/o/Car_bike-925b8.jpg"/></a>
															</div>
											     </div>
									     </div>
                        </li>

						<li className="navlink lnHeight" data-nav-index="7">
								<a href="javascript:void(0);" className="menuLinks leftCategoriesProduct ">
									<span className="catText">Mobile &amp; Accessories</span>
									</a>
								<div id="category7Data" className="leftNavigationRightBlock" style={{top: "0px", display: "none", width: "672px"}}>
									<div className="leftData colDataBlk">
											 <div className="colDataSection noBorder">
											    <div className="colDataInnerBlk"> 
											    	<p><a href="https://www.snapdeal.com/products/mobiles-cases-covers" data-index="1.1.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">Mobile Cases &amp; Covers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/mobiles-printed-back-covers?sort=plrty" data-index="1.1.2" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Printed Back Covers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/mobiles-plain-back-covers?sort=plrty" data-index="1.1.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Plain Back Covers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/mobiles-flip-cases-covers?sort=plrty" data-index="1.1.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Flip Covers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/mobiles-screen-guards" data-index="1.1.5" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Screen Guards</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/mobiles-cases-covers?sort=plrty" data-index="1.1.6" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p>
																     <p style={{display:"none"}}><a href="" data-index="7" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="8" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="9" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="10" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="11" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="12" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="13" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="14" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="15" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="16" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="17" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="18" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="19" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="20" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="21" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="22" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="23" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
										     </div>
									    </div>
								    <div className="midData colDataBlk">
									  		<div className="colDataSection ">
										  		<div className="colDataInnerBlk">
										  			<p><a href="https://www.snapdeal.com/products/mobiles-accessories" data-index="1.2.1" className="rightMenuLink  shiftHeadTop noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Mobile Accessories</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/mobiles-cables-chargers" data-index="1.2.2" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Cables &amp; Chargers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/mobiles-power-banks" data-index="1.2.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Power Banks</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/mobiles-selfie-sticks" data-index="1.2.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Selfie Sticks</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/mobile-enhancements?sort=plrty" data-index="1.2.5" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Mobile Enhancements</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/mobiles-memory-cards?sort=plrty" data-index="1.2.6" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Memory Cards</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/mobiles-accessories" data-index="1.2.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p>
																     <p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="rightData colDataBlk">
									  		<div className="colDataSection  noBorder">
										  		<div className="colDataInnerBlk"> 
										  			<p style={{display:"none"}}><a href="" className="rightMenuLink 
														             shiftHeadTop noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="commonOffer fstOffer">
											     <div className="firstOfferForm">
												    <a className="bannerLink dp-widget-link" href="https://www.snapdeal.com/offers/top_mobile_deals">
														    <img className="bigOfferBanner hidden-inview wooble" height="510" width="195" src="https://i3.sdlcdn.com/img/campaign/d9b5ca24df/MS_MobilesAccessories_LeftNav.jpg"/></a>
															</div>
											     </div>
									     </div>
                        </li>

						<li className="navlink lnHeight" data-nav-index="8">
								<a href="javascript:void(0);" className="menuLinks leftCategoriesProduct ">
									<span className="catText">Electronics</span>
									</a>
								<div id="category8Data" className="leftNavigationRightBlock" style={{top: "0px", display: "none", width: "896px"}}>
									<div className="leftData colDataBlk">
											 <div className="colDataSection noBorder">
											    <div className="colDataInnerBlk"> 
											    	<p><a href="https://www.snapdeal.com/products/electronics-speakers" data-index="1.1.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">Speakers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/electronics-home-audio-systems" data-index="1.1.2" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Home Audio Systems</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/electronics-bluetooth-speakers?sort=plrty" data-index="1.1.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Bluetooth Speakers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/computers-speakers" data-index="1.1.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">2.0 Speakers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/electronic-headphones-earphones?sort=plrty" data-index="1.1.5" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Headphone &amp; Earphones</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/electronics-headphones?sort=plrty" data-index="1.1.6" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Bluetooth Headphone</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/electronics-earphones?sort=plrty" data-index="1.1.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Earphones</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/computers-headphones-mics?sort=plrty" data-index="1.1.8" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">True Wireless Earbuds</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/electronic" data-index="1.1.9" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Audio &amp; Video</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/electronics-projectors?sort=plrty" data-index="1.1.10" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Projectors</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/electronics-audio-video-accessories?sort=plrty" data-index="1.1.11" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Audio &amp; Video Accessories</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" data-index="12" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="13" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="14" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="15" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="16" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="17" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="18" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="19" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="20" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="21" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="22" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="23" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
										     </div>
									    </div>
								    <div className="midData colDataBlk">
									  		<div className="colDataSection ">
										  		<div className="colDataInnerBlk">
										  			<p><a href="http://www.snapdeal.com/products/appliances-large" data-index="1.2.1" className="rightMenuLink  shiftHeadTop noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">All Large Appliances</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/geysers?sort=plrty" data-index="1.2.2" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Geysers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/immersion-rod?sort=plrty" data-index="1.2.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Immersion Rods</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/room-heaters?sort=plrty" data-index="1.2.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Room Heaters</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/appliances-fans" data-index="1.2.5" className="rightMenuLink  headingTextLink noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Fans</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/appliances-ceiling-fans?q=Price%3A999%2C7000%7ChpsaScore_tf1%3A1%7C&amp;sort=plrty" data-index="1.2.6" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Ceiling Fans</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/appliances-table-fans?sort=plrty&amp;q=avgRating%3A3.0%7C" data-index="1.2.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Table Fans</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/appliances-exhaust-fans?sort=plrty&amp;q=avgRating%3A3.0%7C" data-index="1.2.8" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Exhaust Fans</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="rightData colDataBlk">
									  		<div className="colDataSection ">
										  		<div className="colDataInnerBlk"> 
										  			<p><a href="https://www.snapdeal.com/products/appliances-home" data-index="1.3.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">Home Appliances</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/appliances-microwave-ovens-otgs?sort=plrty" data-index="1.3.2" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Microwaves &amp; OTG</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/appliances-air-purifiers" data-index="1.3.3" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Air Purifiers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/appliances-vacuum-cleaners" data-index="1.3.4" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Vacuum Cleaners</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/appliances-iron" data-index="1.3.5" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Irons</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/electronic-telephones" data-index="1.3.6" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Landline Phones</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/appliances-home-security" data-index="1.3.7" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Home Security Systems</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/appliances-outdoor-utility-appliances" data-index="1.3.8" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Sewing Machines</span></a>
																     </p>
																     <p><a href="http://www.snapdeal.com/products/appliances-personal-care-appliances" data-index="1.3.9" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Grooming Appliances</span></a>
																     </p>
																     <p><a href="http://www.snapdeal.com/products/trimmers" data-index="1.3.10" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Trimmers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/shavers" data-index="1.3.11" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Shavers</span></a>
																     </p>
																     <p><a href="http://www.snapdeal.com/products/hair-dryers" data-index="1.3.12" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Hair Dryers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/hair-straightners" data-index="1.3.13" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Hair Straighteners</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/hair-stylers" data-index="1.3.14" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Hair Curlers &amp; More</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="commonOffer fstOffer">
											     <div className="firstOfferForm">
												    <a className="bannerLink dp-widget-link" href="https://www.snapdeal.com/offers/gadget_store">
														    <img className="bigOfferBanner hidden-inview wooble" height="510" width="195" src="https://g.sdlcdn.com/imgs/i/1/o/electronics-7e68c.jpg"/></a>
															</div>
											     </div>
									     </div>
                        </li>

						<li className="navlink lnHeight" data-nav-index="9">
								<a href="javascript:void(0);" className="menuLinks leftCategoriesProduct ">
									<span className="catText">Sports, Fitness &amp; Outdoor</span>
									</a>
								<div id="category9Data" className="leftNavigationRightBlock" style={{display: "none", width: "672px", top: "0px"}}>
									<div className="leftData colDataBlk">
											 <div className="colDataSection noBorder">
											    <div className="colDataInnerBlk"> 
											    	<p><a href="https://www.snapdeal.com/products/sports-hobbies" data-index="1.1.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">Sports &amp; Fitness</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-hobbies-fitness?sort=plrty" data-index="1.1.2" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Get Fit At Home</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/fitness-equipment-home-gym" data-index="1.1.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Home Gym</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/fitness-equipment-dumbbells" data-index="1.1.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Dumbbells</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/fitness-equipment-abdominal-exerciser" data-index="1.1.5" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Abdominal Exercisers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/fitness-equipment-exercise-bikes" data-index="1.1.6" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Exercise Bikes</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-hobbies-fitness-accessories-yoga-mats?sort=plrty" data-index="1.1.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Yoga Mats</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/fitness-equipment-exercise-benches" data-index="1.1.8" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Exercise Benches</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-hobbies-fitness-accessories-weighing-scales?sort=plrty&amp;showAds=false" data-index="1.1.9" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Weighing Scales</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-hobbies-fitness?sort=plrty" data-index="1.1.10" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p>
																     <p><a href="javascript:void(0);" data-index="1.1.11" className="rightMenuLink  headingTextLink noHasTagWidth noCursor"><span className="headingText">Get Ready For Gym</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-hobbies-running?sort=plrty" data-index="1.1.12" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Sports Footwear</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-hobbies-fitness-accessories-sippers-bottles-shakers?sort=plrty" data-index="1.1.13" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Sippers</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-hobbies-fitness-accessories-gym-gloves" data-index="1.1.14" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Gym Gloves</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/health-nutrition" data-index="1.1.15" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Sports Nutrition</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-hobbies-fitness-accessories-gym-bags?sort=plrty" data-index="1.1.16" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Gym Bags</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" data-index="17" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="18" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="19" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="20" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="21" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="22" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="23" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
										     </div>
									    </div>
								    <div className="midData colDataBlk">
									  		<div className="colDataSection ">
										  		<div className="colDataInnerBlk">
										  			<p><a href="https://www.snapdeal.com/products/sports-hobbies-sports?sort=plrty" data-index="1.2.1" className="rightMenuLink  shiftHeadTop noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Sports</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-hobbies-running?sort=plrty" data-index="1.2.2" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Running</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-hobbies-cricket" data-index="1.2.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Cricket</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-bicycles?sort=plrty&amp;q=Seniority_s%3AKids%7C" data-index="1.2.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Kids Cycles</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-bicycles?sort=plrty&amp;q=Seniority_s%3AAdult%7C" data-index="1.2.5" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Adult Cycles</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/bicycles-spare-parts-accessories?sort=plrty" data-index="1.2.6" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Bicycle Accessories</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-hobbies-badminton?sort=plrty" data-index="1.2.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Badminton</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-hobbies-football" data-index="1.2.8" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Football</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-hobbies-basketball?sort=plrty&amp;showAds=false" data-index="1.2.9" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Basketball</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-hobbies-skating?sort=plrty" data-index="1.2.10" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Skating</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-archery?sort=plrty&amp;showAds=false" data-index="1.2.11" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Archery and Shooting</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-hobbies-sports?sort=plrty" data-index="1.2.12" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p>
																     <p><a href="https://www.snapdeal.com/products/sports-hobbies-outdoor-adventure-gear?sort=plrty" data-index="1.2.13" className="rightMenuLink  headingTextLink noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Hiking &amp; Outdoor</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-hobbies-outdoor-adventure-gear-hiking-camping-tools-knives?sort=plrty" data-index="1.2.14" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Knives &amp; Tools</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/lifestyle-backpacks" data-index="1.2.15" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Backpacks</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/bags-hiking-rucksacks" data-index="1.2.16" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Hiking Bags</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/lifestyle-luggage?sort=plrty" data-index="1.2.17" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Luggage &amp; Suitcases</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/lifestyle-travel-accessories" data-index="1.2.18" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Travel Accessories</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/sports-hobbies-outdoor-adventure-gear?sort=plrty" data-index="1.2.19" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p>
																     <p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="rightData colDataBlk">
									  		<div className="colDataSection  noBorder">
										  		<div className="colDataInnerBlk"> 
										  			<p style={{display:"none"}}><a href="" className="rightMenuLink 
														             shiftHeadTop noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="commonOffer fstOffer">
											     <div className="firstOfferForm">
												    <a className="bannerLink dp-widget-link" href="https://www.snapdeal.com/products/sports-hobbies-cricket?q=Occasion_s%3ADiwali13%7ChpsaScore_tf1%3A1%7C&amp;showAds=false&amp;sort=plrty">
														    <img className="bigOfferBanner hidden-inview wooble" height="510" width="195" src="https://g.sdlcdn.com/imgs/i/j/3/Cricketleftnav-3f9e9.jpg"/></a>
															</div>
											     </div>
									     </div>
                        </li>

						<li className="navlink lnHeight" data-nav-index="10">
								<a href="javascript:void(0);" className="menuLinks leftCategoriesProduct ">
									<span className="catText">Computers &amp; Gaming</span>
									</a>
								<div id="category10Data" className="leftNavigationRightBlock" style={{display: "none", width: "896px", top: "0px"}}>
									<div className="leftData colDataBlk">
											 <div className="colDataSection noBorder">
											    <div className="colDataInnerBlk"> 
											    	<p><a href="https://www.snapdeal.com/products/computers-cartridges-toners" data-index="1.1.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">Printer Inks &amp; Toners</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/storage-devices" data-index="1.1.2" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Storage</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/storage-memory-cards?sort=plrty" data-index="1.1.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Memory cards</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/computers-pen-drives" data-index="1.1.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Pen Drives</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/networking-connected-devices?sort=plrty" data-index="1.1.5" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Networking Devices</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/computers-data-cards?sort=plrty" data-index="1.1.6" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Data Cards</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/computers-data-cards?sort=plrty" data-index="1.1.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Dongles</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" data-index="8" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="9" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="10" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="11" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="12" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="13" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="14" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="15" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="16" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="17" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="18" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="19" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="20" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="21" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="22" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="23" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
										     </div>
									    </div>
								    <div className="midData colDataBlk">
									  		<div className="colDataSection ">
										  		<div className="colDataInnerBlk">
										  			<p><a href="https://www.snapdeal.com/products/computers-computer-accessories" data-index="1.2.1" className="rightMenuLink  shiftHeadTop noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Computer Accessories</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/computers-keyboard" data-index="1.2.2" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Keyboards</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/computers-mouse" data-index="1.2.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Mouse</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/computers-webcams?sort=plrty" data-index="1.2.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Webcams</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/laptop-skins?sort=plrty" data-index="1.2.5" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Laptop Skins</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/computers-cooling-pads?sort=plrty" data-index="1.2.6" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Cooling Pads</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/surge-protectors?sort=plrty" data-index="1.2.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Extension Cords</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/computers-computer-accessories" data-index="1.2.8" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p>
																     <p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="rightData colDataBlk">
									  		<div className="colDataSection ">
										  		<div className="colDataInnerBlk"> 
										  			<p><a href="https://www.snapdeal.com/products/gaming" data-index="1.3.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">Gaming</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/gaming-accessories?sort=plrty" data-index="1.3.2" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Gaming Accessories</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/gaming?sort=plrty" data-index="1.3.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p>
																     <p><a href="https://www.snapdeal.com/products/computers-components" data-index="1.3.4" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Computer Components</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/computers-ram" data-index="1.3.5" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">RAM</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/computers-internal-hard-drives" data-index="1.3.6" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Internal Hard Drive</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/computers-components?sort=plrty" data-index="1.3.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p>
																     <p><a href="https://www.snapdeal.com/products/computers-software-cd-roms?sort=plrty" data-index="1.3.8" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Software</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/computers-software-security?sort=plrty" data-index="1.3.9" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Antivirus</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/computers-software-cd-roms?sort=bstslr" data-index="1.3.10" className="rightMenuLink  noHasTagWidth dp-widget-link">
																      <span className="viewText animArrowLink">View All<i className="sd-icon sd-icon-next animArrowIco"></i></span></a>
																      </p>
																     <p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="commonOffer fstOffer">
											     <div className="firstOfferForm">
												    <a className="bannerLink dp-widget-link" href="https://www.snapdeal.com/offers/computers_peripherals">
														    <img className="bigOfferBanner hidden-inview wooble" height="510" width="195" src="https://g.sdlcdn.com/imgs/i/1/r/Laptopacc_28oct-581f8.jpg"/></a>
															</div>
											     </div>
									     </div>
                        </li>

						<li className="navlink lnHeight" data-nav-index="11">
								<a href="javascript:void(0);" className="menuLinks leftCategoriesProduct ">
									<span className="catText">Books, Media &amp; Music</span>
									</a>
								<div id="category11Data" className="leftNavigationRightBlock" style={{display: "none", width: "896px", top: "0px"}}>
									<div className="leftData colDataBlk">
											 <div className="colDataSection noBorder">
											    <div className="colDataInnerBlk"> 
											    	<p><a href="https://www.snapdeal.com/products/books" data-index="1.1.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">View All Books</span></a>
																     </p>
																     <p><a href="javascript:void(0);" data-index="1.1.2" className="rightMenuLink  headingTextLink noHasTagWidth noCursor"><span className="headingText">Top Exams</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/books-competitive-exams?sort=plrty&amp;q=Exam_s%3AGATE%7C" data-index="1.1.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">GATE</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/books-competitive-exams?sort=plrty&amp;q=Exam_s%3AIIT%20JEE%7C" data-index="1.1.4" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">IIT JEE</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/books-competitive-exams?sort=plrty&amp;q=Exam_s%3ANEET%7C" data-index="1.1.5" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">NEET</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/books-competitive-exams?sort=plrty&amp;q=Exam_s%3AIBPS%20PO%5ESBI%20PO%7C" data-index="1.1.6" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">BANK PO</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/books-competitive-exams?sort=plrty&amp;q=Exam_s%3AUGC%20NET%7C" data-index="1.1.7" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">UGC Net</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/books-competitive-exams?sort=plrty&amp;q=Exam_s%3AUPSC%7C" data-index="1.1.8" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">UPSC</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/books?sort=plrty" data-index="1.1.9" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Browse by genre</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/books-school?sort=plrty" data-index="1.1.10" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">School Texts</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/books-competitive-exams?sort=plrty" data-index="1.1.11" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Competitive Exams</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/books-academic-professional?sort=plrty" data-index="1.1.12" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Academic &amp; Professional</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/books-children-teen?sort=plrty" data-index="1.1.13" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Children &amp; Young Adults</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/non-fiction-books?sort=plrty" data-index="1.1.14" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Non-Fiction</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/books-fiction-literature?sort=plrty" data-index="1.1.15" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Literature &amp; Fiction</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/books-self-help?sort=plrty" data-index="1.1.16" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Self Help</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/books-reference?sort=plrty" data-index="1.1.17" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Reference</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/e-learning?sort=plrty&amp;showAds=False" data-index="1.1.18" className="rightMenuLink  headingTextLink noHasTagWidth dp-widget-link"><span className="headingText">Online Education</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/e-learning-school-education?sort=plrty" data-index="1.1.19" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">School Learning Online</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/e-learning-competitive-exams?sort=plrty" data-index="1.1.20" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Online Test Preparation</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" data-index="21" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="22" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="23" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
										     </div>
									    </div>
								    <div className="midData colDataBlk">
									  		<div className="colDataSection ">
										  		<div className="colDataInnerBlk">
										  			<p><a href="https://www.snapdeal.com/products/musical-instruments-classNameical" data-index="1.2.1" className="rightMenuLink  shiftHeadTop noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Indian Instruments</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/musical-instruments-tabla?sort=plrty" data-index="1.2.2" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Tabla</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/musical-instruments-flutes" data-index="1.2.3" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Flutes</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/musical-instruments-others" data-index="1.2.4" className="rightMenuLink  headingTextLink noHasTagWidth &nbsp; 
																       dp-widget-link"><span className="headingText">Other Instruments</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/musical-instruments-harmonicas" data-index="1.2.5" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Mouth Organs</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="rightData colDataBlk">
									  		<div className="colDataSection ">
										  		<div className="colDataInnerBlk"> 
										  			<p><a href="https://www.snapdeal.com/products/digital-entertainment" data-index="1.3.1" className="rightMenuLink  shiftHeadTop noHasTagWidth dp-widget-link"><span className="headingText">E-Gift Cards</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/digital-entertainment?q=Brand%3ACleartrip%7C" data-index="1.3.2" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">Cleartrip</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/digital-entertainment?q=Brand%3AMakeMyTrip%7C" data-index="1.3.3" className="rightMenuLink   noHasTagWidth dp-widget-link">
																     <span className="linkTest">MakeMyTrip</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="commonOffer fstOffer">
											     <div className="firstOfferForm">
												    <a className="bannerLink dp-widget-link" href="https://www.snapdeal.com/products/books/filters/Quick_Picks_s~Pre-order?sort=plrty&amp;q=Quick_Picks_s%3APre-order%7C">
														    <img className="bigOfferBanner hidden-inview wooble" height="510" width="195" src="https://g.sdlcdn.com/imgs/i/h/e/BooksLN-5166e.jpg"/></a>
															</div>
											     </div>
									     </div>
                        </li>

						<li className="navlink lnHeight" data-nav-index="12">
								<a href="javascript:void(0);" className="menuLinks leftCategoriesProduct ">
									<span className="catText">Hobbies</span>
									</a>
								<div id="category12Data" className="leftNavigationRightBlock" style={{display: "none", width: "448px", top: "0px"}}>
									<div className="leftData colDataBlk">
											 <div className="colDataSection noBorder">
											    <div className="colDataInnerBlk"> 
											    	<p><a href="https://www.snapdeal.com/products/hobbies-art-supplies?sort=plrty" data-index="1.1.1" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Arts &amp; Crafts</span></a>
																     </p>
																     <p><a href="https://www.snapdeal.com/products/hobbies-collectible?sort=plrty&amp;q=Price%3A120%2C6999%7C" data-index="1.1.2" className="rightMenuLink  noHasTagWidth dp-widget-link">
																     <span className="linkTest">Collectibles</span></a>
																     </p>
																     <p style={{display:"none"}}><a href="" data-index="3" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="4" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="5" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="6" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="7" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="8" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="9" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="10" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="11" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="12" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="13" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="14" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="15" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="16" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="17" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="18" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="19" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="20" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="21" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="22" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="23" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
										     </div>
									    </div>
								    <div className="midData colDataBlk">
									  		<div className="colDataSection  noBorder">
										  		<div className="colDataInnerBlk">
										  			<p style={{display:"none"}}><a href="" className="rightMenuLink shiftHeadTopnoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="rightData colDataBlk">
									  		<div className="colDataSection  noBorder">
										  		<div className="colDataInnerBlk"> 
										  			<p style={{display:"none"}}><a href="" className="rightMenuLink 
														             shiftHeadTop noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="commonOffer fstOffer">
											     <div className="firstOfferForm">
												    <a className="bannerLink dp-widget-link" href="https://www.snapdeal.com/offers/hobbies-store">
														    <img className="bigOfferBanner hidden-inview wooble" height="510" width="195" src="https://i3.sdlcdn.com/img/campaign/826c9ca74b/Hobby.jpg"/></a>
															</div>
											     </div>
									     </div>
                        </li>

						<li className="navlink lnHeight" data-nav-index="13">
								<a href="javascript:void(0);" className="menuLinks leftCategoriesProduct ">
									<span className="catText"></span>
									</a>
								<div id="category13Data" className="leftNavigationRightBlock" style={{top: "0px", display: "none"}}>
									<div className="leftData colDataBlk">
											 <div className="colDataSection noBorder">
											    <div className="colDataInnerBlk"> 
											    	<p style={{display:"none"}}><a href="" data-index="1" className="rightMenuLink  shiftHeadTop noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="2" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="3" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="4" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="5" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="6" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="7" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="8" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="9" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="10" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="11" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="12" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="13" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="14" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="15" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="16" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="17" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="18" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="19" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="20" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="21" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="22" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" data-index="23" className="rightMenuLink  headingTextLink noHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
										     </div>
									    </div>
								    <div className="midData colDataBlk">
									  		<div className="colDataSection  noBorder">
										  		<div className="colDataInnerBlk">
										  			<p style={{display:"none"}}><a href="" className="rightMenuLink shiftHeadTopnoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink headingTextLinknoHasTagWidth noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		<div className="rightData colDataBlk">
									  		<div className="colDataSection  noBorder">
										  		<div className="colDataInnerBlk"> 
										  			<p style={{display:"none"}}><a href="" className="rightMenuLink 
														             shiftHeadTop noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p><p style={{display:"none"}}><a href="" className="rightMenuLink 
														             headingTextLink noHasTagWidth
														             &nbsp; noCursor">
														             <span className="headingText"></span></a>
														 </p></div>
									  		</div>
								  		</div>
							  		</div>
                        </li>

						<li data-nav-index="14" className="navlink lastNav lnHeight marB18">
							 <a href="" className="leftCategoriesProduct &nbsp;"><span className="catText blue-text"></span></a>
                        </li>
			            <input type="hidden" className="dp-info-collect" value="[ {'k2': '', 'k4': 'Mens Fashion'},  {'k2': '', 'k4': 'Womens Fashion'},  {'k2': '', 'k4': 'Home &amp; Kitchen'},  {'k2': '', 'k4': 'Toys, Kids Fashion &amp; more'},  {'k2': '', 'k4': 'Beauty, Health &amp; Daily Needs'},  {'k2': '', 'k4': 'Automotives'},  {'k2': '', 'k4': 'Mobile &amp; Accessories'},  {'k2': '', 'k4': 'Electronics'},  {'k2': '', 'k4': 'Sports, Fitness &amp; Outdoor'},  {'k2': '', 'k4': 'Computers &amp; Gaming'},  {'k2': '', 'k4': 'Books, Media &amp; Music'},  {'k2': '', 'k4': 'Hobbies'},  {'k2': '', 'k4': ''},  {'k2': '', 'k4': ''},  ]"/>
			</ul>
		</div>	
		</div>
   		 <div className="leftHead trendSearch" style={{}}>Trending Searches</div>
					<ul id="topsearches" className="trendSearches marB10" style={{display: "block"}}>
					<li>
							<a className="subDefaultLink">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2" style={{display: 'inline-block', verticalAlign: 'middle',paddingRight:'2px'}}>
									<circle cx="11" cy="11" r="8"/>
									<path d="m21 21-4.35-4.35"/>
								</svg>kitchen product
							</a>
						</li>
					<li>
							<a className="subDefaultLink" >
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2" style={{display: 'inline-block', verticalAlign: 'middle',paddingRight:'2px'}}>
									<circle cx="11" cy="11" r="8"/>
									<path d="m21 21-4.35-4.35"/>
								</svg>shoes for men
							</a>
						</li>
					<li>
							<a className="subDefaultLink" >
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2" style={{display: 'inline-block', verticalAlign: 'middle',paddingRight:'2px'}}>
									<circle cx="11" cy="11" r="8"/>
									<path d="m21 21-4.35-4.35"/>
								</svg>kurti set
							</a>
						</li>
					<li>
							<a className="subDefaultLink" >
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2" style={{display: 'inline-block', verticalAlign: 'middle',paddingRight:'2px'}}>
									<circle cx="11" cy="11" r="8"/>
									<path d="m21 21-4.35-4.35"/>
								</svg>sandal men
							</a>
						</li>
					<li>
							<a className="subDefaultLink" >
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2" style={{display: 'inline-block', verticalAlign: 'middle',paddingRight:'2px'}}>
									<circle cx="11" cy="11" r="8"/>
									<path d="m21 21-4.35-4.35"/>
								</svg>Sports Shoe man
							</a>
						</li>
					</ul>
                </div>
	</div>
    </>
  )
}
