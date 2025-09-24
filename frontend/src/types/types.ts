export type AuthStep = 'login-register' | 'signup' | 'verify-otp'

export type checkEmailResult = {
    message?: string
    email: string,
    purpose: 'login' | 'register'
}

export interface UserData {
    email:string;
    phone: string;
    name: string;
    dob: string;
    password: string;
} 

export interface VerifyOtpResponse {
  message: string;
  user :StoredUserData;
  token: string
}

export interface StoredUserData {
    id: string;
    email:string;
    phone: string;
    name: string;
    role: string;
}

export interface AuthData {
    email: string;
    purpose: 'login' | 'register';
    otp: string;
    payload: {
        phone?: string;
        name?: string;
        dob?: string;
        password?: string;
    }
}

export interface ProductData {
  _id: string,
  title: string;
  type: string;
  category?: string;
  subcategory?: string;
  stockAvailable: number;
  price: number;
  mrp: number;
  stars?: string | null;
  avgRating?: string | null;
  totalRatings?: string | null;
  totalReviews?: string | null;
  images: string[];
  sizes: string[];
  color?: string;
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


export interface CartItem {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  imageURL: string;
  size?: string;
  color?: string;
  stockAvailable: number
}

export interface UserAddress {
  _id?: string
  pincode: string,
  name: string,
  address: string,
  landmark?: string,
  city: string,
  state: string,
  mobileNumber: string,
  alternateNumber?: string,
  addressType: "Home" | "Office",
  default: boolean
}

export interface OrderType{
  _id: string,
  user:string,
  items: CartItem[],
  address: UserAddress,
  totalAmount: string,
  status: 'pending' | 'placed' | 'packed' | 'shipped' | 'out for delivery' | 'delivered' | 'cancelled',
  trackingHistory?: {
    status: string,
    timestamp: Date,
    note?: string,
  }[],
  createdAt?: Date,
  updatedAt?: Date,
} 

export type OrderStatus = 'pending' | 'placed' | 'packed' | 'shipped' | 'out for delivery' | 'delivered' | 'cancelled';

export interface Review {
  _id: string;
  userId: string;
  name: string;
  rating: number;
  comment?: string;
}

export interface ReviewDoc {
  _id: string;
  productId: string;
  title: string;
  ratingsAndReviews: Review[];
}

export interface ProductFilter {
  type: string,
  color: string,
  minPrice: number,
  maxPrice: number,
  sortby: string; 
  minStars: string,
}

