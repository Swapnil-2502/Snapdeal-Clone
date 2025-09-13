import type React from "react"
import { useEffect, useState } from "react";
import type { UserAddress } from "../../../types/types";
import axios from "../../../api/axios"


interface AddNewAddressProps {
    onClose: () => void;
    showAddressForm: boolean;
    initialData?: UserAddress | null
}

export const AddNewAddress: React.FC<AddNewAddressProps> = ({onClose,showAddressForm,initialData}) => {
    const [AddressForm, setAddressForm] = useState<UserAddress>(initialData || {
        pincode: "",
        name: "",
        address: "",
        landmark: "",
        city: "",
        state: "",
        mobileNumber: "",
        alternateNumber: "",
        addressType: "Home",
        default: false
    })

    const [isDefaultAddress, setIsDefaultAddress] = useState(false)
    
    useEffect(() => {
        if(initialData){
            setAddressForm(initialData)
        }
    },[initialData])

    const token = localStorage.getItem("Token")
    const headers = {
        Authorization: `Bearer ${token}`,
    }

    const handleSubmit = async() => {
        if(isDefaultAddress){
            console.log("Hello from if")
            localStorage.setItem("DefaultAddress", JSON.stringify(AddressForm))
        } 
        
        if(initialData){
            const addressId = initialData._id
            await axios.put(`/user/addresses/${addressId}`,AddressForm,{headers})
        }
        else{
            await axios.post("/user/addresses",AddressForm,{headers})
        }
        
        onClose()
    }
   
  return (
    <>
        <div id="checkout-shipping" className="newAddressForm" style={{display: showAddressForm ? "block":"none"}}>
                <h2 className="heading">Enter Your Address</h2>

                <div id="address-form">
                    <div className="shipping-address">
                              <div className="heading-container clearfix" onClick={onClose} style={{cursor:"pointer"}}>
                                  <a id="back-to-saved-address" className="sub-heading pull-right icon-Previous">Back To Saved Addresses</a>
                              </div>

                            <form id="shipping-address-form" data-novalidate="novalidate" onSubmit={handleSubmit}>
                                <div className="customer-info">
                                      <div className="row">
                                          <label className="col-xs-5 form-lbl" htmlFor="zip">Pincode</label>
                                          <input id="zip" data-address-field="pincode" type="text" value={AddressForm.pincode} maxLength={6} className="col-xs-5 valid" name="postalCode" placeholder="Enter 6 digit pincode" data-required="true" data-invalid="false" data-required-msg="Please enter your pincode" data-validation="num size-6" onChange={(e) => setAddressForm({...AddressForm,pincode:e.target.value})}/>
                                      </div>

                                      <div className="row">
                                          <label className="col-xs-5 form-lbl" htmlFor="fullName">Name  </label>
                                          <input type="text" maxLength={128} data-address-field="recipientName" value={AddressForm.name} className="inputbox2 col-xs-7" name="name" id="fullName" placeholder="Full Name" data-required="true" data-required-msg="Please enter your name" onChange={(e) => setAddressForm({...AddressForm,name: e.target.value})}/>
                                      </div>

                                      <div className="row">
                                          <label className="col-xs-5 form-lbl" htmlFor="address">Address </label>
                                          <textarea name="address1" data-address-field="addressLine1" value={AddressForm.address} className="inputbox2 col-xs-7 text-area" id="address" placeholder="Flat/House No. Colony/Street No." data-required="true" data-required-msg="Please enter your address" data-validation="address" onChange={(e) => setAddressForm({...AddressForm,address:e.target.value})}></textarea>
                                      </div>

                                      <div className="row">
                                          <label className="col-xs-5 form-lbl" htmlFor="nearestLandmark">Locality/Landmark</label>
                                          <input maxLength={400} type="text" data-address-field="landmark" value={AddressForm.landmark} className="inputbox2 col-xs-7" name="address2" id="nearestLandmark" placeholder="Eg Near Fortis Hospital" data-validation="landmark" onChange={(e) => setAddressForm({...AddressForm,landmark:e.target.value})}/>
                                          
                                      </div>

                                      <div className="row ">
                                          <label className="col-xs-5 form-lbl" htmlFor="city">City  </label>
                                          <input maxLength={48} type="text" data-address-field="city" value={AddressForm.city} className="inputbox2 col-xs-7 " name="city" id="city" placeholder="City" data-required="true" data-required-msg="Please enter the city name" data-validation="city" onChange={(e) => setAddressForm({...AddressForm, city: e.target.value})} />
                                      </div>

                                      <div className="row ">
                                          <label className="col-xs-5 form-lbl" htmlFor="state">State </label>
                                          <input maxLength={48} type="text" data-address-field="state" value={AddressForm.state} className="inputbox2 col-xs-7 " name="state" id="state" placeholder="State" data-required="true" data-required-msg="Please select the state name" data-validation="state" onChange={(e) => setAddressForm({...AddressForm,state:e.target.value})} />
                                      </div>
                                        <input type="hidden" name="country" value="India"/>
                                    <div className="row">
                                        <label className="col-xs-5 form-lbl" htmlFor="mobile">Mobile Number  </label>
                
                                        <span className="mobile-prepend">+91</span>
                                        <input type="text" data-address-field="recipientMobile" value={AddressForm.mobileNumber} className="inputbox2 col-xs-6" maxLength={10} name="mobile" id="mobile" placeholder="10 digit mobile number" data-required="true" data-required-msg="Please enter your mobile number" data-validation="mob" onChange={(e) => setAddressForm({...AddressForm,mobileNumber:e.target.value})}/>
                                        
                                    </div>
                                    <div className="row">
                                        <label className="col-xs-5 form-lbl" htmlFor="landLine">Alternate Mobile No.  </label>
                                        <span className="mobile-prepend">+91</span>
                                        <input type="text" data-address-field="landLine" value={AddressForm.alternateNumber} className="inputbox2 col-xs-6" maxLength={10} name="landLine" id="landLine" placeholder="10 digit mobile number" data-required-msg="Please enter your mobile number" data-validation="altMob" onChange={(e) => setAddressForm({...AddressForm,alternateNumber:e.target.value})}/>
                                    </div>
                                    <div className="row address-type-checkbox">
                                        <label className="col-xs-5  form-lbl">Address Type</label>
                                        <div className="col-xs-12 pad-lt-0">
                                            <div className=" medium  col-xs-4 pad-lt-0">
                                                <input data-required="true" type="radio" id="home-mobile" name="addressTag" value="Home" checked={AddressForm.addressType === 'Home'} onChange={(e) => setAddressForm({...AddressForm,addressType:e.target.value as 'Home' | 'Office'})}/>
                                                <label>
                                                    Home
                                                </label>
                                            </div>
                                            <div className=" medium radio-black col-xs-4 pad-lt-0">
                                                <input data-required="true" type="radio" id="office-mobile" name="addressTag" value="Office" checked={AddressForm.addressType === 'Office'} onChange={(e) => setAddressForm({...AddressForm,addressType:e.target.value as 'Home' | 'Office'})}/>
                                                <label>
                                                    Office/Commercial
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-xs-5 form-lbl"></label>

                                        <div className="make-as-default medium  col-xs-7 pad-lt-0">
                                            <input type="checkbox" data-address-field="defaultAddress" name="defaultAddress" checked={isDefaultAddress} id="location" onChange={(e) =>{
                                                //setAddressForm({...AddressForm,default:e.target.checked})
                                                setIsDefaultAddress(e.target.checked)
                                            }} />
                                            <label htmlFor="location" className="label200Wide">
                                                Make this my default address
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="col-xs-5"></label>
                                        <button id="dotaccount-saveAddress-continue" className="rippleWhite btn btn-theme-secondary button-org col-xs-7" type="submit" style={{background: "rgb(51, 51, 51)"}}>
                                            <span>Save</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
        </div>   
    </>
  )
}
