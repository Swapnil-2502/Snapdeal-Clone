import mongoose, {Schema} from "mongoose";

export interface ProductDocument {
  title: string;
  type: string;
  category?: string;
  subcategory?: string;
  price: number;
  mrp: number;
  stars?: string | null;
  avgRating?: string | null;
  totalRatings?: string | null;
  totalReviews?: string | null;
  images: string[];
  highlights?: string[];
  otherSpecifications: {
    countryOfOrigin?: string;
    genericName?: string;
    manufacturerAddress?: string;
    packerAddress?: string;
    marketerAddress?: string;
    importerAddress?: string;
  } | null;
  description?: string;
  termsAndConditions?: string | null;
  quickLinks: {
    productType?: string;
    brand?: string;
  };
  sellerDetails?: {
    manufacturer?: string;
    stars?: string;
    totalReviews?: string;
  } | null;
}


const ProductSchema = new Schema<ProductDocument>(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String },
    subcategory: { type: String},
    price: { type: Number, required: true },
    mrp: { type: Number, required: true },
    stars: { type: String, default: null },
    avgRating: { type: String, default: null },
    totalRatings: { type: String, default: null },
    totalReviews: { type: String, default: null },
    images: { type: [String], required: true },
    highlights: { type: [String] },
    otherSpecifications: {
      countryOfOrigin: { type: String },
      genericName: { type: String },
      manufacturerAddress: { type: String },
      packerAddress: { type: String },
      marketerAddress: { type: String },
      importerAddress: { type: String },
    },
    description: { type: String },
    termsAndConditions: { type: String, default: null },
    quickLinks: {
      productType: { type: String },
      brand: { type: String },
    },
    sellerDetails: {
      manufacturer: { type: String },
      stars: { type: String },
      totalReviews: { type: String },
    },
  },
  { timestamps: true } 
);

export default mongoose.model<ProductDocument>("products",ProductSchema)