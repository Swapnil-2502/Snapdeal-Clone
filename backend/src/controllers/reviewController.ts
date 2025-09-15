import { Request, Response } from "express";
import { Authrequest } from "../middleware/AuthMiddleware";
import User from "../model/User";
import Review from "../model/Review";
import { Types } from "mongoose";


export const getReviews = async (req: Request, res: Response) => {
    const productId = req.params.productId
    try{
        if(!productId) return res.status(400).json({message: "Unable to fetch reviews as not productId provided"})

        const reviewDoc = await Review.findOne({productId})

        if(!reviewDoc) res.status(200).json({ reviews: []});

        return res.status(200).json({reviewDoc})
    }
    catch(error){
        console.error("Error in getting Reviews:", error);
        return res.status(500).json({ message: "Server error", error: error});
    }
}

export const createReview = async (req: Authrequest, res: Response) => {
    const productId = req.params.productId;
    const userId = req.userId
    const {title, rating, comment} = req.body

    try{        
        const user = await User.findById(userId)
        if(!user) return res.status(404).json({ message: "User not found." });

        const Username = user.name 
        

        let reviewDoc = await Review.findOne({productId: productId})

        if(!reviewDoc){
            reviewDoc = new Review({productId,title, ratingsAndReviews:[]})
        }

        const existingReviewofaUser = reviewDoc.ratingsAndReviews.find((r) => r.userId.equals(userId))
        if(existingReviewofaUser){
            return res.status(400).json({ message: "User already reviewed this product" });
        }
    
        reviewDoc.ratingsAndReviews.push({ userId: new Types.ObjectId(userId), name: Username ,rating, comment })
        await reviewDoc.save();
        return res.json(reviewDoc);

    }
    catch(error){
        console.error("Error in creating a Review:", error);
        return res.status(500).json({ message: "Server error", error: error});
    }
}

export const updateReview = async (req: Authrequest, res: Response) => {
    const {productId, reviewId} = req.params;
    const userId = req.userId
    const { rating, comment } = req.body;

    try{
        if(!productId || !reviewId) return res.status(400).json({message: "ProductId or reviewId is missing"})

        const reviewDoc = await Review.findOneAndUpdate(
            { 
                productId: productId,
                "ratingsAndReviews._id": reviewId,
                "ratingsAndReviews.userId": userId
            },
            { 
                $set: { 
                "ratingsAndReviews.$.rating": rating,
                "ratingsAndReviews.$.comment": comment
                } 
            },
            { new: true }
        );

        if (!reviewDoc) return res.status(404).json({ message: "Review not found or not authorized" });

        res.json({ message: "Review updated successfully", reviewDoc });
        
    }
    catch(error){
        console.error("Error in updating a Review:", error);
        return res.status(500).json({ message: "Server error", error: error});
    }
}

export const deleteReview = async (req: Authrequest, res: Response) => {
    const {productId, reviewId} = req.params;
    const userId = req.userId

    try{
        if(!productId || !reviewId) return res.status(400).json({message: "ProductId or reviewId is missing"})

        const reviewDoc = await Review.findOneAndUpdate(
            { productId: productId },
            { $pull: { ratingsAndReviews: { _id: reviewId, userId: userId } } },
            { new: true }
        );

        if (!reviewDoc) return res.status(404).json({ message: "Review not found or not authorized" });

        res.json({ message: "Review deleted successfully", reviewDoc });

    }
    catch(error){
        console.error("Error in updating a Review:", error);
        return res.status(500).json({ message: "Server error", error: error});
    }
}