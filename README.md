# 🛒 Snapdeal Clone

A full-stack **Snapdeal Clone** built with the MERN stack and TypeScript.  
This project replicates core e-commerce functionalities such as **product listing, cart management, OTP login, order placement, and address management**.

---

### Currently deployed at AWS EC2 (Ubuntu Machine):
- Backend: http://65.0.6.84:4000/api
- Frontend: http://65.0.6.84:5173

---

## 🚀 Tech Stack

**Frontend:**
- React.js (with TypeScript)
- Context API (State Management)
- Axios

**Backend:**
- Node.js + Express.js  (TypeScript)
- MongoDB + Mongoose 
- JWT Authentication
- OTP-based Login (Email) using Nodemailer

---

## Authentication Flow

Here’s the flow of the **Register & Login** form:

![alt text](<Screenshot 2025-09-24 at 6.35.21 AM.png>)

---

## ✨ Features


- 🔑 **Authentication**
  - OTP-based login using email 
  - Secure JWT-based sessions

- 📦 **Products**
  - Product listing with filters
  - Product details page
  - Stock management (auto-reduces after order)

- 🛒 **Cart & Checkout**
  - Add to Cart / Remove from Cart
  - Quantity management (capped by stock availability)
  - Cart items stored in localStorage for persistence
  - Stock validation before payment (handles validation before checkout)
  
 - 📍 **User**
	  - Manage delivery addresses
	  - Save delivery **pincode** in localStorage
	  - View past orders

- 💳 **Orders**
  - Place orders only if stock is available
  - Order summary and tracking
  
---

## 🔗 API Endpoints

All endpoints start with `/api`

### **Auth**
- `POST /auth/check-email`
- `POST /auth/register`
- `POST /auth/verify-otp`

### **Product**
- `POST /product`
- `POST /validateStock`
- `GET /product`
- `GET /product/search`
- `GET /product/:id`
- `PATCH /product/:id`
- `DELETE /product/:id`

### **Addresses**
- `POST /user/addresses`
- `GET  /user/addresses`
- `PUT  /user/addresses/:addressId`
- `DELETE /user/addresses/:addressId`

### **Payment**
- `POST /create-order`
- `POST /verify-payment`

### **Order**
- `GET /order/allorders`
- `GET /order/orderbyId/:orderId`
- `POST /order`
- `PATCH /order/:orderId`
- `GET /order`
- `GET /order/:orderId`

### **Review**
- `GET /review/:productId`
- `POST /review/:productId`
- `PATCH /review/:productId/:reviewId`
- `DELETE /review/:productId/:reviewId`

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone git@github.com:Swapnil-2502/Snapdeal-Clone.git
cd snapdeal-clone
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
create .env
npm run dev
```
```bash
.env file format backend
PORT_NUMBER=
MONGODB_URL=
JWT_SECRET=
OTP_LENGTH=
OTP_TTL_MINUTES=
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
RAZORPAY_Key_Id=
RAZORPAY_SECRET=
```

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
```bash
.env file format frontend
VITE_API_BASE_URL=
RAZORPAY_Key_Id=
```

# Thank you for reading