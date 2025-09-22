

export const Barcode = () => {
  return (
    <>
        <div className="nav-bottom-barcode ">
					<div className="bar-code-image barCodImg"
                        style={{
                            width: 65,
                            height: 65,
                            backgroundColor: '#fff',
                            backgroundImage:
                            "url(\"https://api.qrserver.com/v1/create-qr-code/?size=65x65&data=rand-20250919-abc123\")",
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
					<div className="bar-code-info">
						<span className="head">Enjoy Convenient Order Tracking</span>
						<span className="desc">Scan to download app</span>
					</div>
			</div>
    </>
  )
}
