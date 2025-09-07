import { useState } from "react"
import { LoginRegister } from "../AuthForm/LoginRegister";
import { SignUp } from "../AuthForm/SignUp";
import { VerifyOtp } from "../AuthForm/VerifyOtp";
import { type AuthStep } from "../../types/types";
import { useAuth } from "../../contexts/AuthContext";



export const SignIn = () => {
    const {updateUserData} = useAuth()
    const [isHovered, setIsHovered] = useState(false);
    const [showLoginRegister, setShowLoginRegister] = useState(false);
    const [currentStep , setCurrentStep] = useState<AuthStep>('login-register')

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
                <span className="accountUserName col-xs-12 reset-padding">Sign In</span>
                <span className="accountUserImg col-xs-9">
                    <img className="hidden imgUser" />
                    <i className="sd-icon sd-icon-user"></i>
                </span>
                <i className="sd-icon sd-icon-menu2"></i>
                <div className={`dropdownWrapper ${isHovered ? '' : 'hard-hidden'} `}>
                    <div className="dropdownAccount hidden">
                        <div className="accountList">
                            <ul>
                                <li><a href="https://www.snapdeal.com/myorders"><i className="order-icon footerIconsImg"></i>Orders</a></li>
                                <li><a href="https://www.snapdeal.com/mysdcash" className="sd-information"><i className="sd-cash-icon footerIconsImg"></i><span className="sd-cash">SD Cash</span><div className="sd-balance"></div></a></li>
                                <li><a href="https://www.snapdeal.com/myEGiftVoucher"><i className="gift-icon footerIconsImg"></i>E-Gift Voucher</a></li>
                                <li className="accountInfoNonLoggedIn logoutNew"><a href="https://www.snapdeal.com/logout" className="accountBtn rippleWhite sign logout-account">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dropdownAccountNonLoggedIn">
                        <div className="accountList">
                            <ul>
                                <li><a href="https://www.snapdeal.com/myorders"><i className="account-icon footerIconsImg"></i>Your Account</a></li>
                                <li><a href="https://www.snapdeal.com/myorders"><i className="order-icon footerIconsImg"></i>Your Orders</a></li>
                                {/* <li><a href="https://www.snapdeal.com/mysdcash"  className="sd-information"><i className="sd-cash-icon footerIconsImg"></i>SD Cash</a></li> */}
                            </ul>
                        </div>
                        <div className="accountInfoNonLoggedIn">
                            <p className="newUser"><span>If you are a new user</span></p>
                            <span className="newUserRegister" onClick={handleOpenLoginRegister}>Register</span>
                            <span className="accountBtn btn rippleWhite" onClick={handleOpenLoginRegister}><a href="#" onClick={(e) => e.preventDefault()}>login</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="signin_box" className="iframeSignin">
            <div id="login-register-modal" className="userAuthIcons">
                {showLoginRegister && 
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
                }
            </div>
        </div>
    </>
  )
}
