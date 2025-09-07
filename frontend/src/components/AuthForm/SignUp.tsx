import { useEffect, useState, type FormEvent } from "react"
import { useAuth } from "../../contexts/AuthContext"
import type { AuthStep } from "../../types/types"

interface SignupProps{
  onClose: () => void
  onNext: (nextStep: AuthStep) => void
}

export const SignUp = ({onClose, onNext}: SignupProps) => {

    const {userData, updateUserData, register} = useAuth()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [phoneError, setPhoneError] = useState(true)
    const [nameError, setNameError] = useState(true);
    const [dobError, setDobError] = useState(true);
    const [passwordError, setPasswordError] = useState(true);
    const [canSubmit, setCanSubmit] = useState(false);

    useEffect(() => {
        const isPhoneValid = !phoneError && validPhoneComplete(userData.phone);
        const isNameValid = !nameError && userData.name.trim().length > 1;
        const isDobValid = ValidDOBFormat(userData.dob);
        const isPasswordValid = userData.password.length > 4;

        setCanSubmit(isPhoneValid && isNameValid && isDobValid && isPasswordValid);
    },[userData.phone, userData.name, userData.dob, userData.password, phoneError, nameError])

    const validPhone = (e: string) => /^\d{0,10}$/.test(e.trim())
    
    const validPhoneComplete = (phone: string) => /^\d{10}$/.test(phone.trim());

    const ValidDOBFormat = (dob: string) => /^\d{2}\/\d{2}\/\d{4}$/.test(dob);
    

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;

        if (validPhone(input)) {
            updateUserData({phone: input})
            setPhoneError(!validPhoneComplete(input))
        }
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value
        updateUserData({name: name})
        setNameError(name.trim().length <= 2)
    }

    const handleDOBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const dob = e.target.value
        updateUserData({dob:dob})
        setDobError(!ValidDOBFormat(dob))
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value
        updateUserData({password: password})
        setPasswordError(password.length <=4)
    }


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if(isSubmitting) return

        setIsSubmitting(true)

        try{

            const res = await register(); 
            console.log("FROM SIGNUP->",res)    
            onNext('verify-otp')
        }
        catch(error){
            console.error("Registration failed:", error)
        }
        finally{
            setIsSubmitting(false)
        }

    }

  return (
    <>
        <div className="signup-card">
            <div className="screen1">
                <header>Sign Up
                    <button style={{background: "none",border: "none",fontSize: "34px",color: "#cdcece",cursor: "pointer", paddingLeft: "190px"}} onClick={onClose}>×</button>
                </header>
                <p className="subHead marB20">Create an account on Snapdeal</p>
                <form id="userSignupForm" onSubmit={handleSubmit}>

                    <div id="usernameTemplate">
                        <div className="number-prefix">
                            <span>+91</span>
                            <input className={`${phoneError ? "error":""}`} type="tel" id="j_number" maxLength={10} name="j_number" placeholder="Mobile Number" value={userData.phone} onChange={handlePhoneChange} disabled={isSubmitting}/>
                            <label id="userName-error" className="error" style={phoneError ? {}: {display:"none"}} >Please enter a valid phone</label>
                        </div>
                        <div id="j_username_new_placeholder">
                            <input type="text" id="j_username_new" name="j_username" value={userData.email} placeholder="Email" readOnly/>
                        </div>		
                    </div>
    
                    <div id="j_name_placeholder">
                        <input className={`${nameError ? "error" : ""}`} type="text" id="j_name" name="j_name" placeholder="Name" value={userData.name} onChange={handleNameChange} disabled={isSubmitting}/>
                        <label id="userName-error" className="error" style={nameError ? {}: {display:"none"}} >Please enter your name</label>
                    </div>

                    <div id="userDobTemplate">
                        <div className="dob-ct">
                            <span className="label">DOB</span>
                            <input className={`${dobError ? "error" : ""} `}type="text" id="j_dob" maxLength={10} name="j_dob" placeholder="25/11/1990" value={userData.dob} onChange={handleDOBChange} disabled={isSubmitting} data-date-end-date="-1d"/>
                            <label id="userName-error" className="error" style={dobError ? {}: {display:"none"}} >Please enter your DOB</label>
                        </div>
                    </div>	


                    <input className={`input-icon-padding ${passwordError ? "error": ""}`} type="password" id="j_password" name="j_password" placeholder="Password" value={userData.password} onChange={handlePasswordChange} disabled={isSubmitting}/>
                    
                    <i className="togglePwdIcon userAuthIcons iconEyeShow  iconEyeHide" data-pass="j_password" data-screen="register"></i>

                    <p className="password-message">Password should have a minimum of 4 characters</p>
                    <button className="continueBtn btn col-xs-24 btn-large btn-skyblue marT20" id="userSignup" disabled={!canSubmit}>
                        {isSubmitting ? (
                            "Sending OTP..."
                        ):(
                            'Continue'
                        )
                    }
                    </button>
                </form>
    
                <div className="tnc-signup clearfix">/
                    By registering, I agree to 
                    <a className="tnc-a" href="#" target="_blank" onClick={(e) => e.preventDefault()}>Terms &amp; Conditions</a>
                </div>
            </div>

        </div>
    </>
  )
}
