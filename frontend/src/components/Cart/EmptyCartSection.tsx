import { Link } from "react-router-dom"
import { useCart } from "../../contexts/CartContext"


export const EmptyCartSection = () => {
    const {closeCartModal} = useCart()
  return (
    <>
        <div className="empty-cart-wrapper">
	        <div className="cart-heading clearfix">
	            <h3>Shopping Cart is empty!</h3>
	            <span className="icon-font-grey-size24 close-popup-icon" data-omniturename="cartCrossedNew">
                    <Link to={"/"}>
	                    <button style={{background: "none",border: "none",fontSize: "44px",color: "black",cursor: "pointer", paddingBottom:"28px", paddingRight:"10px"}} onClick={()=>closeCartModal()} >×</button>
                    </Link>
	            </span>
	        </div>
	        <div className="cart-categories-container">
	            <p className="text-center browse-category-text">Browse Categories</p>
	            <div className="cart-categories-list-wrapper row">
	                <ul>
                            <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/appliances" title="Appliances">Appliances</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/kids-clothing" title="Baby &amp; Kids">Baby &amp; Kids</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/beauty" title="Beauty &amp; Personal Care">Beauty &amp; Personal Care</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/books" title="Books">Books</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/cameras" title="Cameras &amp; Accessories">Cameras &amp; Accessories</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/daily-needs" title="Daily Needs">Daily Needs</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/home-furnishing" title="Furnishing">Furnishing</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="http://www.snapdeal.com/products/furniture" title="Furniture">Furniture</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/gaming" title="Gaming">Gaming</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/jewelry" title="Jewellery">Jewellery</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/home-kitchen" title="Kitchenware">Kitchenware</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/computers" title="Laptops &amp; Computers">Laptops &amp; Computers</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/men-apparel" title="Men's Clothing">Men's Clothing</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/mobiles-accessories" title="Mobile Accessories">Mobile Accessories</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/mobiles" title="Mobile Phones">Mobile Phones</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/dietary-supplements" title="Nutrition &amp; Suppliments">Nutrition &amp; Suppliments</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/mobiles-tablets" title="Tablets &amp; Accessories">Tablets &amp; Accessories</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/electronic" title="TV, Audio &amp; Video">TV, Audio &amp; Video</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/women-ethnicwear" title="Women's Ethnic Wear">Women's Ethnic Wear</a>
	                            </li>
	                        <li className="col-xs-6">
	                                <a href="https://www.snapdeal.com/products/women-apparel" title="Women's Western Wear">Women's Western Wear</a>
	                            </li>
                    </ul>
	            </div>
	        </div>
		
			
	        <div className="cart-buy-now-wrapper">
	            <Link to={"/"} className="btn btn-xl rippleWhite cart-shopping-button col-xs-7" onClick={()=>closeCartModal()}>START SHOPPING NOW</Link>
                <div className="cart-security-footer">
                    <span className="safe-secure"> 
                        <i className="sd-icon sd-icon-security-checked"></i>
                        Safe and Secure Payments
                    </span> 
                    <span className="trustpay"> 
                        <i className="sd-icon sd-icon-payprotection"></i>
                        100% Payment Protection, Easy Returns Policy
                    </span>
                </div>
	        </div>
	
	    </div>
    </>
  )
}
