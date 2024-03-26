import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthInput from "./AuthInput";
import AuthBtn from "./AuthBtn";
import useUserStore from "store/user";
import oAuthApi from "apis/OAuthApi";
import authApi from "apis/AuthApi";

export default function AuthFormBox({ type }) {
  const [isAllTyped, setIsAllTyped] = useState({
    email: false,
    pw: false,
    rPw: false,
    nickname: false,
  });
  const [signupValues, setSignupValues] = useState({
    email: "",
    pw: "",
    rPw: "",
    nickname: "",
  });
  const navigate = useNavigate();
  const { setLoginUser } = useUserStore();

  const checkIsAllTyped = () => {
    return Object.values(isAllTyped).includes(false);
  };

  const outFocusEvent = (e) => {
    if (e.target.value !== "") {
      setIsAllTyped({ ...isAllTyped, [e.target.name]: true });
    } else {
      setIsAllTyped({ ...isAllTyped, [e.target.name]: false });
    }
    setSignupValues({ ...signupValues, [e.target.name]: e.target.value });
  };

  const onClickSignUp = async () => {
    if (signupValues.pw === signupValues.rPw && !checkIsAllTyped()) {
      const result = await authApi.signup(
        {
          email: signupValues.email,
          password: signupValues.pw,
          nickname: signupValues.nickname,
        },
        "USER"
      );
      console.log(result);
      if (result.status === "WAIT") {
        navigate(`/auth/check/${result.email}`);
      }
    }
  };

  const onClickLogin = async () => {
    const loginValue = {
      email: signupValues.email,
      password: signupValues.pw,
    };

    const { accessToken, nickname } = await authApi.login(loginValue);
    if (nickname !== undefined) {
      localStorage.setItem("accessToken", accessToken);
      setLoginUser(nickname);
      navigate("/");
    }
  };

  const onClickOAuthLogin = async (provider) => {
    const url = await oAuthApi.getRedirectUrl(provider);
    window.location.href = url;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow px-[30px] pb-[45px] md:px-[55px] pt-[40px] md:pt-[45px] md:pb-[52px]">
      <div className=" text-gray-800 text-2xl font-semibold font-['Pretendard'] leading-9 pb-[35px] md:px-[40px]">
        {type === "login" ? "Welcome !" : "Create Account"}
      </div>
      <div className=" flex-col justify-start items-start gap-5 inline-flex pb-[20px] md:pb-[10px]">
        <div className="flex-col justify-start items-start gap-2.5 flex">
          <AuthInput
            key="email"
            outFocus={outFocusEvent}
            id="email"
            placeholder="Email"
          />

          <AuthInput
            key={"pw"}
            outFocus={outFocusEvent}
            id={"pw"}
            placeholder="Password"
            type="password"
          />
          {type === "signup" && (
            <>
              <AuthInput
                outFocus={outFocusEvent}
                key="rPw"
                id="rPw"
                placeholder="Repeat Password"
                type="password"
              />
              <AuthInput
                outFocus={outFocusEvent}
                key="nickname"
                id="nickname"
                placeholder="nickname"
              />
            </>
          )}
        </div>
      </div>
      {type === "login" ? (
        <AuthBtn onClick={onClickLogin} btnText={"LOGIN"} />
      ) : (
        <AuthBtn
          onClick={onClickSignUp}
          disabled={checkIsAllTyped()}
          btnText={"SIGN UP"}
        />
      )}
      {type === "login" && (
        <div className="justify-start items-start gap-2.5 inline-flex md:pt-[40px] pt-[20px]">
          <div className="text-[11px] text-neutral-400 md:text-[17px] font-semibold font-['Pretendard'] leading-relaxed">
            Need an account?
          </div>
          <Link
            to={"/signup"}
            className="text-[11px] text-gray-800 md:text-[17px] font-semibold font-['Pretendard'] leading-relaxed"
          >
            Sign up
          </Link>
        </div>
      )}
      {type === "login" && (
        <button
          onClick={() => {
            onClickOAuthLogin("kakao");
          }}
        >
          KakaoLogin
        </button>
      )}
    </div>
  );
}
