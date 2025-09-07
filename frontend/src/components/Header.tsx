import { useEffect, useState } from "react"
import { SignIn } from "./Header/SignIn";


const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 1)
        }

        window.addEventListener('scroll',handleScroll)

        return () => (
            window.removeEventListener('scroll',handleScroll)
        )
    },[])

  return (
    <>
    <div className={`headerBar reset-padding ${isSticky ? 'stickHeadNew' : '' }`}>
        
        <section className="homePageTopHooks-section dp-click-widgets">
            <div className="topHookContainer dp-widget header_wrapper homePageSection dp-fired" data-dpidt="prm" data-dpdit="h_lst" data-dpwlbl="Homepage Top Hook" data-dpcol="c" data-dpdat="prm_lst" data-dppos="1" data-dpid="prm_175673780233227117_6743_1756800596554">
                <span className="topHooks fastestDel lfloat fastestDelivery">India's leading online shopping destination</span>
                    <span className="hook-section rfloat">
                    <span className="topHooks hooksContents dp-widget-link " data-index="1">					
                        <div className="top-hooks-icon"></div>
                        <a href="http://blog.snapdeal.com/" className="dp-widget-link hookLink">Our Blog </a>
                    </span>
                    <span className="topHooks hooksContents dp-widget-link helpCentrDiv" data-index="2">					
                            <div className="top-hooks-icon"></div>
                            <a href="/help" className="dp-widget-link hookLink">Help Center</a>
                    </span>
                    <span className="topHooks hooksContents dp-widget-link " data-index="3">					
                        <div className="top-hooks-icon"></div>
                        <a href="https://sellers.snapdeal.com/" className="dp-widget-link hookLink">Sell On Snapdeal</a>
                    </span>
                    <span className="topHooks hooksContents dp-widget-link " data-index="4">					
                        <div className="top-hooks-icon">
                            <span className="">
                                    <i className="customHeaderIcon"><img className="wooble" src="https://i4.sdlcdn.com/img/platinum09/downloadappicon2ndsep.png"/></i>
                            </span>
                        </div>
                        <a href="http://www.snapdeal.com/offers/getsnapdealapp" className="dp-widget-link hookLink">Download App</a>
                    </span>
                </span>
                <input type="hidden" className="dp-info-collect" value="[ {'k2': 'https://impactatsnapdeal.com/', 'k4': 'Impact@Snapdeal'},  {'k2': 'http://www.snapdeal.com/offers/sd-hdfc-card', 'k4': 'Help Center'},  {'k2': 'https://sellers.snapdeal.com/', 'k4': 'Sell On Snapdeal'},  {'k2': 'http://www.snapdeal.com/offers/getsnapdealapp', 'k4': 'Download App'},  {'k2': 'https://www.snapdeal.com/offers/helpageindia', 'k4': 'Donate for elderly'},  ]"/>
            </div>
        </section>

        <div className="topBar  top-bar-homepage  top-freeze-reference-point">
            <div className="header_wrapper">
                <div className="logoWidth lfloat col-xs-3 reset-padding">
                <a className="notIeLogoHeader" href="https://www.snapdeal.com">
                    <img title="Snapdeal" className="notIeLogoHeader aspectRatioEqual sdHomepage cur-pointer" height="28" width="132" src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"/>
                </a>
                <a className="ieLogoHeader" href="https://www.snapdeal.com">
                    <img title="Snapdeal" className="ieLogoHeader aspectRatioEqual sdHomepage cur-pointer" height="28" width="132" />
                </a>
                <div className="menuIconBar hidden"><i className="sd-icon sd-icon-menu" style={{color: "rgb(255, 255, 255)"}}></i></div>
            </div>

            <div className="col-xs-14 search-box-wrapper" style={{paddingLeft: "15px"}}>
                <div className="overlap"></div>
                <input autoComplete="off" name="keyword" type="text" className="col-xs-20 searchformInput keyword" id="inputValEnter" placeholder="Search products &amp; brands" value=""/>
                <div className="inputValEntered hidden"></div>
                <button className="searchformButton col-xs-4 rippleGrey">
                    <span className="searchTextSpan">
                        <i className="sd-icon sd-icon-search-under-catagory lfloat"></i>Search
                    </span>
                    {/* <i className="sd-icon sd-icon-search"></i>  */}
                </button>
                <div id="topsearches" className="hidden">
                    <div className="topSearch-container">
                        <div className="topsearch-suggestionBox">
                            <ul className="topSearchCont recentSearchContainer hidden">
                                <div className="searchContainer recentSearches">
                                    <i className="sd-icon sd-icon-clock"></i>
                                    <span className="topsearches recentSearc">Recent Searches</span>
                                    <span className="clearRecentSearches">CLEAR<i className="sd-icon sd-icon-delete-sign"></i></span>
                                </div>
                            </ul>
                            <ul className="topSearchCont trendingSearchContainer ">
                                <div className="searchContainer">
                                    <i className="sd-icon sd-icon-android-trending-up-512px iconTrend"></i>
                                    <span className="topsearches">Trending Searches</span>
                                </div>
                                <li data-index="1">
                                    <div>
                                        <a className="subDefault" href="https://www.snapdeal.com/search?clickSrc=top_searches&amp;keyword=kitchen product&amp;categoryId=0&amp;vertical=p&amp;noOfResults=20&amp;SRPID=topsearch">
                                                kitchen product</a>
                                    </div>
                                </li>
                                <li data-index="2">
                                    <div>
                                        <a className="subDefault" href="https://www.snapdeal.com/search?clickSrc=top_searches&amp;keyword=shoes for men&amp;categoryId=0&amp;vertical=p&amp;noOfResults=20&amp;SRPID=topsearch">
                                                shoes for men</a>
                                    </div>
                                </li>
                                <li data-index="3">
                                    <div>
                                        <a className="subDefault" href="https://www.snapdeal.com/search?clickSrc=top_searches&amp;keyword=kurti set&amp;categoryId=0&amp;vertical=p&amp;noOfResults=20&amp;SRPID=topsearch">
                                                kurti set</a>
                                    </div>
                                </li>
                                <li data-index="4">
                                    <div>
                                        <a className="subDefault" href="https://www.snapdeal.com/search?clickSrc=top_searches&amp;keyword=sandal men&amp;categoryId=0&amp;vertical=p&amp;noOfResults=20&amp;SRPID=topsearch">
                                                sandal men</a>
                                    </div>
                                </li>
                                <li data-index="5">
                                    <div>
                                        <a className="subDefault" href="https://www.snapdeal.com/search?clickSrc=top_searches&amp;keyword=sport shoe men&amp;categoryId=0&amp;vertical=p&amp;noOfResults=20&amp;SRPID=topsearch">
                                                sport shoe men</a>
                                    </div>
                                </li>
                                <li data-index="6">
                                    <div>
                                        <a className="subDefault" href="https://www.snapdeal.com/search?clickSrc=top_searches&amp;keyword=saree&amp;categoryId=0&amp;vertical=p&amp;noOfResults=20&amp;SRPID=topsearch">
                                                saree</a>
                                    </div>
                                </li>
                                <li data-index="7">
                                    <div>
                                        <a className="subDefault" href="https://www.snapdeal.com/search?clickSrc=top_searches&amp;keyword=tshirt&amp;categoryId=0&amp;vertical=p&amp;noOfResults=20&amp;SRPID=topsearch">
                                                tshirt</a>
                                    </div>
                                </li>
                                <li data-index="8">
                                    <div>
                                        <a className="subDefault" href="https://www.snapdeal.com/search?clickSrc=top_searches&amp;keyword=wall stickers&amp;categoryId=0&amp;vertical=p&amp;noOfResults=20&amp;SRPID=topsearch">
                                                wall stickers</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="searchAutoSuggstn"></div>
                    {/* <div className="cross-btn hidden">
                        <i className="sd-icon sd-icon-delete-sign"></i>
                        <p>Close</p>
                    </div> */}
            </div>

            <div className="col-xs-5 reset-padding header-right rfloat">
                <div className="cartContainer col-xs-11 reset-padding">
                    <div className="cartInner">
                        <span className="cartTextSpan">Cart</span>
                        <i className="sd-icon sd-icon-cart-icon-white-2"><span className="cartQuantity hidden">0</span></i>
                    </div>
                </div>
                <div className="cartProductInfoModal hidden">
                    <span className="cartModalArrow"></span>
                    <div className="overFlowMoreItems">
                        <div className="cartProduct lfloat">
                            <img className="lazy-load cartProductImg" data-src=""/>
                        </div>
                        <div className="cartProductInfo rfloat">
                            <p className="cartItemHeading">Item(s) Added To cart</p>
                            <p className="cartProductInfoName"></p>
                            <p>Qty.<span className="cartInfoQty">0</span></p>
                        </div>
                    </div>
                    <div id="cartViewBtn" className="btn viewAllBtn cartViewAllBtn">VIEW ALL</div>
                </div>
                <SignIn />
            </div>
            <div className="onlyforhelpcenter hidden row" style={{clear: "both"}}>
                <div className="col-xs-3 logoWidth title lfloat">
                    <a href="/" style={{textDecoration: "none"}}>
                        <span style={{borderRight: "1px solid #e0e1e1", paddingRight: "10px", fontSize:"25px"}}><i className="sd-icon sd-icon-home" style={{color:"white"}}></i></span>
                    </a>
                    <a href="/helpcenter" style={{textDecoration: "none"}}>
                        <span style={{ marginLeft: "10px", color:"white", fontSize:"20px"}}> Help Center </span>
                    </a>
                </div>
                <div className="col-xs-18">
                    <div className="row banner_text">How can we help you?</div>
                        <div id="faq_search_Form" className="row faq_autosuggest_form">
                            <input className="col-xs-21 faq_autosearch_text"  placeholder="Please type your query here. e.g. I want to track my order." id="faq_search_text" name="faq_search_text" type="text"/>
                            <button id="faq_delete_button" className="col-xs-3 faq_autosearch_button hidden">
                                <span id="faq_deleteicon"><i className="iconcolor sd-icon sd-icon-delete-sign "></i></span>
                            </button>
                            <button id="faq_search_button" className="col-xs-3 faq_autosearch_button">
                                <i className="faq_search_arrow_icon"></i>
                            </button>
                            <div id="faq_top_faqs" className="col-xs-24 reset-padding faq_top_faqs hidden">
                                <div className="autoSuggestor-container-shadow">
                                    <div className="faqsearch-suggestionBox ">
                                        <ul id="faq_autosuggest_searchlist" className="no-bullet-list">

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cartToastMsg" id="cartToastMsg" style={{display : "none"}}>
                    <div className="cTMSArrow">
                        <span></span>
                    </div>
                    <div className="cTMSProductInfo">
                        <div className="cTMSucces">
                            </div>
                        <div className="cTMError">
                            <p>Something went wrong. Please refresh the page and try again.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header