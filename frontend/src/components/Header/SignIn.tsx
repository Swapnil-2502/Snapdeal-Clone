import { useEffect, useState } from "react"
import { LoginRegister } from "../AuthForm/LoginRegister";
import { SignUp } from "../AuthForm/SignUp";
import { VerifyOtp } from "../AuthForm/VerifyOtp";
import { type AuthStep } from "../../types/types";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";



export const SignIn = () => {
    const {storedUser , updateUserData,logout, isAuthenticated} = useAuth()
    const [isHovered, setIsHovered] = useState(false);
    const [showLoginRegister, setShowLoginRegister] = useState(false);
    const [currentStep , setCurrentStep] = useState<AuthStep>('login-register')

    useEffect(() => {
            if(showLoginRegister) {
                document.body.style.overflow = "hidden";
            }
            else{
                document.body.style.overflow = "";
            }
    
            return () => {
                document.body.style.overflow = "";
            };
        },[showLoginRegister])

    const handleOpenLoginRegister = () => {
        setShowLoginRegister(true);
    }

    const handleCloseLoginRegister = () => {
        setShowLoginRegister(false);
        setCurrentStep('login-register')
        
        updateUserData({email:"",phone:"",name:"",dob:"",password:""})

    }

    const handleNextStep = (step: AuthStep) => {
        setCurrentStep(step)
    }

  return (
    <>
        <div className="myAccountTab accountHeaderclassName col-xs-13 reset-padding">
            <div className={`accountInner ${isHovered ? 'accountHeadColor' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                <span className="accountUserName col-xs-12 reset-padding">{isAuthenticated && storedUser ? storedUser.name : "Sign In"}</span>
                <span className="accountUserImg col-xs-9">
                    <img className="hidden imgUser" />
                    <i className="sd-icon"><svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></i>
                </span>
                <i className="sd-icon sd-icon-menu2"></i>
                <div className={`dropdownWrapper ${isHovered ? '' : 'hard-hidden'} `}>
                    {isAuthenticated ? (
                        <div className="dropdownAccount">
                            <div className="accountList">
                                <ul>
                                    <li><Link to={"/myaccount/myorders"}><i className="order-icon footerIconsImg"></i>Orders</Link></li>
                                    {/* <li><a href="https://www.snapdeal.com/mysdcash" className="sd-information"><i className="sd-cash-icon footerIconsImg"></i><span className="sd-cash">SD Cash</span><div className="sd-balance"></div></a></li> */}
                                    <li><a><i className="gift-icon footerIconsImg"></i>E-Gift Voucher</a></li>
                                    <li className="accountInfoNonLoggedIn logoutNew"><a href="/" className="accountBtn rippleWhite sign logout-account" 
                                        onClick={()=>{
                                            logout()
                                        }}>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    ):(
                        <div className="dropdownAccountNonLoggedIn">
                            <div className="accountList">
                                <ul>
                                    <li><a href=""><i className="account-icon footerIconsImg"></i>Your Account</a></li>
                                    <li><a href=""><i className="order-icon footerIconsImg"></i>Your Orders</a></li>
                                    {/* <li><a href="https://www.snapdeal.com/mysdcash"  className="sd-information"><i className="sd-cash-icon footerIconsImg"></i>SD Cash</a></li> */}
                                </ul>
                            </div>
                            <div className="accountInfoNonLoggedIn">
                                <p className="newUser"><span>If you are a new user</span></p>
                                <span className="newUserRegister" onClick={handleOpenLoginRegister}>Register</span>
                                <span className="accountBtn btn rippleWhite" onClick={handleOpenLoginRegister}><a href="#" onClick={(e) => e.preventDefault()}>login</a></span>
                            </div>
                        </div>
                    )}
                    
                    
                </div>
            </div>
        </div>
        <div id="signin_box" className="iframeSignin">
           
                {showLoginRegister && 
                    <div id="login-register-modal" className="userAuthIcons">
                        <ul className="listAuthModal">
                            <li className="mngorder">
                            <i className="userAuthIcons"></i>
                            <h4>MANAGE YOUR ORDERS</h4>
                            <p>Track orders, manage cancellations &amp; returns.</p>
                            </li>
                            <li className="offrupdate">
                            <i className="userAuthIcons"></i>
                            <h4>AWESOME OFFERS UPDATES FOR YOU</h4>
                            <p>Be first to know about great offers and save.</p>
                            </li>
                        </ul>                    
                    
                        <div className="userAuth-card" style={{marginTop: "300px"}}>
                            {currentStep === 'login-register' && 
                                <LoginRegister 
                                    onClose = {handleCloseLoginRegister}
                                    onNext = {(nextStep:AuthStep) => handleNextStep(nextStep)} 
                                />
                            }
                            {currentStep === 'signup' &&
                                <SignUp 
                                    onClose = {handleCloseLoginRegister} 
                                    onNext= {(nextStep: AuthStep) => handleNextStep(nextStep)}
                                />
                            }
                            {currentStep === 'verify-otp' && 
                                <VerifyOtp onClose={handleCloseLoginRegister} />
                            }
                        </div>
                    </div>
                }
            
        </div>
    </>
  )
}
