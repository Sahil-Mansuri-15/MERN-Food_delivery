<div align="center">

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-FF6B35?style=for-the-badge)](https://mern-food-delivery-two.vercel.app)

> A production-ready full-stack food delivery platform with real-time order management, secure payments, and a powerful admin dashboard.

</div>

---

---

## ✨ Features

### 👤 Customer
- 🔐 **Authentication** — Secure register & login with JWT
- 🍽️ **Menu Browsing** — Filter dishes by 8 categories
- 🛒 **Smart Cart** — Add, remove, update quantities in real-time
- 💳 **Stripe Payments** — Secure checkout with test & live mode support
- 📦 **Order Tracking** — Real-time order status updates
- 📱 **Responsive Design** — Seamless experience on all devices

### ⚙️ Admin
- ➕ **Add Menu Items** — Upload images directly to Cloudinary
- 📋 **List & Delete** — Manage entire food catalog
- 📊 **Order Dashboard** — View all orders with customer details
- 🔄 **Status Management** — Update order status (Processing → Out for Delivery → Delivered)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React.js, Vite, Context API, React Router DOM |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas + Mongoose |
| **Authentication** | JSON Web Tokens (JWT) |
| **Payments** | Stripe Checkout |
| **Image Storage** | Cloudinary + Multer |
| **Deployment** | Vercel (Frontend + Admin), Render (Backend) |

---

## 📁 Project Structure

```
MERN-Food_delivery/
│
├── 📂 frontend/                # Customer-facing React application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Navbar/
│   │   │   ├── FoodItem/
│   │   │   ├── FoodDisplay/
│   │   │   └── ...
│   │   ├── pages/              # Route-level pages
│   │   │   ├── Home/
│   │   │   ├── Cart/
│   │   │   ├── PlaceOrder/
│   │   │   ├── MyOrders/
│   │   │   └── Verify/
│   │   ├── context/            # Global state (StoreContext)
│   │   └── assets/
│   └── .env
│
├── 📂 admin/                   # Admin panel React application
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Add/            # Add new food items
│   │   │   ├── List/           # List & delete items
│   │   │   └── Orders/         # Manage orders
│   │   └── assets/
│   └── .env
│
├── 📂 backend/                 # Express.js REST API
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/
│   │   ├── foodController.js
│   │   ├── userController.js
│   │   ├── cartController.js
│   │   └── orderController.js
│   ├── models/
│   │   ├── foodModel.js
│   │   ├── userModel.js
│   │   └── orderModel.js
│   ├── routes/
│   │   ├── foodRoute.js
│   │   ├── userRoute.js
│   │   ├── cartRoute.js
│   │   └── orderRoute.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   └── .env
│
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed and accounts created:

- [Node.js](https://nodejs.org/) v18+
- [MongoDB Atlas](https://www.mongodb.com/atlas) account
- [Stripe](https://stripe.com) account
- [Cloudinary](https://cloudinary.com) account

### 1. Clone the Repository

```bash
git clone https://github.com/Sahil-Mansuri-15/MERN-Food_delivery.git
cd MERN-Food_delivery
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/food-del
JWT_SECRET=your_super_secret_jwt_key
STRIPE_SECRET_KEY=sk_test_your_stripe_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
FRONTEND_URL=http://localhost:5173
```

```bash
npm run server
# Server starts at http://localhost:4000
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

```bash
npm run dev
# Runs at http://localhost:5173
```

### 4. Admin Panel Setup

```bash
cd admin
npm install
```

Create a `.env` file inside `admin/`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

```bash
npm run dev
# Runs at http://localhost:5174
```

---

## 🔑 Environment Variables Reference

### Backend `.env`

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB Atlas connection string | ✅ |
| `JWT_SECRET` | Secret key for signing JWT tokens | ✅ |
| `STRIPE_SECRET_KEY` | Stripe secret key for payment processing | ✅ |
| `CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name | ✅ |
| `CLOUDINARY_API_KEY` | Cloudinary API key | ✅ |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | ✅ |
| `FRONTEND_URL` | Frontend URL (for Stripe redirect) | ✅ |

### Frontend & Admin `.env`

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_BACKEND_URL` | Backend API base URL | ✅ |

---

## 📡 API Endpoints

### 🍔 Food
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/food/add` | Add new food item |
| `GET` | `/api/food/list` | Get all food items |
| `POST` | `/api/food/remove` | Remove food item |

### 👤 User
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/user/register` | Register new user |
| `POST` | `/api/user/login` | Login user |

### 🛒 Cart
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/cart/add` | Add item to cart |
| `POST` | `/api/cart/remove` | Remove item from cart |
| `POST` | `/api/cart/get` | Get user cart |

### 📦 Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/order/place` | Place new order |
| `POST` | `/api/order/verify` | Verify Stripe payment |
| `POST` | `/api/order/userorders` | Get user orders |
| `GET` | `/api/order/list` | Get all orders (admin) |
| `POST` | `/api/order/updatestatus` | Update order status |

---

## 💳 Test Payments

Use these Stripe test credentials to simulate payments:

```
Card Number : 4242 4242 4242 4242
Expiry Date : Any future date (e.g. 12/27)
CVV         : Any 3 digits (e.g. 123)
ZIP         : Any 5 digits (e.g. 12345)
```

---

## ☁️ Deployment

| Service | Platform | Notes |
|---------|----------|-------|
| **Frontend** | [Vercel](https://vercel.com) | Root dir: `frontend` |
| **Admin Panel** | [Vercel](https://vercel.com) | Root dir: `admin` |
| **Backend API** | [Render](https://render.com) | Root dir: `backend` |
| **Database** | [MongoDB Atlas](https://www.mongodb.com/atlas) | Free M0 cluster |
| **Images** | [Cloudinary](https://cloudinary.com) | Free tier (25GB) |

### Deploy Steps

1. Push code to GitHub
2. Deploy backend on **Render** → set all env variables
3. Deploy frontend on **Vercel** → set `VITE_BACKEND_URL` to Render URL
4. Deploy admin on **Vercel** → set `VITE_BACKEND_URL` to Render URL
5. Update `FRONTEND_URL` in Render env to Vercel frontend URL

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

---

<div align="center">


[![GitHub](https://img.shields.io/badge/GitHub-@Sahil--Mansuri--15-181717?style=flat-square&logo=github)](https://github.com/Sahil-Mansuri-15)

⭐ **Star this repo if you found it helpful!**

</div>
