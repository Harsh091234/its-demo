import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, Bell, User, LogOut, Menu, X } from "lucide-react";

const Navbar = () => {
  
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
const handleLogout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("userId");
  navigate("/login");
  
};
  return (
    <nav className="sticky top-0 z-50 bg-stone-950 border-b border-stone-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center h-14">
          <div className="text-white font-semibold text-xl tracking-tight">
            Demo App
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-9">
            <Link
              to="/"
              className="text-stone-300 text-sm hover:text-blue-400 flex items-center font-semibold"
            >
              <Home className="size-4 mr-1" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link
              to="/notifications"
              className="text-stone-300 text-sm hover:text-blue-400 flex items-center font-semibold"
            >
              <Bell className="size-4 mr-1" />
              <span className="hidden sm:inline">Notifications</span>
            </Link>
            <Link
              to="/profile"
              className="text-stone-300 text-sm hover:text-blue-400 flex items-center font-semibold"
            >
              <User className="size-4 mr-1" />
              <span className="hidden sm:inline">Profile</span>
            </Link>
            <button
              onClick={handleLogout}
              className="text-stone-300 text-sm hover:text-blue-400 flex items-center font-semibold"
            >
              <LogOut className="size-4 mr-1" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-stone-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-3 pt-3 pb-4 text-stone-300">
            <Link
              to="/"
              className="flex items-center text-sm hover:text-blue-400 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <Home className="size-4 mr-2" />
              Home
            </Link>
            <Link
              to="/notifications"
              className="flex items-center text-sm hover:text-blue-400 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <Bell className="size-4 mr-2" />
              Notifications
            </Link>
            <Link
              to="/profile"
              className="flex items-center text-sm hover:text-blue-400 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <User className="size-4 mr-2" />
              Profile
            </Link>
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="flex items-center text-sm hover:text-blue-400 font-semibold"
            >
              <LogOut className="size-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
