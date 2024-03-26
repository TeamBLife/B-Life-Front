import authApi from "apis/AuthApi";
import AuthLayout from "layouts/AuthLayout";
import MainLayout from "layouts/MainLayout";
import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AuthCheckPage() {
  const inputRef = useRef();
  const { email } = useParams();
  const navigate = useNavigate();

  const onlyNumber = (e) => {
    e.target.value = e.target.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*)\./g, "$1");
  };

  const checkAuth = async () => {
    const code = inputRef.current.value;
    const data = await authApi.check({
      code,
      email,
    });
    if (data === "Success") navigate("/login");
  };

  return (
    <MainLayout>
      <AuthLayout>
        <div className="[&>*]:px-4">
          <input
            ref={inputRef}
            onInput={onlyNumber}
            className="p-4"
            placeholder="인증번호 입력"
          />
          <button onClick={checkAuth} className="dark-text">
            확인
          </button>
        </div>
      </AuthLayout>
    </MainLayout>
  );
}
