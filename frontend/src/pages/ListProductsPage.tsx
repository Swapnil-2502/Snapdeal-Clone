import { FooterCopyRight } from "../components/footer/footerbottom/FooterCopyRight"
import { FooterMiddleBottom } from "../components/footer/footerbottom/FooterMiddleBottom"
import { FooterMiddleTop } from "../components/footer/footerbottom/FooterMiddleTop"
import FooterTop from "../components/footer/FooterTop"
import { ListProduct } from "../components/Products/ListProducts/ListProduct"


export const ListProductsPage = () => {
  return (
    <>
        <div id="content_wrapper">
            <ListProduct />
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
