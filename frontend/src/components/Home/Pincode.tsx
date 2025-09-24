import { useState, useEffect } from "react";

export const Pincode = () => {
  const [pincode, setPincode] = useState("");
  const [savedPincode, setSavedPincode] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Load saved pincode from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("UserPincode");
    if (stored) {
      setSavedPincode(stored);
      setIsEditing(false); // Hide input if already saved
    } else {
      setIsEditing(true); // Show input if no saved pincode
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
    setIsEditing(false); // Hide input after saving
  };

  return (
    <div className="next-Best-Action-Widget">
      <div className="content">
        <ul id="stack_yuda" className="nextBestActnWidget stack stack--yuda perspective">
          <li className="stack__item nextBestActlist pincodeActnWidget stack__item--current" style={{opacity: "1",zIndex: "4",pointerEvents: "auto",transform:"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",transition: "transform 0.5s ease-out",margin: "0px",}}>
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

            <div className="controls nextBestActionControls padT20 col-xs-24" style={{display:'flex',justifyContent:'center'}}>
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

             
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
