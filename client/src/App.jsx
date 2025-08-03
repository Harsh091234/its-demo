import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import ProtectedRoute from "./config/ProtectedRoute";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  const location = useLocation();
  const hideNavRoutes = ["/login", "/register"];
  const shouldShowNav = !hideNavRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col h-screen bg-stone-950">
      {shouldShowNav && <Navbar />}
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with Profile */}
        {shouldShowNav && (
          <div className="w-[30%] min-w-xs hidden  px-4 pt-7 md:flex justify-center overflow-y-auto">
            <ProfileCard
              favatarSrc="https://randomuser.me/api/portraits/men/22.jpg"
              fullName="Ravi Sharma"
              username="ravi.dev"
              bio="Building cool things with React and TailwindCSS."
              location="New Delhi, India"
              joinedDate="March 2023"
            />
          </div>
        )}

        {/* Main content area with scroll */}
        <div
          className={`flex-1 w-full ${
            shouldShowNav ? "w-[70%]" : "w-full"
          } overflow-y-auto custom-scrollbar`}
        >
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/notifications"
              element={
                <ProtectedRoute>
                  <Notifications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
