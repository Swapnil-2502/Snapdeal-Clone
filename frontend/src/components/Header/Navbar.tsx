import { useEffect, useState } from "react"
import { LeftSideNavbar } from "../Home/LeftSideNavbar"
import { useLocation } from "react-router-dom"


const Navbar = () => {
    const [hoverNavbar, setHoverNavbar] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const location = useLocation()

    useEffect(() => {
        
        if (location.pathname === "/") {
            const handleScroll = () => {
                const scrollThreshold = 700
                setIsVisible(window.scrollY > scrollThreshold)
            }
            
            window.addEventListener('scroll', handleScroll)
            handleScroll() 
            
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        } else {
            setIsVisible(true)
        }
    }, [location.pathname]) 

    
    if (!isVisible) {
        return null
    }


    const handleMouseEnter = () => {
        setHoverNavbar(true)
    }

    const handleMouseLeave = () => {
        setHoverNavbar(false)
    }

  return (
    <div className="menuIconBar"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
        <div style={{background: hoverNavbar ? "white":"none",width:"40px",height:"42px",position: "relative",display:'flex',alignItems:'center',justifyContent:'center',transform: "translate(0, -12px)"}}>
            <span className="" style={{ color: hoverNavbar ? "red": "white", fontSize: "28px", fontWeight: "bold", bottom: '-10px', position: "absolute",  top: "50%", transform: "translateY(-50%)", lineHeight: "0"}}>☰</span>
        </div>
        
        {hoverNavbar && (
            <div style={{ position: "absolute", top: "100%",  right: "0", zIndex: 1000}}>
                <LeftSideNavbar />
            </div>
            )} 
    </div>
  )
}

export default Navbar