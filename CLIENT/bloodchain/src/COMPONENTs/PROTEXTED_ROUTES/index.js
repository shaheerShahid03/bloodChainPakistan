import { useProtect } from "../../API/Api";
import { Navigate } from "react-router-dom";
import React from "react";

export const ProtectedRoutes = ({ children }) => {
  const checkAuth = useProtect();

  if (!checkAuth) {
    return <Navigate to="/signin" />;
  }
  return children;
};
export default ProtectedRoutes;
