import type { ProductData } from "../../../types/types"
import { ReviewRatings } from "./ReviewRatings"

interface ProductBottomProps {
    product: ProductData | null
}

export const ProductBottom: React.FC<ProductBottomProps> = ({product}) => {
    
  return (
    <>
    
    <div className="row pdp-two-col clearfix">
        <div className="col-xs-20 product-detail-card-left dp-click-widgets">
            <section className="pdp-section product-specs " id="prodDescCont">
                <div className="comp comp-product-specs reset-padding" id="productSpecs">
                
                    <div className="tabs clearfix">
                        <ul>
                            <li className="desc-tab tab activeTab" style={{fontSize:"16px"}}><a>Item Details</a></li>
                        </ul>
                    </div>

                    <div className="id-tab-container" id="tab-container">
                        <div className="tab-content activeTab">

                                {/* Highlights */}
                                <div className="spec-section highlightsTileContent expanded">

                                    <div className="spec-title-wrp">
                                        <h3 className="spec-title"><span className="headTitle">Highlights</span></h3>
                                    </div>

                                    <div className="spec-body p-keyfeatures">
                                        <ul className="dtls-list clear">
                                            {product?.highlights?.map((highligh,index)=>(
                                                <li key={index} className="col-xs-8 dtls-li">
                                                    <span className="list-cicrle-cont"><span className="list-circle"></span></span>
                                                    <span className="h-content">{highligh}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* Other Specification */}
                                <div className="spec-section expanded">
                                    <div className="spec-title-wrp">
                                        <h3 className="spec-title">
                                            <span className="headTitle">Other Specifications</span>
                                        </h3>
                                    </div>

                                    <div className="spec-body specifications">
                                        <div className="detailssubbox">
                                            <table width="100%" border={0} cellSpacing="0" cellPadding="0">
                                            <tbody><tr><td>
                                                <table width="100%" border={0} cellSpacing="2" cellPadding="0" className="product-spec">
                                                <tbody><tr><th colSpan={2}> Other Details</th></tr>
                                                <tr>
                                                <td width="20%">Country of Origin or Manufacture or Assembly</td>
                                                <td>{product?.otherSpecifications?.countryOfOrigin}</td>
                                                </tr>
                                                <tr>
                                                <td width="20%">Common or Generic Name of the <br/> commodity</td>
                                                <td>{product?.otherSpecifications?.genericName} </td>
                                                </tr>
                                                <tr>
                                                <td width="20%">Manufacturer's Name &amp; Address</td>
                                                <td> {product?.otherSpecifications?.manufacturerAddress}</td>
                                                </tr>
                                                <tr>
                                                <td width="20%">Packer's Name &amp; Address</td>
                                                <td> {product?.otherSpecifications?.packerAddress}</td>
                                                </tr>
                                                <tr>
                                                <td width="20%">Marketer's Name &amp; Address</td>
                                                <td> {product?.otherSpecifications?.marketerAddress}</td>
                                                </tr>
                                                <tr>
                                                <td width="20%">Importer's Name &amp; Address</td>
                                                <td> {product?.otherSpecifications?.importerAddress}</td>
                                                </tr>
                                                </tbody></table>
                                            </td></tr>
                                            </tbody></table>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* description */}
                                <div className="spec-section expanded">
                                    <div className="spec-title-wrp">
                                        <h3 className="spec-title">
                                            <span className="headTitle">Description</span>
                                        </h3>
                                    </div>
                                    <div className="spec-body">
                                        <div itemProp="description" className="detailssubbox">
                                            {product?.description}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="spec-section expanded">
                                    <div className="spec-title-wrp">
                                        <h3 className="spec-title">
                                            <span className="headTitle">Terms &amp; Conditions</span>
                                        </h3>
                                    </div>
                                    <div className="spec-body">
                                        <div className="detailssubbox">
                                            <p>{product?.termsAndConditions}</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>                        
                </div>
            </section>
            
            {/* Quick Links */}
            <section className="pdp-section" id="similarBlk">
                <div className="comp comp-similar-product-having">
                    <h2 className="section-head">Quick links</h2>
                    <ul className="clearfix">
                        <li className="col-xs-8">
                            <span className="greyText">Product Type: </span>
                            <a  title="Non Fiction Books">
                                <i>{product?.quickLinks.productType}</i>
                            </a>
                                
                        </li>
                        <li className="col-xs-8" itemProp="brand">
                            <span className="greyText">Brand: </span>
                            <a data-hidomntrack="RID=attribute_Brand_Rupa Publications India"  title="Rupa Publications India">{product?.quickLinks.brand}</a>
                        </li>
                    </ul>
                </div>
            </section>

            <ReviewRatings />
                                
            <section className="pdp-section" data-nav-label="Seller Details" id="sellerBlk">
                <div className="sellerInformationContainer comp comp-seller-info-widget" itemProp="seller">
                    <div className="clearfix">
                        <h2 className="section-head lfloat">Seller Details</h2>
                        <p className="h3 rfloat"><a rel="nofollow" className="sellerPageUrl btn" >View Store</a></p>
                    </div>
                    
                    <hr className="p-divider-horz"/>
                    <div className="sellerInformationInnerContainer clearfix">
                        <div className="seller-icon-cont col-xs-3" style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="56" height="56" 
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0.5" 
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M3 7h18" />
                                    <path d="M21 7l-1 8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2L3 7" />
                                    <path d="M7 7V4a1 1 0 0 1 1-1h2v4H7zM14 7V3h2a1 1 0 0 1 1 1v3" />
                                    <path d="M3 7l2-3h14l2 3" />
                                </svg>
                            </div>
                        </div>
                            <div className="col-xs-21 padL20">
                                <div className="sellerNameContainer h2 blackText">
                                    <a  className="blackText"  rel="nofollow">
                                        <span>{product?.sellerDetails?.manufacturer}</span>
                                    </a>
                                </div>
                                
                                <div className="clearfix">
                                
                                    <span className="sellerRatingContainer reset-padding lfloat marR5">
                                        <span className="rating-stars lfloat">
                                            <div className="grey-stars">
                                                <span className="filled-stars" style={{width:`${(Number(product?.sellerDetails?.totalReviews) / 5)*100}%`}}></span>
                                            </div>
                                        </span>
                                        <span className="lfloat overallratingdiv fnt-13 marL5">({product?.sellerDetails?.totalReviews})</span>
                                    </span>
                                </div>
                            </div>
                
                            <div className="sellerInfoThirdColumn col-xs-24">
                                <h5 className="bottomMargin13 greyFont">Expand your business to millions of customers</h5>
                                <div className="disp-inlineblk marL10">
                                    <a className="blueLink omniSellonSnap">Sell this item on Snapdeal</a>
                                </div>
                            </div>
            
                    </div>
                </div>
	        </section>

        </div>
    </div>
    </>
  )
}
