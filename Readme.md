# 🌟 Social Media App

A modern, full-stack social media application built with React and Node.js, featuring real-time interactions, user authentication, and a sleek UI.

## 🚀 Live Preview

**Demo URL:** [https://its-demo-rose.vercel.app/](https://its-demo-rose.vercel.app/)

## ✨ Features

- 🔐 **Secure Authentication** - User registration and login with JWT
- 👤 **User Profiles** - Customizable user profiles with avatars
- 📝 **Post Creation** - Create and share posts with rich content
- 💬 **Real-time Interactions** - Like, comment, and share posts
- 🌙 **Dark/Light Mode** - Toggle between themes
- 📱 **Responsive Design** - Optimized for all devices

- 🎨 **Modern UI** - Clean and intuitive interface with animations
- 🔍 **User Discovery** - Find and connect with other users

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19 with Vite
- **Language:** JavaScript (ES6+)
- **Styling:** Tailwind CSS 4
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- 

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcryptjs
- **CORS:** Enabled for cross-origin requests


### Development Tools
- **Build Tool:** Vite
- **Package Manager:** npm
- **Linting:** ESLint
- **Testing:** Postman



## 📸 Screenshots


![Screenshot 1](/client/public/screenshots/s1.png)
![Screenshot 2](/client/public/screenshots/s2.png)
![Screenshot 3](/client/public/screenshots/s3.png)
![Screenshot 4](/client/public/screenshots/s4.png)
![Screenshot 4](/client/public/screenshots/s5.png)
![Screenshot 4](/client/public/screenshots/s6.png)



## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn
- MongoDB database (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/social-media-app.git
   cd social-media-app
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**
   
   **Server (.env in server directory):**
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
   
   **Client (.env in client directory):**
   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

5. **Start the development servers**
   
   **Backend (Terminal 1):**
   ```bash
   cd server
   npm run dev
   ```
   
   **Frontend (Terminal 2):**
   ```bash
   cd client
   npm run dev
   ```

   Navigate to [http://localhost:5173](http://localhost:5173)

## 📁 Project Structure

```
social-media-app/
├── client/                  # Frontend React application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── assets/         # Images and icons
│   │   ├── components/     # Reusable UI components
│   │   │   ├── modals/     # Modal components
│   │   │   ├── ui/         # Base UI components
│   │   │   ├── CreatePost.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── PostCard.jsx
│   │   │   └── ProfileCard.jsx
│   │   ├── config/         # Configuration files
│   │   ├── context/        # React Context providers
│   │   ├── pages/          # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Signup.jsx
│   │   ├── App.jsx         # Main App component
│   │   └── main.jsx        # Entry point
│   ├── package.json
│   └── vite.config.js
├── server/                  # Backend Node.js application
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   │   ├── auth.controllers.js
│   │   │   ├── post.controller.js
│   │   │   └── user.controller.js
│   │   ├── db/             # Database configuration
│   │   ├── middlewares/    # Custom middlewares
│   │   ├── models/         # MongoDB models
│   │   │   ├── post.model.js
│   │   │   └── user.model.js
│   │   ├── routes/         # API routes
│   │   │   ├── auth.routes.js
│   │   │   ├── post.routes.js
│   │   │   └── user.routes.js
│   │   ├── utils/          # Utility functions
│   │   └── server.js       # Server entry point
│   └── package.json
└── README.md
```

