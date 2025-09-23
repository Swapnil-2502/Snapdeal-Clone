import type React from "react";
import type { CartItem, ProductData } from "../../../types/types";
import { useState } from "react";
import { useCart } from "../../../contexts/CartContext";
import { Link } from "react-router-dom";
import { usePayment } from "../../../contexts/PaymentContext";


interface ProductTopProps {
    product: ProductData | null;
}

export const ProductTop: React.FC<ProductTopProps> = ({product}) => {
    const {openPayment} = usePayment()
    const [activeIndex, setActiveIndex] = useState(0);
    const [actionError, setActionError] = useState('');
    const {addItem} = useCart()

    const isOutOfStock = (product?.stockAvailable === 0)

    const createCartItem = (): CartItem | null => {
        if (!product) return null
        
        return {
            _id: product._id,
            title: product.title,
            price: product.price,
            quantity: 1,
            imageURL: product.images[0]
        }
    }

    const handleAddToCart = () => {
        if (isOutOfStock) { setActionError('Cannot buy: no stock is available'); return; }
        setActionError('')
        
        const cartItem = createCartItem()
        if(cartItem) addItem(cartItem)
        
    }

    const handleBuyNow = () => {
        if (isOutOfStock) { setActionError('Cannot buy: no stock is available'); return; }
        setActionError('')

        const cartItem = createCartItem()
        if(cartItem) localStorage.setItem("BuyNowProduct", JSON.stringify(cartItem))
        openPayment()
    }

    return (
    <>
        <div className="comp-breadcrumb">
			<div id="breadCrumbWrapper" className="bread-crumb">
		        <div className="lfloat containerBreadcrumb">
                    <a className="bCrumbOmniTrack" href="https://www.snapdeal.com">
                    <span>Home</span>
                    </a>
			    </div>
		        <div className="" id="breadCrumbWrapper2">
			            <span className="bSlash"> / </span>
                        {product?.type && 
                            <div className="containerBreadcrumb">
                                <a className="bCrumbOmniTrack" aria-label={product.type} >
                                    <span>{product.type}</span>
                                </a>
                            </div>
                        }
                        <span className="bSlash"> / </span>
                        {product?.category && 
                            <div className="containerBreadcrumb">
                                        <a className="bCrumbOmniTrack" aria-label={product.category}>
                                            <span>{product.category}</span>
                                        </a>
                            </div>
                        }
                        <span className="bSlash"> / </span>
                        {product?.subcategory && 
                        <div className="containerBreadcrumb">
                            <a className="bCrumbOmniTrack" aria-label={product.subcategory} >
                                <span>{product.subcategory}</span>
                            </a>
                        </div>}
                        <span className="bSlash"> / </span>
                        {product?.title && 
                        <div className="containerBreadcrumb">
                            <span className="active-bread" title={product.title}>{product.title}</span>
                        </div>}
                </div>
            </div>
        </div>

        <section className="pdp-section clearfix">
            <div className="product-detail clearfix col-xs-24 reset-padding favDp">
            
                <div className="col-xs-10 reset-padding left-card-height-cache">
                    <div className="pdp-comp comp-product-carousel left-imagepanel" style={{height: "100%"}}>
                
                        <div className="col-xs-3">
                            <div className="bx-wrapper" style={{maxWidth: "50px", margin: "0px auto"}}>
                                <div className="bx-viewport" style={{ width: "100%", overflow: "hidden", position: "relative", height: "329.562px", marginTop: "15px" }}>
                                    <div id="bx-pager-left-image-panel" style={{ width: "auto", position: "relative", transitionDuration: "0s", transform: "translate3d(0px, 0px, 0px)" }}>
                                        {product?.images.map((image,index) => (
                                            <a key = {index} onMouseEnter={() => setActiveIndex(index)} data-slide-index="0" href="" className="active" style={{ float: "none", listStyle: "none", position: "relative", width: "72.9531px", marginBottom: "8px", cursor: "pointer", border: index === activeIndex ? "2px solid black" : "2px solid transparent"  }}>
                                                <img title={product.title} alt={product.title} src={image} style={{filter: isOutOfStock ? 'grayscale(100%)' : 'none',opacity: isOutOfStock ? 0.6 : 1}}/>
                                            </a>
                                        ))}
                
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-21 reset-padding height-inherit">
                            <div className="bx-wrapper" style={{maxWidth: "100%"}}>
                                <div className="bx-viewport" style={{width: "100%", overflow: "hidden", position: "relative", height: "484.609px"}}>
                                    <ul id="bx-slider-left-image-panel" className="clearfix  height-inherit" style={{width: "auto", position: "relative"}}>
                                        {product?.images.map((image,index)=>(
                                            <li key={index} className="" style={{ float: "none", listStyle: "none", position: "absolute", width: "552.688px", zIndex: index === activeIndex ? 50 : 0 , display: index === activeIndex ? "block": "none" }}>
                                                <img title={product.title} data-slidenum="0" className="cloudzoom" data-bigsrc="https://g.sdlcdn.com/imgs/j/u/h/Portronics-POR-1219-10000-mAh-SDL607276947-1-9ecb6.jpg" src={image} data-cloudzoom="zoomImage: 'https://g.sdlcdn.com/imgs/j/u/h/Portronics-POR-1219-10000-mAh-SDL607276947-1-9ecb6.jpg',zoomPosition: 3, zoomSizeMode: 'image'" style={{userSelect: "none",filter: isOutOfStock ? 'grayscale(100%)' : 'none',opacity: isOutOfStock ? 0.6 : 1}}/>
                                                {isOutOfStock && 
                                                <div style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',backgroundColor: 'rgba(0, 0, 0, 0.7)',color: 'white',padding: '8px 16px',fontSize: '2rem',fontWeight: 'bold',letterSpacing: '1px',borderRadius: '4px',zIndex: 10,}}>
                                                    OUT OF STOCK
                                                </div>}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>

                <div className="col-xs-14 right-card-zoom reset-padding">
                    <div className="pdp-comp comp-product-description clearfix">
                        <div className="pdp-elec-topcenter-inner  layout">
                            
                            <div className="row">
                                <div className="col-xs-22">
                                    <h1 itemProp="name" title={product?.title} className="pdp-e-i-head">
                                            {product?.title}</h1>
                                </div>
                                <div className="col-xs-24 reset-padding rBelowName">
                                                        
                                    <div className="pdp-e-i-ratereviewQA marT10">
                                        <div className="pdp-e-i-ratings" itemProp="aggregateRating" >
                                            <div data-ratings="4.4">
                                                <div className="pdp-main-ratings av-rating">
                                                    <span className="rating-stars lfloat">
                                                        <div className="grey-stars">
                                                            <span className="filled-stars" style={{width:`${(Number(product?.avgRating) / 5)*100}%`}}></span>
                                                        </div>
                                                    </span>
                                                </div>
                                                <span className="avrg-rating">({product?.avgRating})</span>   
                                                <span className="total-rating showRatingTooltip">{product?.totalRatings} Ratings</span>
                                            
                                                <span className="numbr-review">
                                                <a style={{cursor: "pointer"}}>{product?.totalReviews} Reviews</a>
                                                </span>
                                                
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>

                            <hr className="p-divider-horz"></hr>

                            <div className="container-fluid reset-padding" itemProp="offers" itemRef="sellerBlk">
                                <div id="buyPriceBox" className="elecPriceTile buyNowBlock row">
                                    <div className="row reset-margin">
                                    <div className="col-xs-14 reset-padding padL8">
                                        <div className="disp-table">
                                        <div className="pdp-e-i-PAY-r disp-table-cell lfloat">
                                            <div className="pdpCutPrice ">
                                            <div className="normalText">MRP&nbsp;&nbsp;</div>₹&nbsp;{product?.mrp}<div className="normalText">&nbsp;&nbsp;(Inclusive of all taxes)</div>
                                                <meta itemProp="priceCurrency" content="INR"/>
                                            </div>
                                            <span className="pdp-final-price">₹&nbsp;<span className="payBlkBig" itemProp="price">{product?.price}</span></span>
                                            <span className="pdpDiscount ">
                                            <span>
                                                {product?.mrp !== undefined && product?.price !== undefined
                                                    ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
                                                    : ""}
                                            </span>% OFF
                                            </span>
                                            <div className="">Inclusive of all taxes</div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grey-contnr clearfix ">
                                                
                                <div className="prod-attr-cont clearfix" id="product-attr-options">
                                    
                                    <div className="row prod-attr-tile clearfix reset-margin" data-level="0" id="attribute-select-0">
                                        <div className="p-tile-head col-xs-3 product-attr-head">Color</div>
                                        <div className="col-xs-21">
                                            <div className="thumbnail-attr-value">
                                                <div className="attr-value-cont">
                                                    <div className="pull-left">
                                                        <div className="attr-thumbnail attr-prod-cls  attr-selected  prod-attr"  data-modal="" data-sold="false" data-attr-type="thumbnail" data-index="0" data-supc="SDL607276947">
                                                            <div className="attr-img">
                                                            <img className="" src={product?.images[0]} style={{filter: isOutOfStock ? 'grayscale(100%)' : 'none',opacity: isOutOfStock ? 0.6 : 1}}/>
                                                            </div>
                                                            {/* <div className="attr-val ellipses-cls">Black</div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {product?.sizes && product.sizes.length > 0 && 
                                    <div className="row prod-attr-tile clearfix reset-margin  clsSizeAttr ">
                                        <div className="p-tile-head col-xs-3 product-attr-head"> Size</div>
                                        
                                        <div className="col-xs-21">
                                            <div className="squared-attr-value">
                                                <div className="attr-value-cont sqt-attr-val">
                                                    {product?.sizes.map((size, index) => (
                                                    <div key={index} className="pull-left">
                                                        <div className="attr-squared attr-prod-cls pdpAttr  prod-attr" >
                                                            <div className="attr-val">{size}</div>
                                                        </div>
                                                    </div>
                                                    ))}

                                                </div>
                                            </div>
                                        </div>

                                    </div>}
                                </div>

                                <div className="pdp-comp ">
                                    <div className="row reset-padding">
                                        <div className="col-xs-21">
                                            <div className="container-fluid buy-button-container reset-padding" id="pdp-buynow-rp">
                                                <div className="row marL0">
                                                <div className="col-xs-6 btn btn-xl rippleWhite buyLink buyNow marR15  " data-state="Buy Now" onClick={handleBuyNow}>
                                                    <span className="intialtext">buy now</span>
                                                </div>
                                                <Link to={isOutOfStock ? '#' : `/cart/addTocart/${product?._id}`} className="mmm col-xs-6 btn btn-xl btn-theme-secondary rippleWhite buyLink" onClick={handleAddToCart} style={{borderColor: "rgb(51, 51, 51)",background: "rgb(51, 51, 51)"}}>
                                                    <span className="intialtext">add to cart</span>
                                                </Link>
                                                </div>
                                            </div>
                                            {actionError && 
                                                <div style={{ marginTop: 10, color: '#e74c3c', fontWeight: 600 }}>
                                                    {actionError}
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="row marT10 marB10 delivery-opts">
                                    <div className="p-tile-head col-xs-3">
                                    Delivery
                                    </div>
                                    <div className="col-xs-21 padL3per">
                                        <div className="check-avail-container marB10 " id="pdp-pincode-rp">
                                            <div className="check-avail-pin-inner col-xs-24 reset-padding">
                                                <div className="checkPinHead clearfix col-xs-9 reset-padding ">
                                                    <input className="lfloat" type="text" id="pincode-check" maxLength={6} placeholder="Enter pincode" value=""/>
                                                    <div className="col-xs-7 btn btn-xs btn-theme-secondary bordr-rad0" id="pincode-check-bttn" data-supc="SDL607276947">
                                                        <span>check</span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="highlightsTileContent highlightsTileContentTop clearfix">
								<div className="p-keyfeatures kf-below-name">
                                    <ul className="clearfix">
                                        {product?.highlights?.slice(0,5).map((highlight,index)=> (
                                            <li key={index} className="col-xs-8 reset-padding" title={highlight}><span className="list-circle"></span>
                                                <span className="h-content">{highlight}</span>
                                            </li>
                                        ))}
                                        <li className="col-xs-8 reset-padding" title="View all item details"><span className="list-circle" style={{visibility:"hidden"}}></span>
                                                <span className="h-content viewAllDetails"><a href="javascript: void(0)">View all item details</a></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="container-fluid reset-padding marT5  policyDiv ">
                                <div className="pdp-grante-cont marT15">
                                   
                                    <span className="pe-head"> 7 Days Easy Returns </span>
                                    <div id="policyEngineGoldText">
                                        <span className="pe-innerText" title=" We assure easy return of purchased items within 7 days of delivery. ">
                                                We assure easy return of purchased items within 7 days of delivery. </span>
                                        <a className="know-more">Know More</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
