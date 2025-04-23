// src/components/ProtectedRoute.jsx
import React from "react";
import { useWallet } from "../hooks/useWallet";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isConnected } = useWallet();
  const location = useLocation();

  if (!isConnected) {
    return <Navigate to="/connect" replace state={{ from: location.pathname }} />;
  }

  return children;
}
