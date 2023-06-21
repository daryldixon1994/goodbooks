import React from "react";
import { Navigate } from "react-router";
function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");
  if (token && isAdmin === "true") {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default PrivateRoute;
