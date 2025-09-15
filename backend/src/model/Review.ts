import mongoose, {Schema} from "mongoose";

export interface IReviewItem {      
  userId: mongoose.Types.ObjectId;  
  name: string;
  rating: number;
  comment?: string;
}

export interface IProductReview extends Document {
  productId:  mongoose.Types.ObjectId;    
  title: string;               
  ratingsAndReviews: IReviewItem[];
}

const ReviewItemSchema = new Schema<IReviewItem>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: {type: String, required: true},
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, trim: true },
  },
  { _id: true } 
);

const ProductReviewSchema = new Schema<IProductReview>(
  {
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true, unique: true, index: true},
    title: { type: String }, 
    ratingsAndReviews: { type: [ReviewItemSchema], default: [] }
  },
  { timestamps: true }
);


export default mongoose.model<IProductReview>("ProductReview",ProductReviewSchema)