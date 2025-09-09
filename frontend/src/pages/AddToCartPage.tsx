import { FooterCopyRight } from "../components/footer/footerbottom/FooterCopyRight"
import { FooterMiddleBottom } from "../components/footer/footerbottom/FooterMiddleBottom"
import { FooterMiddleTop } from "../components/footer/footerbottom/FooterMiddleTop"
import FooterTop from "../components/footer/FooterTop"
import { Tocart } from "../components/Tocart"


export const AddToCartPage = () => {
  return (
    <>  
        <div id="content_wrapper">
            <Tocart />
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
