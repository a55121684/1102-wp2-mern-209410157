import React from "react";
import { useAppContext } from "../context/appContext_57";
import { Navigate } from "react-router-dom";

const ProtectedRoute_57 = ({ children }) => {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute_57;
