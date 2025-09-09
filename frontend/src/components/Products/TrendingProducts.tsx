import { useEffect, useState } from "react"
import type { ProductData } from "../../types/types"
import axios from "../../api/axios"
import { Link } from "react-router-dom";

export const TrendingProducts = () => {
    const [products, setProducts] = useState<ProductData[] | null>(null)
    const [currIndex, setCurrIndex] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get("/product")
            setProducts(res.data.products)
        }

        fetchProducts()
        
    },[])

    const generateSlug = (title: string) => {
        return title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').substring(0, 60); 
    }

    const handlePrev = () => {
        if(products && products.length > 0) setCurrIndex((prev) => (prev - 1 + (products.length/2) ) % (products.length/2))
    }

    const handleNext = () => {
        if(products && products.length > 0) setCurrIndex((prev) => (prev + 1) % (products.length/2))
    }

  return (
    <>
    <div id="centerCardWidgets" className="clearfix centerCardAfterLoadWidgets padT20 centerCard-section dp-click-widgets" data-widgetlen="10" data-adtechinstance="1">
        <section className="homePageSection dp-widget sliderHomeWidget trendingNowWidget dp-fired">
          
          <div className="widgetHead sectnDiv animScroll">
            <h2 className="trendProds widgetLabelHead">TRENDING PRODUCTS</h2>
          </div>

            <div className="bx-wrapper" style={{maxWidth: "1160px", margin: "0px auto"}}> 
                <div className="bx-viewport" style={{width: "100%", overflow: "hidden", position: "relative", height: "398px"}}>
                    <button className="carousel-btn prev" onClick={handlePrev}>‹</button>
                    <button className="carousel-btn next" onClick={handleNext}>›</button>
                    <div className="trendingData mainTempDiv sectnDiv animScroll" style={{width: "1960%", position: "relative", left: `${-currIndex * 248}px`}}>
                    {products?.map((product, index) => {
                        const slug = generateSlug(product.title)
                        return (
                        <div key={index} className="trendingProd product-relative dp-widget-link col-xs-5 favDp" data-index="1" data-pog="634235191285" data-supc="" style={{float: "left", listStyle: "none", position: "relative", width: "248px"}}>
                            <Link to={`/product/${slug}/${product._id}`} className="product-card dp-widget-link"  data-pogid="634235191285" data-hidomntrack="3">
                                <div className="product-img">
                                <img className="wooble" src={product.images[0]} />
                                </div>
                                <div className="stats-container posRelative">			   
                                    <div className="product_name">{product.title}</div> 
                                    <div className="clearfix rating marT8 ">
                                    <div className="rating-stars ">
                                        <span className="rating-stars lfloat">
                                            <div className="grey-stars">
                                                <span className="filled-stars" style={{width:`${(Number(product?.avgRating) / 5)*100}%`}}></span>
                                            </div>
                                        </span>
                                    </div>
                                </div> 
                                <div className="product_price">
                                <div className="lfloat marR10 marB5">
                                    <span className="discount-price strike">₹{product.mrp}</span>
                                    <span className="mrp" style={{paddingLeft: "5px"}}>₹{product.price}</span>
                                </div>
                                <div className="product_disc">{Math.round(((product.mrp - product.price) /product.mrp) * 100) }% OFF</div>
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
    </>
  )
}
