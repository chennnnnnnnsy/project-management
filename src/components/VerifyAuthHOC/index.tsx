import React from "react";
import { Navigate } from "react-router-dom";

const VerifyAuth = (Comp: React.FC) => {
  const isAuth = !!sessionStorage.getItem("pm-token");

  if (!isAuth) sessionStorage.clear();

  return isAuth ? <Comp /> : <Navigate to="/" replace />;
};

export default VerifyAuth;
