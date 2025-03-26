import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/authProvider";

import React from "react";

const Auth = ({ allowedRoles }) => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  const isRoleAllowed = allowedRoles.find((role) => auth.role?.includes(role));

  return isRoleAllowed ? (
    auth.token ? (
      <Outlet />
    ) : (
      <Navigate to="/auth/login" state={{ from: location }} replace />
    )
  ) : auth.token ? (
    <Navigate
      to={"/dashboard/" + auth.role || ""}
      state={{ from: location }}
      replace
    />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export default Auth;
