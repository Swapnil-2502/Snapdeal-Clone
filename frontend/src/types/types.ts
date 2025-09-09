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

export interface StoredUserData {
    id: string;
    email:string;
    phone: string;
    name: string;
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