import { useState, type FormEvent } from "react"
import { useAuth } from "../../contexts/AuthContext"
import type { AuthStep } from "../../types/types"

interface LoginRegisterProps{
  onClose: () => void
  onNext: (nextStep: AuthStep) => void
}

export const LoginRegister = ({onClose, onNext}: LoginRegisterProps) => {
    const {checkEmail} = useAuth()
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const validEmail = (e: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());


    const handleSubmit = async (e:FormEvent) => {
      e.preventDefault()

      if(isSubmitting) return

      setIsSubmitting(true)

      try{
        const res = await checkEmail(email)
  
        if(res.purpose === 'register'){
            onNext('signup')
        }
        else if(res.purpose === 'login'){
            onNext('verify-otp')
        }
      }
      catch(error){
          console.error("Email verification failed:", error)
      }
      finally{
        setIsSubmitting(false)
      }
      
    }

    return (
      <>
          
          <div className="rfloat closepopup" id="close-pop">
              <button style={{background: "none",border: "none",fontSize: "34px",color: "#cdcece",cursor: "pointer",}} onClick={onClose}>×</button>
          </div>
          <div className="login-register-common">
              <header>login/sign up on snapdeal</header>
              <p className="subHead marB20">Please provide your Email to Login/ Sign Up on Snapdeal</p>
              <form id="commonView" onSubmit={handleSubmit}>	
                  <input className={`col-xs-24 ${ validEmail(email) ? "" : "error" }`} type="text" placeholder="Email" data-ismobileonly="false" name="username" id="userName" onChange={(e) => setEmail(e.target.value)} disabled={isSubmitting}/>
                  <label id="userName-error" className="error" style={validEmail(email) ? {display:"none"} : {}}>Please enter a valid email</label>
                  <input type="text" value="Fix IE bug" className="hidden ghost-input"/>

                  <button className="btn col-xs-24 btn-large btn-skyblue continueBtn marT20 marB30" id="checkUser" disabled={!validEmail(email)}>
                    {isSubmitting ? (
                          "Sending OTP..."
                        ): (
                            "Continue"
                        )
                    }
                  </button>
              </form>
          </div>
    
      </>
    )
}
