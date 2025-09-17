import { useEffect, useState } from "react"
import type { ProductData } from "../../types/types"
import axios from "../../api/axios"
import { Link } from "react-router-dom";


export const Products = () => {

    const [products, setProducts] = useState<ProductData[] | null>(null)
    const [currIndex, setCurrIndex] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get("/product")
            setProducts(res.data.products.slice(0,10))
        }

        fetchProducts()
        
    },[])

    const handlePrev = () => {
        if(products && products.length > 0) setCurrIndex((prev) => (prev - 1 + (products.length/2 +1)) %  (products.length/2 +1))
    }

    const handleNext = () => {
         if(products && products.length > 0) setCurrIndex((prev) => (prev + 1) % (products.length/2 +1))
    }

    const generateSlug = (title: string) => {
        return title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').substring(0, 60); 
    }

    
  return (
    <>
    <section className="home-page-right-section animScroll">
    <div className="trendSpace shiftTrend dp-click-widgets animScroll">
        <section className="posRelative dp-widget inPlaceTrend ceeWidget homePageSection sliderHomeWidget dp-fired">
          <div className="widgetHead sectnDiv animScroll">
            <h2 className="widgetLabelHead" id="head-products_c_widget_cxe-0">Recently viewed products</h2>
          </div>
          <div className="bx-wrapper" style={{maxWidth: "1160px", margin: "0px auto"}}>
            <div className="bx-viewport" style={{width: "100%", overflow: "hidden", position: "relative", height: "398px"}}>
                <button className="carousel-btn prev" onClick={handlePrev}>‹</button>
                <button className="carousel-btn next" onClick={handleNext}>›</button>
              <div className="clearfix sectnDiv mainTempDiv animScroll" style={{width: "1960%", position: "relative", left: `${-currIndex * 242}px`}}>
                
                {products?.map((product,index)=> {
                  const slug = generateSlug(product.title)
                  return (
                    <div key={index} className="product-relative ceeProd dp-widget-link js-omni width20 favDp" data-index="0" data-pog="618557195054" data-supc="SDL607276947" style={{float: "left", listStyle: "none", position: "relative", width: "232px"}}>
                    
                    <Link to={`/product/${slug}/${product._id}`} className="product-card pp dp-widget-link "  data-cat="undefined" data-bucket="undefined" data-pog="618557195054" rel="noopener noreferrer" data-index="0">
                        <div className="product-img"> 
                        <img className="wooble" src={product.images[0]} alt="Portronics Power Bank" /> 
                        </div> 
                        <div className="stats-container posRelative">  
                        <div className="product_name">{product.title}</div>                                   
                        <div className="clearfix rating marT8 " data-rating={product.avgRating} data-noofratings={product.totalRatings}>         
                            <span className="rating-stars lfloat">
                                <div className="grey-stars">
                                    <span className="filled-stars" style={{width:`${(Number(product?.avgRating) / 5)*100}%`}}></span>
                                </div>
                            </span>
                        </div>   
                        <div className="product_price">    
                            <div className="lfloat marR10 marB5">   
                            <span className="discount-price strike">₹{product.mrp}</span>           
                            <span className="mrp" style={{paddingLeft: "5px"}}>₹{product.price}</span>  
                            </div>             
                            <div className="product_disc"> {Math.round(((product.mrp - product.price) /product.mrp) * 100)}% OFF </div>   
                        </div>          
                        </div> 
                    </Link>
                    
                    </div>)
                })}


              </div>
            </div>
          </div>
        </section>
    </div>
    </section>
    </>
  )
}
