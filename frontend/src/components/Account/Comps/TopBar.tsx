
export const TopBar = () => {
  return (
    <>
        <div className="pageWrapper">
            <div className="comp comp-breadcrumb">
                <div id="breadCrumbWrapper" className="bread-crumb">
                    <div className="lfloat containerBreadcrumb">
                        <a className="bCrumbOmniTrack" href="https://www.snapdeal.com" >
                        <span>Home</span>
                        </a>
                    </div>
                    <div className="" id="breadCrumbWrapper2">
                        <span className="bSlash"> / </span>
                        <div className="containerBreadcrumb">
                            <a className="bCrumbOmniTrack">
                                <span>My Account</span>
                            </a>
                        </div>
                        <span className="bSlash"> / </span>
                        <div className="containerBreadcrumb">
                            <span className="active-bread" title="My Address">My Address</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
