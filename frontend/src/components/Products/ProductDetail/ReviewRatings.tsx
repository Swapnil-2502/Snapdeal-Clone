import { useEffect, useState } from "react"
import axios from "../../../api/axios"
import { useParams } from "react-router-dom";
import { type Review } from "../../../types/types";


export const ReviewRatings = () => {
    const [showForm, setShowForm] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const {productTitle,productId} = useParams()
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [reviews, setReviews] = useState<Review[]>([])
    const [isEditing, setIsEditing] = useState(false)
    const [avgRatings, setAvgRatings] = useState(0);
    const [totalRatings, setTotalRatings] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);
    const LoggedInUserId = JSON.parse(localStorage.getItem("UserData") || "{}").id

    const token = localStorage.getItem("Token")
    const headers = {
        Authorization: `Bearer ${token}`,
    }

    useEffect(() => {
        fetchReviews();
    },[])

    useEffect(() => {
        if (reviews.length === 0) {
            setAvgRatings(0);
            setTotalRatings(0);
            setTotalReviews(0);
            return;
        }
        const totalRatingsCount = reviews.length; 
        const sumRatings = reviews.reduce((acc, r) => acc + Number(r.rating), 0);

        setTotalRatings(totalRatingsCount);
        setTotalReviews(reviews.filter(r => r.comment && r.comment.trim() !== "").length);
        setAvgRatings(sumRatings / totalRatingsCount);
    },[reviews])


    const onClose = () => {
        setRating(0)
        setComment("")
        setShowForm(false)
        setIsEditing(false)
    }

    const fetchReviews = async () => {
        try {
            const res = await axios.get(`/review/${productId}`);
            setReviews(res.data.reviewDoc.ratingsAndReviews || []);
        } catch (err) {
            setError(true)
            setErrorMessage("Error fetching reviews")
            console.error("Error fetching reviews", err);
        }
    }

    
    const userReview = reviews.find(r => r.userId === LoggedInUserId);
    const otherReviews = reviews.filter(r => r.userId !== LoggedInUserId);


    const handleReviewFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try{
            const userReviewId = userReview?._id
            if(isEditing){
                await axios.patch(`/review/${productId}/${userReviewId}`, { rating, comment} ,{headers})
            }
            else{
                await axios.post(`/review/${productId}`, {title: productTitle, rating, comment} ,{headers})
            }
            
            fetchReviews()
        }
        catch(error){
            setError(true)
            setErrorMessage("Error submitting reviews or user might have already submitted the review")
            console.error("Error submitting review", error);
        }

        onClose()
    }

    const handleEdit = (userReview: Review) => {
        setShowForm(true)
        setIsEditing(true)
        setRating(userReview.rating)
        setComment(userReview.comment ? userReview.comment : "")
    }

    const handleDelete = async () => {
        const userReviewId = userReview?._id
        if (window.confirm('Are you sure you want to delete the review?')){
            try {
                await axios.delete(`/review/${productId}/${userReviewId}`, {headers});
                fetchReviews()
                
            } catch (error) {
                setError(true)
                setErrorMessage("Error deleting review")
                console.error('Error delete review:', error);
            }
        }
    }

    
  return (
    <>
        <section className="pdp-section showGreyCont animScroll" id="reviewsContainer">
	
	        <div className="comp comp-customer-review">
                <h2 className="section-head customer_review_tab">
                    <span>Ratings &amp; Reviews</span>
                </h2>
		
		        <div>
                    <div className="message-alert alert-success review-alert-success" style={{display:"none"}}>
                        <div className="alert-icon-wrapper comp-error-icon-blue">
                            <span className="error-icon">
                                <i className="sd-icon sd-icon-checkmark"></i>
                            </span>
                        </div>
                        <button className="close" type="button">
                            <i className="sd-icon sd-icon-delete-sign"></i>
                        </button>
                        <div className="alert-text-wrapper">
                            <span className="alert-heading">Success! Your Feedback has been submitted.</span>
                            <p className="alert-text alert-success">!</p>
                        </div>
                    </div>
                </div>

                {reviews.length > 0 && 
                <div className="message-alert alert-error review-alert-error" style={{display: error ? "block": "none"}}>
                        
                        <div className="alert-text-wrapper" style={{display: 'flex', justifyContent: "space-between", alignItems: 'flex-start',width: "100%" }}>
                            <span className="alert-heading">{errorMessage}.</span>
                            <button style={{background: "none",border: "none",fontSize: "44px",color: "white",cursor: "pointer", paddingBottom:"28px", paddingRight:"10px"}} onClick={()=>setError(false)} >×</button>
                        </div>
                        
                </div>
                }
                
                <div id="ReviewHeader" className="customer_review">
                    <div className="whitebx">
                        <div className="product_review">

                            <ul>
                                <li className="first  col-xs-8  leftAlignment">
                                    <div className="chart text">
                                        <div className="rating-middle-section clearfix"> 
                                            <div className="rating-text"><span className="rating">{avgRatings}.0</span>/5</div> 
                                            <div className="rating-stars product-rating clearfix">
                                                <div className="grey-stars" style={{marginBottom:'10px'}}>
                                                    <span className="filled-stars" style={{width:`${(Number(avgRatings)/5)*100}%`}}></span>
                                                </div>
                                            </div>
                                            <p className="total-review-txt">{totalRatings} Ratings &amp; {totalReviews} Review</p> 
                                        </div>
                                    </div>
                                </li>
                                <li id="user-reviewRec-content-div" className="second col-xs-8">
                                    <div className="text aligncenter">
                                        <div id="rcmnd-text" className="LTgray fs14">                                         
                                            No recommendations yet.
                                        </div>
                                        <div className="recomBtn marT30" >
                                            <span className="LTblack col-xs-13"> Would you like to recommend this item?</span>                                           
                                            <a id="recBtn" className="btn white-btn rippleWhite col-xs-4 reset-margin" style={{color: "black", background:"white", border:'1px solid grey'}}>Yes</a>
                                            <a id="notRecBtn" className="btn white-btn rippleWhite col-xs-4 reset-margin" style={{color: "black", background:"white", border:'1px solid grey'}}>No</a>                                          
                                        </div>
                                    </div>
                                </li>
                                
                                <li id="user-reviewRate-content-div" className="third col-xs-8">
                                    <div className="aligncenter">
                                        <p id="rev-text"><span>Have you used this product?</span></p>
                                        <a className="btn btn-orange rippleWhite js-userReviewed reviewBtn" onClick={() => setShowForm(true)}>Review</a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        { reviews.length > 0 && 
                        <div id="defaultReviewsCard">
                            <div className="sort clearfix" id="defRevPDP">
                                <div className="cust_review">Customer Reviews</div>
                               
                            </div>



                            <div className="reviewareain clearfix">
                                <div className="commentreview">

                                    {userReview &&  (
                                    <div  className="commentlist first jsUserAction">
                                        <div className="userimg">
                                            <span className="reviewer-imgName" style={{background:"#5fcbef"}}>{userReview.name.substring(0,1)}</span>
                                            
                                        </div>
                                        
                                        <div className="text">
                                            <div className="user-review">
                                                <span className="rating-stars lfloat">
                                                    <div className="grey-stars" style={{marginBottom:'10px'}}>
                                                        <span className="filled-stars" style={{width:`${(Number(userReview.rating) / 5)*100}%`}}></span>
                                                    </div>
                                                </span>

                                                <div className="_reviewUserName" title={userReview.name} style={{paddingLeft: "8px"}}>by {userReview.name} </div>
                                                
                                                <p>{userReview.comment}</p>
                                                
                                                
                                            </div>
                                            <div style={{display:'flex',gap:'5px'}}>
                                                <button onClick={() => handleEdit(userReview)} style={{padding: '6px 12px',backgroundColor: '#2563eb', color: 'white',borderRadius:"6px"}}>Edit</button>
                                                <button onClick={() => handleDelete()}  style={{padding: '6px 12px',backgroundColor: '#dc2626', color: 'white',borderRadius:"6px"}}>Delete</button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    )}

                                    {otherReviews.map((review,index) => (
                                    <div key={index} className="commentlist first jsUserAction">
                                        <div className="userimg">
                                            <span className="reviewer-imgName" style={{background:"#5fcbef"}}>{review.name.substring(0,1)}</span>
                                            
                                        </div>
                                        
                                        <div className="text">
                                            <div className="user-review">
                                                <span className="rating-stars lfloat">
                                                    <div className="grey-stars" style={{marginBottom:'10px'}}>
                                                        <span className="filled-stars" style={{width:`${(Number(review.rating) / 5)*100}%`}}></span>
                                                    </div>
                                                </span>

                                                <div className="_reviewUserName" title={review.name} style={{paddingLeft: "8px"}}>by {review.name} </div>
                                                
                                                <p>{review.comment}</p>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
    
                            </div>
                        </div>
                        }

                    </div>
                    {!reviews && 
	                <div className="legalRnrTxt">Rating info is based on overall customer ratings</div>}
	            </div>
            </div>

        </section>

        {showForm && (
        <div className="modal-overlay" style={{position: 'fixed',top: 0,left: 0,right: 0,bottom: 0,backgroundColor: 'rgba(0,0,0,0.5)',display: 'flex',justifyContent: 'center',alignItems: 'center',zIndex: 1000}}>
          <div className="modal-content" style={{backgroundColor: 'white',padding: '20px',borderRadius: '8px',width: '90%',maxWidth: '500px'}}>
            <h2 style={{textAlign: 'center'}}>Write a Review</h2>
            <form onSubmit={handleReviewFormSubmit}>
              <div className="form-group" style={{marginBottom: '15px'}}>
                <label htmlFor="rating">Rating:</label>
                <select id="rating" name="rating" value={rating} onChange={(e) => setRating(Number(e.target.value))} required style={{width: '100%', padding: '8px', marginTop: '5px'}}>
                  <option value={0}>Select Rating</option>
                  <option value={1}>1 Star</option>
                  <option value={2}>2 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={5}>5 Stars</option>
                </select>
              </div>

              <div className="form-group" style={{marginBottom: '15px'}}>
                <label htmlFor="comment">Review:</label>
                <textarea id="comment" name="comment" value={comment} onChange={(e) => setComment(e.target.value)} required rows={4} placeholder="Share your experience with this product..." style={{width: '100%', padding: '8px', marginTop: '5px'}}/>
              </div>

              <div className="form-actions" style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
                <button type="button" onClick={onClose} style={{padding: '10px 20px',backgroundColor: '#ccc',border: 'none',borderRadius: '4px',cursor: 'pointer'}}>
                  Cancel
                </button>
                <button type="submit" style={{padding: '10px 20px',backgroundColor: '#ccc',border: 'none',borderRadius: '4px',cursor: 'pointer'}}>
                  {isEditing? "Edit Review" : "Submit Review"} 
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
