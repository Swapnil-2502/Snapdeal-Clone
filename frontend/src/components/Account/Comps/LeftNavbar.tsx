import { NavLink } from "react-router-dom";

export const LeftNavbar = () => {


  return (
    <>

        <div className="leftWrapper">
            <div className="myAccount">MY ACCOUNT</div>
            <div className="shadowcenter">
                <div className="voucher-left">
                    <ul>
                        <li>
                            <div className="userAccountInfo clear" style={{marginBottom:"60px"}}>
                                <div className="lfloat">
                                    <span className="userAccountImg" style={{paddingTop: '0px'}}> 
                                        <i className="sd-icon "><svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i>
                                    </span>
                                </div>
                                <div className="lfloat userInfo">
                                    <span><strong id="loggedInUserName" title="Swapnil Hajare">Swapnil Hajare</strong></span><br/>
                                    <span className="userEmailid" id="loggedInUserEmail" title="hajareswapnil.2502@gmail.com">hajareswapnil.2502@gmail.com</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <i className="iconLeft"></i>ORDERS
                            <ul>
                                <li id="myOrd" className="myAccountLi">
                                    <div className="myorders myAccountInnerDiv" >
                                        <NavLink to={`/myaccount/myorders`} id="myOrder" className="myAccountAnchor" style={({isActive}) => isActive ? {color: "rgb(228, 0, 70)"}: undefined}>Orders</NavLink>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <i className="iconLeft iconProfile"></i>PROFILE
                            <ul>
                                <li id="dotAcSA" className="dotAccountSavedAddressesLi">
                                    <div className="dotaccountSavedAddresses dotAccountSavedAddressesInnerDiv"><NavLink to={`/myaccount/savedAddresses`} id="dotAccountSavedAddressesLi" className="dotAccountSavedAddressesAnchor"  style={({isActive}) => isActive ? {color: "rgb(228, 0, 70)"}: undefined}>Saved Addresses</NavLink></div>
                                </li>
                                
                                <li id="dotAcSC" className="dotAccountSavedCardsLi">
                                    <div className="dotaccountSavedCards dotAccountSavedCardsInnerDiv"><a id="dotAccountSavedCards" className="dotAccountSavedCardsAnchor" href="https://www.snapdeal.com/userProfile/savedCards">Saved Cards</a></div>
                                </li>

                                <li id="dotAcCP" className="dotAccountChangePasswordLi">
                                    <div className="dotaccountChangePassword dotAccountChangePasswordInnerDiv"><a id="dotAccountChangePassword" className="dotAccountChangePasswordAnchor" href="https://www.snapdeal.com/changePassword">Change Password</a></div>
                                </li>
                            </ul>
                        </li>
                        
                        <li><i className="iconLeft iconPay"></i>PAYMENTS
                            <ul>
                                <li id="mySd" className="myAccountLi">
                                <div className="mysdcash myAccountInnerDiv">
                                
                                </div>
                                </li>
                                <li id="myEGV" className="myAccountLi">
                                <div className="myEGV myAccountInnerDiv">
                                <a id="myGV" className="myAccountAnchor" href="https://www.snapdeal.com/myEGiftVoucher">E-Gift Voucher Balance</a>
                                </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>       
        </div>

    </>
  )
}
