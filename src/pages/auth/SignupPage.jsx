import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import AuthFormBox from "../../components/auth/AuthFormBox";
import MainLayout from "layouts/MainLayout";

function SignupPage({}) {
  return (
    <MainLayout>
      <AuthLayout>
        <AuthFormBox type="signup" />
      </AuthLayout>
    </MainLayout>
  );
}

export default SignupPage;
