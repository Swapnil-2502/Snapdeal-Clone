

export const HomeError = () => {
  return (
    <div className="wrapperResp sysMsgHome" style={{marginTop:"600px"}}>
        <div className="message-alert alert-error system_message" style={{overflow:"hidden"}}>
            <div className="alert-icon-wrapper comp-error-icon-red">
                <span className="error-icon"><i className="sd-icon sd-icon-error"></i></span>
            </div>					
            <button className="close" type="button"><i className="sd-icon sd-icon-delete-sign"></i></button>			
            <p className=""><span className="alert-heading">Oops! Looks like something went wrong, please try again in sometime.</span></p>
        </div>
    </div>
  )
}
