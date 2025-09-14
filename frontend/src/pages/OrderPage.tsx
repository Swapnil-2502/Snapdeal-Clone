import { TopBar } from "../components/Account/Comps/TopBar"
import { OrderDetail } from "../components/Account/OrderDetail"
import { FooterCopyRight } from "../components/footer/footerbottom/FooterCopyRight"
import { FooterMiddleBottom } from "../components/footer/footerbottom/FooterMiddleBottom"
import { FooterMiddleTop } from "../components/footer/footerbottom/FooterMiddleTop"
import FooterTop from "../components/footer/FooterTop"


export const OrderPage = () => {
  return (
    <>
        
        <TopBar />
        <div id="content_wrapper" className="comp-content-wrapper materialDesignRevamp" style={{backgroundColor: "white"}}>
            <div className='pageWrapper pad_15_top'>
                <OrderDetail />
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
