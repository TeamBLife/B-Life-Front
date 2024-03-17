import React, { useEffect } from "react";
import useUserStore from "../store/user";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children }) {
  const { user } = useUserStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (user !== undefined) navigate("/");
  });

  return (
    <div className="flex items-center justify-center h-screen">{children}</div>
  );
}

export default AuthLayout;
