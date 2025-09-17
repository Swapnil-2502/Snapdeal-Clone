import type React from "react"
import {type ProductData } from "../../../types/types"
import { Link } from "react-router-dom"

interface ProductsProps {
    products: ProductData[]
}

export const RightProducts: React.FC<ProductsProps> = ({products}) => {


  return (
    <>


    <div className="col-xs-19 reset-padding">
			<div className="comp comp-right-wrapper ref-freeze-reference-point clear">

				<div className="category-name-wrapper clearfix ">
					<h1 className="category-name"  data-category="Shirts For Men">Shirts For Men</h1>
          <span className="category-name category-count">({products.length} Items)</span>
						
							
				</div>

        <div className="product-row js-product-list centerCardAfterLoadWidgets dp-click-widgets">

   
            <section className="js-section clearfix dp-widget dp-fired">
                {products.map((product,index)=>(
                <div key={index} className="col-xs-6  favDp product-tuple-listing js-tuple ">
                  
                  <div className="product-tuple-image ">
                    
                    <Link to={`/product/${product.title}/${product._id}`} className="dp-widget-link hashAdded" >
                          
                        <picture className="picture-elem">
                            
                            <img className="product-image wooble" title={product.title} src={product.images[0]}/>

                        </picture>
                            
                    </Link>
                  
                  </div>

                  <div className="product-tuple-description ">
        
                      <div className="product-desc-rating ">

                          <Link to={`/product/${product.title}/${product._id}`} className="dp-widget-link noUdLine hashAdded" >
                            
                            <p className="product-title" title={product.title}>{product.title}</p>
                            <div className="product-price-row clearfix">
                                <div className="lfloat marR10">
                                  <span className="lfloat product-desc-price strike ">Rs. {product.mrp}</span>
                                  <span className="lfloat product-price">Rs.  {product.price}</span>
                                </div>
                              <div className="product-discount">
                                  <span>64% Off</span>
                              </div>
                            </div>
                            
                            <div className="clearfix rating av-rating">
                                <div className="rating-stars ">
                                  <div className="grey-stars"></div>
                                  <div className="filled-stars" style={{width:"74.0%"}}></div>
                                </div>
                                <p className="product-rating-count">({product.totalRatings})</p>
                            </div>
                          </Link>
                      </div>
          
                              
                      
                  </div>
                </div>))}
            </section>
        </div>

			</div>
		</div>

    
    </>
  )
}
