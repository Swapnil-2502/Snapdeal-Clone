import { useState, useEffect } from "react";

interface PincodeProps{
  index: number;
  currentIndex: number;
  onNext: () => void;
}

export const Pincode = ({index,currentIndex,onNext}:PincodeProps) => {

  const [pincode, setPincode] = useState("");
  const [savedPincode, setSavedPincode] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    const stored = localStorage.getItem("UserPincode");
    if (stored) {
      setSavedPincode(stored);
      setIsEditing(false); 
    } else {
      setIsEditing(true); 
    }
  }, []);

  const handleSave = () => {
    if (!/^\d{6}$/.test(pincode)) {
      setError("Please enter a valid 6-digit pincode");
      return;
    }
    localStorage.setItem("UserPincode", pincode);
    setSavedPincode(pincode);
    setError("");
    setIsEditing(false); 
  };

    const isActive = index === currentIndex;

    const styles = {
      opacity: 1,
      zIndex: isActive ? 4 : 3,
      pointerEvents: isActive ? "auto" : "none",
      transform: isActive
        ? "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
        : "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -50, 1)",
      transition: "transform 0.5s ease-out",
      margin: isActive ? "0px" : "14px 0px 0px 12px",
    } as React.CSSProperties

  return (
    
          <li className="stack__item nextBestActlist pincodeActnWidget stack__item--current" 
            style={styles}>
            <div className="widgetImage nbaFinalImage pincodeImg"></div>
            <div className="deliveryPin">Your Delivery Pincode</div>
            <div className="dashPincode"></div>
            <p className="letDelivr">
              Enter your pincode to check availability and faster delivery
              options
            </p>

           
            {isEditing && (
              <div className="reset-padding check-avail-pin-input-nba marT10">
                <input className="" type="text" id="pincode-check-nba" maxLength={6} placeholder="Enter pincode" value={pincode} onChange={(e) => setPincode(e.target.value)}/>
              </div>
            )}


            {savedPincode && !isEditing && (
              <div className="nbaPincode padT20">
                Pincode: <span className="pincodeNbaText">{savedPincode}</span>
              </div>
            )}


            {error && <div className="errorPincode">{error}</div>}

            <div className="controls nextBestActionControls padT20 col-xs-24">
              {isEditing ? (
                <button
                  className="btn btn-theme-secondary pincodeNbaSubmit col-xs-16"
                  onClick={handleSave}
                >
                  Save Pincode
                </button>
              ) : (
                <button
                  className="btn btn-theme-secondary pincodeNbaSubmit col-xs-16"
                  onClick={() => {
                    setIsEditing(true);
                    setPincode(savedPincode || "");
                  }}
                >
                  Change Pincode
                </button>
              )}

              <button className="btn pincodeSkipSubmit btn-light col-xs-7 rfloat button--accept" data-stack="stack_yuda" onClick={onNext}><span className="">NEXT</span></button>
            </div>
            
          </li>
  );
};
