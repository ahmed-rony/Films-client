import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

export const PrivateRouteIsUser = ({ children, ...rest }) => {
  const location = useLocation();

  return currentUser?.username ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export const PrivateRouteIsTalent = ({ children, ...rest }) => {
  const location = useLocation();

  return currentUser?.isTalent ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
