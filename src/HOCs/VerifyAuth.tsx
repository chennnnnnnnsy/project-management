import React from "react";
import { Navigate } from "react-router-dom";

const VerifyAuth = (component: React.FC) => {
  const isAuth = true;
  return isAuth ? component : <Navigate to="/" replace={true} />;
};

export default VerifyAuth;
