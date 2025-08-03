import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useUser } from "../context/UserContext"; 

const Signup = () => {
  const navigate = useNavigate();
  const { fetchUser } = useUser(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [username, setUsername] = useState("");

  const data = {
    email,
    password,
    fullname,
    username,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URI}/register`,
        data
      );
     
      if (response.data.success) {
        const { token } = response.data;
        
       
        localStorage.setItem("authToken", token);
            await fetchUser();
        //reset values
        setEmail("")
         setPassword("");
          setFullName("");
          setUsername("");

        toast.success("User created successfully");
        navigate("/");
      } else {
        toast.error("User creation failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-stone-900 border border-stone-800 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 text-white">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-stone-400 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full bg-stone-800 border border-stone-700 text-white placeholder-stone-500 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Full Name"
            />
          </div>

          <div>
            <label className="block text-sm text-stone-400 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full bg-stone-800 border border-stone-700 text-white placeholder-stone-500 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Username"
            />
          </div>

          <div>
            <label className="block text-sm text-stone-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-stone-800 border border-stone-700 text-white placeholder-stone-500 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>

          <div>
            <label className="block text-sm text-stone-400 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-stone-800 border border-stone-700 text-white placeholder-stone-500 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2.5 rounded-lg font-medium"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-stone-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
