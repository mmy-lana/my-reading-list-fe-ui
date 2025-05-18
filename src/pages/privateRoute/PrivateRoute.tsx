import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  // This can hold any props you need, but it's simplified here for now
}

const PrivateRoute: React.FC<PrivateRouteProps> = () => {
  const isAuthenticated = localStorage.getItem("token"); // Or use a global state to check auth

  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Otherwise, render the child routes
  return <Outlet />;
};

export default PrivateRoute;
