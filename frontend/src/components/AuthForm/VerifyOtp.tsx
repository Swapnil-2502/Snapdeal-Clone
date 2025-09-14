import { useState, type FormEvent } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom";


export const VerifyOtp = ({onClose}:{onClose: () => void}) => {
    const {userData, verifyOtp} = useAuth()
    const [error,setError] = useState(false);
    const [otp, setOtp] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async(e: FormEvent) => {
        try{
            setError(false)
            e.preventDefault()
            const result = await verifyOtp(userData.email,otp)
            if(result.user.role === 'admin'){
                navigate('/admin')
            }
            else{
                navigate('/')
            }
            onClose()
        }
        catch{
            setError(true)
        }
        
    }

  return (
    <div className="loginEmailUpgrade-card">
        {error && <div className="authMsg authError aligncenter">Invalid OTP</div>}
        <div className="screen2">
            <div className="flex">
                <header>Sign Up on snapdeal
                    <button style={{background: "none",border: "none",fontSize: "34px",color: "#cdcece",cursor: "pointer", paddingLeft: "70px"}} onClick={onClose}>×</button>
                </header>
            </div>
            <p className="fnt-12 txt-center color-slate" style={{marginTop: "40px"}}>Please enter verification code (OTP) sent to:</p>
            <div className="verifyText email fnt-12 txt-center color-slate" id="verifyEmailUC">{userData.email}</div>
            <form id="registerOtp" onSubmit={handleSubmit}>
                <div className="txt-center">
                    <input className="otpValueCode" type="text" placeholder="Code" name={otp} onChange={(e)=>setOtp(e.target.value)} autoComplete="off" maxLength={6}/>
                </div>
                <input type="text" value="Fix IE bug" className="hidden ghost-input"/>
                <div className="blue-color txt-center marT5">
                    <a href="javascript:void(0);" className="resendOTP" id="resendOtpRegister" data-user="mobile">Resend OTP</a>
                </div>
                <button className="continueBtn btn col-xs-24 btn-large btn-skyblue marT20 marB20" id="registerUser">continue</button>
            </form>
        </div>
    </div>
  )
}
