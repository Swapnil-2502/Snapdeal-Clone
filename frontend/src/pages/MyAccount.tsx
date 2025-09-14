import { Outlet } from "react-router-dom"
import { LeftNavbar } from "../components/Account/Comps/LeftNavbar"
import { TopBar } from "../components/Account/Comps/TopBar"
import { FooterCopyRight } from "../components/footer/footerbottom/FooterCopyRight"
import { FooterMiddleBottom } from "../components/footer/footerbottom/FooterMiddleBottom"
import { FooterMiddleTop } from "../components/footer/footerbottom/FooterMiddleTop"
import FooterTop from "../components/footer/FooterTop"



export const MyAccount = () => {
  return (
    <>
      <TopBar />
      <div id="content_wrapper" className="comp-content-wrapper materialDesignRevamp" style={{backgroundColor: "white"}}>
        <div className='pageWrapper pad_15_top'>
          <LeftNavbar />
          <Outlet />
        </div>
      </div>

      <div id="sdFooter">
        <FooterTop />
        <div className="middleContent-footer">
          <FooterMiddleTop />
          <FooterMiddleBottom />
          <FooterCopyRight />
        </div>
      </div>
    </>
  )
}
