import { useEffect, useState } from "react"


export const Carousel = () => {

    const banners = [
        {
            title: "BOB CARD",
            img: "https://g.sdlcdn.com/imgs/k/z/2/Snapdeal_New_Website_home_page_8-73a30.png"
        },
        {
            title: "India @100 : Envisioning Tomorrow’s Economic Powerhouse",
            img: "https://g.sdlcdn.com/imgs/k/x/z/DESKTOPBOOKBANNER-83d8b.jpg"
        },
        {
            title: "Sports Footwear",
            img: "https://g.sdlcdn.com/imgs/k/x/g/sportshoesbanner03july-85e66.jpg"
        },
        {
            title: "ETHNIC WEAR",
            img: "https://g.sdlcdn.com/imgs/k/s/i/ethnicwear-ef4d9.jpg"
        },
        {
            title: "KITCHENWARE",
            img: "https://g.sdlcdn.com/imgs/k/s/i/cookware-bc6ef.jpg"
        }
    ]

    const [currIndex, setCurrIndex] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrIndex((prev) => (prev + 1) % banners.length)
        },7000)
        return () => clearInterval(interval);
    },[banners.length])

    const handlePrev = () => {
        setCurrIndex((prev) => (prev - 1 + banners.length) % banners.length);
    }

    const handleNext = () => {
        setCurrIndex((prev) => (prev + 1) % banners.length);
    }

  return (
    <>
    <section className="home-page-right-section animScroll" style={{marginTop: "140px"}}> 
		<section className="home-page-right-card dp-click-widgets">
			<div className="main-banner-wrapper adtechBannerHomePage dp-widget posRelative dp-fired" style={{maxWidth: "1140px"}}>
				<button className="carousel-btn prev" onClick={handlePrev}>‹</button>
                <button className="carousel-btn next" onClick={handleNext}>›</button>
				<div className="banner-area top-banner-area" id="top-banner" style={{transition: "transform 1s ease", transform: `translateX(-${currIndex * 1140}px)`, width: "8640px"}}>
                    {banners.map((banner,index) => (
                        <div className="banner-image platBanner " key={index} style={{width: "1140px", display: "block"}}>
                            <a className="dp-widget-link"  title={banner.title}  data-hidomntrack="HID=TopBanner_1_BOB CARD" style={{ backgroundImage: `url(${banner.img})`, backgroundSize: "cover", }}><div className="white-overlay"></div></a>
                        </div>
                    ))}
				</div>
				<div className="banner-link bar">
                    {banners.map((banner, index) => (
                         <div key={index} className="banner-item active">{banner.title}</div>
                    ))}
                </div>
            </div>
		</section>
	</section>
    </>
  )
}
