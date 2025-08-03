import React, { useState } from "react";
import { Loader, Lock, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";

import axios from "axios";
import { toast } from "react-hot-toast";
import { useUser } from "../context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { fetchUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    email,
    password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URI}/login`,
        data
      );
      console.log("data: ", response.data);
     if (response.data.success) {
       const { token} = response.data;

       localStorage.setItem("authToken", token);
 
           
       // Reset values
       setEmail("");
       setPassword("");

  
    
     

       toast.success("User authenticated successfully");
       navigate("/");
     }

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-white flex flex-col justify-center px-4">
      <div className="p-6 sm:p-8 w-full sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-stone-900 rounded-2xl shadow-xl border border-stone-800 transition-all duration-300">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center tracking-tight bg-gradient-to-r from-white via-stone-300 to-white text-transparent bg-clip-text">
          Welcome Back
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-stone-800 border border-stone-700 text-white placeholder-stone-500 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-stone-800 border border-stone-700 text-white placeholder-stone-500 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full py-2.5 px-4 bg-blue-600 font-semibold 
              rounded-lg shadow hover:bg-blue-700 transition duration-150 
            
              text-stone-50 pointer text-base sm:text-sm"
          >
            Login
          </button>
        </form>
      </div>

      <div className="px-4 py-6 text-center">
        <p className="text-xs sm:text-sm text-stone-400">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-400 hover:underline transition duration-150"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
