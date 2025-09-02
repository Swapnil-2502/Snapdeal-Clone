import { FooterCopyRight } from "./footerbottom/FooterCopyRight"
import { FooterLowerContent } from "./footerbottom/FooterLowerContent"
import { FooterMiddleBottom } from "./footerbottom/FooterMiddleBottom"
import { FooterMiddleTop } from "./footerbottom/FooterMiddleTop"


export const FooterBottom = () => {
  return (
    <>
        <div className="middleContent-footer">
            <FooterMiddleTop />
            <FooterMiddleBottom />
            <FooterLowerContent />
            <FooterCopyRight />
        </div>
    </>
  )
}
