import { useEffect, useState } from "react"
import { SignIn } from "./Header/SignIn";
import { useCart } from "../contexts/CartContext";
import { type ProductData } from "../types/types";
import { useProductFilters } from "../contexts/ProductFilterContext";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const {cartItems,openCartModal} = useCart()
    const [isSticky, setIsSticky] = useState(false);
    const {setSearchKeyword,filters,setFilters} = useProductFilters()

    const [keyword, setKeyword] = useState("")
    const [, setResults] = useState<ProductData[]>([])

    const [showRecentSearches, setShowRecentSearches] = useState(false)
    const [showSearches, setShowSearches] = useState<string[]>([])

    const navigate = useNavigate()
    
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 1)
        }

        window.addEventListener('scroll',handleScroll)

        return () => (
            window.removeEventListener('scroll',handleScroll)
        )
    },[])

    useEffect(() => {
        const saved = localStorage.getItem('recentSearches')
        if (saved) {
            setShowSearches(JSON.parse(saved))
        }
    },[])

    const handleSearch = async (searchTerm: string) => {
        if(!searchTerm.trim()){
            setResults([])
            return;
        }

        const newRecentSearches = [searchTerm, ...showSearches.filter(s => s!= searchTerm)].slice(0,5)
        setShowSearches(newRecentSearches)
        localStorage.setItem("RecentSearches",JSON.stringify(newRecentSearches))

        setSearchKeyword(keyword)
        navigate("/products/search")

    }

    const clearSearches = () => {
        setShowSearches([])
        localStorage.removeItem("RecentSearches")
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFilters((prev) => ({...prev,type: ""}))
        handleSearch(keyword);
    };

    const handleInputFocus = () => {
        setShowRecentSearches(true)
    }

    const hanndleInputBlur = () => {
        setTimeout(() => {
            setShowRecentSearches(false)
        }, 200)
    }

  return (
    <>
    <div className={`headerBar reset-padding ${isSticky ? 'stickHeadNew' : '' }`}>
        
        <section className="homePageTopHooks-section dp-click-widgets">
            <div className="topHookContainer dp-widget header_wrapper homePageSection dp-fired" data-dpidt="prm" data-dpdit="h_lst" data-dpwlbl="Homepage Top Hook" data-dpcol="c" data-dpdat="prm_lst" data-dppos="1" data-dpid="prm_175673780233227117_6743_1756800596554">
                <span className="topHooks fastestDel lfloat fastestDelivery">India's leading online shopping destination</span>
                    <span className="hook-section rfloat">
                    <span className="topHooks hooksContents dp-widget-link " data-index="1">					
                        <div className="top-hooks-icon"></div>
                        <a href="" className="dp-widget-link hookLink">Our Blog </a>
                    </span>
                    <span className="topHooks hooksContents dp-widget-link helpCentrDiv" data-index="2">					
                            <div className="top-hooks-icon"></div>
                            <a href="/help" className="dp-widget-link hookLink">Help Center</a>
                    </span>
                    <span className="topHooks hooksContents dp-widget-link " data-index="3">					
                        <div className="top-hooks-icon"></div>
                        <a href="" className="dp-widget-link hookLink">Sell On Snapdeal</a>
                    </span>
                    <span className="topHooks hooksContents dp-widget-link " data-index="4">					
                        <div className="top-hooks-icon">
                            <span className="">
                                    <i className="customHeaderIcon"><img className="wooble" src="https://i4.sdlcdn.com/img/platinum09/downloadappicon2ndsep.png"/></i>
                            </span>
                        </div>
                        <a href="" className="dp-widget-link hookLink">Download App</a>
                    </span>
                </span>
                <input type="hidden" className="dp-info-collect" value="[ {'k2': 'https://impactatsnapdeal.com/', 'k4': 'Impact@Snapdeal'},  {'k2': 'http://www.snapdeal.com/offers/sd-hdfc-card', 'k4': 'Help Center'},  {'k2': 'https://sellers.snapdeal.com/', 'k4': 'Sell On Snapdeal'},  {'k2': 'http://www.snapdeal.com/offers/getsnapdealapp', 'k4': 'Download App'},  {'k2': 'https://www.snapdeal.com/offers/helpageindia', 'k4': 'Donate for elderly'},  ]"/>
            </div>
        </section>

        <div className="topBar  top-bar-homepage  top-freeze-reference-point">
            <div className="header_wrapper">
                
                <div className="logoWidth lfloat col-xs-3 reset-padding">
                    <a className="notIeLogoHeader" href="/" onClick={() => {
                        setFilters({...filters, type:"", minStars:"", sortby: ""}); setSearchKeyword("")
                        }}>
                        <img title="Snapdeal" className="notIeLogoHeader aspectRatioEqual sdHomepage cur-pointer" height="28" width="132" src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"/>
                    </a>
                    <a className="ieLogoHeader" href="/">
                        <img title="Snapdeal" className="ieLogoHeader aspectRatioEqual sdHomepage cur-pointer" height="28" width="132" />
                    </a>
                    <div className="menuIconBar hidden"><i className="sd-icon sd-icon-menu" style={{color: "rgb(255, 255, 255)"}}></i></div>
                </div>

                <div className="col-xs-14 search-box-wrapper" style={{paddingLeft: "15px"}}>
                    <div className="overlap"></div>
                    <form onSubmit={handleSubmit}>
                        <input autoComplete="off" name="keyword" type="text" className="col-xs-20 searchformInput keyword" id="inputValEnter" placeholder="Search products &amp; brands" onFocus={handleInputFocus} onBlur={hanndleInputBlur}  value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
                        
                        <button className="searchformButton col-xs-4 rippleGrey" >
                            <span className="searchTextSpan" style={{display: 'inline-flex', alignItems:'center', gap:"10px"}}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                                Search
                            </span>
                        </button>
                        <div className="searchAutoSuggstn">
                            {showRecentSearches && showSearches.length > 0 &&
                            <div className="topSearch-container autoSuggestor-container-shadow">
                                <div className="topsearch-suggestionBox">
                                    <ul className="topSearchCont recentSearchContainer">
                                        <div className="searchContainer recentSearches">
                                            <span className="topsearches recentSearc">Recent Searches</span>
                                            <span className="clearRecentSearches" onClick={clearSearches}>CLEAR<button style={{background: "none",border: "none",fontSize: "18px",color: "grey",cursor: "pointer", paddingLeft:'10px'}}>×</button></span>
                                        </div>
                                        {showSearches.map((search, index) => (
                                            <li key={index} className="recentCont" data-index="1">
                                                <div>
                                                    <span className="firstRecntDiv">
                                                        <a href="" className="subDefault recentLink">
                                                            <span className="keywrdText">{search}</span>
                                                            <span className="inText"></span>
                                                            <span className="highlight-srch-txt"></span>
                                                        </a>
                                                    </span>
                                                    <span className="secndRecntDiv hidden">
                                                        <i className="sd-icon sd-icon-delete-sign recentDel"></i>
                                                    </span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            }
                        </div>
                    </form>
                    
                    <div className="searchAutoSuggstn"></div>
                </div>

            <div className="col-xs-5 reset-padding header-right rfloat">
                <div className="cartContainer col-xs-11 reset-padding">
                    <div className="cartInner" onClick={()=>openCartModal()}>
                        <span className="cartTextSpan">Cart</span>
                        <i className="sd-icon "> 
                            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            {cartItems.length > 0 && 
                                <span className="cartQuantity">{cartItems.length}</span>
                            }
                        </i>
                    </div>
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