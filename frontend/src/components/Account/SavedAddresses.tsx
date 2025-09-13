import { useEffect, useState } from "react"
import { type UserAddress } from "../../types/types"
import axios from "../../api/axios"
import { AddNewAddress } from "./Comps/AddNewAddress"



export const SavedAddresses = () => {
    const [addresses, setAddresses] = useState<UserAddress[]>([])
    const [EditAddress, setEditAddress] = useState<UserAddress | null>(null);
    const [showAddressForm, setShowAddressForm] = useState(false)
    const token = localStorage.getItem("Token")
    const headers = {
        Authorization: `Bearer ${token}`,
    }
    useEffect(()=>{
        const fetchAddresses = async () => {
            const res = await axios.get("/user/addresses", {headers})
            setAddresses(res.data.addresses)
        }
        fetchAddresses()
    },[])

    const onClose = () => {
      setShowAddressForm(false)
      setEditAddress(null)
    }

    const handleEdit = (address: UserAddress) => {
      setEditAddress(address)
      setShowAddressForm(true);
    }

    const handleDelete = async (address: UserAddress) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this address")
        if(!confirmDelete) return

        try{
          const addressId = address._id
          await axios.delete(`/user/addresses/${addressId}`,{headers})
          setAddresses((prev) => prev.filter((a) => a._id !== addressId));
        }
        catch(error){
          console.error("Failed to delete address:", error);
        }
    }

    const DefaultLocationId = JSON.parse(localStorage.getItem("DefaultAddress") || "{}")._id

    return (
      <>
          <div className="rightWrapper" id="dotAccountSavedAddresses">
              <h1 className="accountOrder" style={{display: showAddressForm ? "none": "" }}>From SavedAddresses</h1>

              {!showAddressForm && addresses.length > 0  &&

                <div className="slider">
                      <div className="bx-wrapper" style={{maxWidth: "153px", margin: "0px auto"}}>
                          <div className="bx-viewport" style={{width: "100%", overflow: "hidden", position: "relative", height: "248px"}}>
                              <ul className="bxSlider loaded" id="dotAccountbxSlider" data-addcounter="1" style={{width: "315%", position: "relative"}}>
                                { addresses.map((address, index)=> (
                                  <li key={index} data-userid="500241895" data-addressid="214241387" style={{float: "left", listStyle: "none", position: "relative", width: "195px",height:"248px"}}>
                                      <div className={`location ${DefaultLocationId === address._id ? "default" : ""}`}>
                                          <span data-name="addressTag">{address.addressType}</span>
                                          {DefaultLocationId === address._id && 
                                            <>
                                            <span className="defaultMention" data-name="defaultAddress">- Default</span>
                                            <span className="defaultAddArrow"></span>
                                            </>
                                          }
                                      </div>
                                          <h3 data-name="name" data-size="12" className="truncated" style={{color: 'black'}}>{address.name}</h3>
                                          <div className="address">
                                            <span data-name="address1" data-size="30">{address.address}</span><br/>
                                            <span data-size="10" data-name="city">{address.city}</span>  - <span data-name="postalCode">{address.pincode}</span>
                                            <br/><span data-name="state" data-size="17">{address.state}</span>
                                            <br/><span data-name="address2" data-size="20" className="landmark">{address.landmark}</span>
                                          </div>
                                          <div className="phone">
                                              Phone: <span data-name="mobile">{address.mobileNumber}</span>
                                          </div>
                                          <div className="controls">
                                              <ul>
                                                  <li><a className="deleteAddress" href="#" style={{display: "inline-flex", alignItems: "center"}} onClick={()=>handleDelete(address)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path></svg>Delete</a></li>
                                                  <li><a className="edit" href="#" style={{display: "inline-flex", alignItems: "center"}} onClick={()=>handleEdit(address)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>Edit</a></li>
                                              </ul>
                                          </div>
                                  </li>
                                ))}
                              </ul>
                          </div>
                      </div>
                </div>     

              }
            
              <AddNewAddress showAddressForm={showAddressForm} onClose={onClose} initialData={EditAddress}/>
              

              {!showAddressForm && 
                <div>
                  {addresses?.length === 0 && <div id="emptyMessageDetail" className="emptyMessage">You do not have any saved address</div> }
                  
                  <div className="row">
                      <div className="col-xs-5 col-xs-offset-1 btn btn-xl rippleWhite updgradeNow addAddress newaddbutton" onClick={()=>setShowAddressForm(true)} >
                        <span className="drop" style={{top: "337px", left: "837px"}}></span>
                        <a className="initialtext" >Add New Address</a>
                      </div>
                  </div>
                </div>
              }


          </div>
      </>
    )
}
