# 🛒 Snapdeal Clone

A full-stack **Snapdeal Clone** built with the MERN stack and TypeScript.  
This project replicates core e-commerce functionalities such as **product listing, cart management, OTP login, order placement, and address management**.

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