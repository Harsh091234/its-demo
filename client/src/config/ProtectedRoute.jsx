import React, { Children } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
   
   const token = localStorage.getItem("authToken");
   if (!token) return <Navigate to={"/login"} replace />;
  return children;
}

export default ProtectedRoute