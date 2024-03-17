import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import AuthFormBox from "../../components/auth/AuthFormBox";
import MainLayout from "layouts/MainLayout";

function LoginPage({}) {
  return (
    <MainLayout>
      <AuthLayout>
        <AuthFormBox type="login" />
      </AuthLayout>
    </MainLayout>
  );
}

export default LoginPage;
