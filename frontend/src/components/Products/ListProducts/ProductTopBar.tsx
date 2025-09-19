import type { ProductData } from "../../../types/types"

interface ProductTopBarProps{
    product: ProductData
}

export const ProductTopBar: React.FC<ProductTopBarProps> = ({product}) => {
   
  return (
    <>
        <div className="col-xs-24 reset-padding comp-breadcrumb clear">
            <div id="breadCrumbWrapper" className="bread-crumb">
                <div className="lfloat containerBreadcrumb">
                        <a className="bCrumbOmniTrack hashAdded" href="/">
                        <span>Home</span>
                        </a>
                </div>
                <div className="" id="breadCrumbWrapper2">
                    <span className="bSlash"> / </span>
                    <div className="containerBreadcrumb">
                        <a className="bCrumbOmniTrack hashAdded" >
                            <span>{product?.type}</span>
                        </a>
                    </div>
                    <span className="bSlash"> / </span>
                    <div className="containerBreadcrumb">
                        <a className="bCrumbOmniTrack hashAdded" >
                            <span>{product?.category}</span>
                        </a>
                    </div>
                    {product?.subcategory && 
                    <>
                        <span className="bSlash"> / </span>
                        <div className="containerBreadcrumb">
                            <span className="active-bread" title={product?.subcategory}>{product?.subcategory}</span>
                        </div>
                    </>
                    }
                </div>
        
            </div>


        </div>
    </>
  )
}
