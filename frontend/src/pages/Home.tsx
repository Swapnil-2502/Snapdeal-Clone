import { FooterBottom } from "../components/footer/FooterBottom"
import FooterTop from "../components/footer/FooterTop"
import { Carousel } from "../components/Home/Carousel"
import { LeftSideNavbar } from "../components/Home/LeftSideNavbar"
import { Poster } from "../components/Home/Poster"



const Home = () => {
  return (
    <> 
   
    <div id="content_wrapper">
      <LeftSideNavbar />
      <Carousel />
      <Poster />
    </div>
    
    <div className="mt-96">
      <div id="sdFooter">
        <FooterTop />
        <FooterBottom />
      </div>
    </div>
      
    </>
  )
}

export default Home