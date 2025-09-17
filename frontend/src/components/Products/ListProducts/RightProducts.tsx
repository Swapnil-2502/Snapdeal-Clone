import type React from "react"
import {type ProductData } from "../../../types/types"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useProductFilters } from "../../../contexts/ProductFilterContext"

interface ProductsProps {
    products: ProductData[]
}

export const RightProducts: React.FC<ProductsProps> = ({products}) => {
  const [showDropDown, setShowDropDown] = useState(false)
  const [selectedSort, setSelectedSort] = useState('Price Low To High')
  const {filters,setFilters} = useProductFilters()
  const options = ['priceLowHigh', 'priceHighLow', 'discount'];
  const Useroptions = ['Price Low to High', 'Price High to Low', 'Discount'];

  const handleSelect = (value: string, index: number) => {
    setFilters((prev) => ({...prev,sortby:value}))
    setSelectedSort(Useroptions[index])
    setShowDropDown(false)
  }


  return (
    <>


    <div className="col-xs-19 reset-padding">
			<div className="comp comp-right-wrapper ref-freeze-reference-point clear">

        

				<div className="category-name-wrapper clearfix ">
					<h1 className="category-name">Shirts For Men</h1>
          <span className="category-name category-count">({products.length} Items)</span>
          
          <div className="sorting-sec animBounce">
            <div className="sort-drop clearfix" onClick={() => setShowDropDown(prev => !prev)}>
              <span className="sort-label">Sort by:</span>
              <div className="sort-selected">{selectedSort}</div>
              <i className="sd-icon sort-arrow ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </i>
              
            </div>
            
            <ul className={`sort-value ${showDropDown ? " " : "hidden"}`} style={{zIndex: "17"}}>
              {Useroptions.map((opt,index) => (
                <li key={opt} className={`search-li ${selectedSort === opt ? "sort-active": ""}`} onClick={() => handleSelect(options[index],index)}>
                  <span className="arrow hidden"></span>
                  {opt}</li>
              ))}
              
            </ul>
          </div>
							
				</div>

        <div className="filters-top-selected">
          <div className="filters">
            
            {filters.minStars && 
            <div className="navFiltersPill" onClick={() => setFilters({...filters,minStars:""}) }>Customer Rating: 
              <a data-key="avgRating|Customer Rating" data-value="4.0" className="clear-filter-pill  ">{filters.minStars}.0<span className="sd-icon sd-icon-delete-signs marL5"></span></a>
            </div>
            }

            {filters.color && 
            <div className="navFiltersPill" onClick={() => setFilters({...filters,color:""}) }>Color: 
              <a data-key="Color_s|Color" data-value={filters.color} className="clear-filter-pill  ">{filters.color}<span className="sd-icon sd-icon-delete-signs marL5"></span></a>
            </div>
            }

            {filters.minPrice!== 100 && filters.maxPrice!==10000 && 
            <div className="navFiltersPill" onClick={() => setFilters({...filters,minPrice:100,maxPrice:10000})}>Price: 
              <a data-key="Price|Price" data-value="9" className="clear-filter-pill">Rs. {filters.minPrice} - Rs. {filters.maxPrice}<span className="sd-icon sd-icon-delete-signs marL5"></span></a>
            </div>
            }

          </div>
          
          {filters.color && filters.minStars && filters.minPrice !== 100 && filters.maxPrice !== 10000 && 
          <div className=" clr-btn-Advfilters " onClick={() => setFilters({...filters,color:"",minStars:"",minPrice:100,maxPrice:10000})}>
            <button className="clear-all-filters  btn-theme-secondary btn-line btn">Clear All </button>
          </div>
          }
          
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
                                  <span>{Math.round( ((product.mrp - product.price) / product.mrp) * 100 )}% Off</span>
                              </div>
                            </div>
                            
                            <div className="clearfix rating av-rating">
                                <div className="rating-stars ">
                                  <div className="grey-stars">
                                    <span className="filled-stars" style={{width:`${(Number(product?.avgRating) / 5)*100}%`}}></span>
                                  </div>
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
