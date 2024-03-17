import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthInput from "./AuthInput";
import AuthBtn from "./AuthBtn";
import AuthAxiosIns from "apis/AuthApi";
import useUserStore from "store/user";

export default function AuthFormBox({ type }) {
  const [isAlreadyEmail, setIsAlreadyEmail] = useState(false);
  const [isAllTyped, setIsAllTyped] = useState({
    email: false,
    pw: false,
    rPw: false,
    name: false,
  });
  const [signupValues, setSignupValues] = useState({
    email: "",
    pw: "",
    rPw: "",
    name: "",
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

  const outFocusEmailEvent = async (e) => {
    if (e.target.value !== "") {
      setIsAlreadyEmail(false);
      setIsAllTyped({ ...isAllTyped, [e.target.name]: true });
      const result = await AuthAxiosIns.emailDupCheck({
        email: e.target.value,
      });
      if (result.exist) {
        setIsAllTyped({ ...isAllTyped, [e.target.name]: false });
        setIsAlreadyEmail(true);
      }
    } else {
      setIsAllTyped({ ...isAllTyped, [e.target.name]: false });
    }
    setSignupValues({ ...signupValues, [e.target.name]: e.target.value });
  };

  const onClickSignUp = async () => {
    if (signupValues.pw === signupValues.rPw && !checkIsAllTyped()) {
      const result = await AuthAxiosIns.signUp({
        email: signupValues.email,
        password: signupValues.pw,
        name: signupValues.name,
        company: signupValues.company,
      });
      if (result.joinResult) {
        navigate("/login");
      }
    }
  };

  const onClickLogin = async () => {
    const loginValue = {
      email: signupValues.email,
      password: signupValues.pw,
    };

    const result = await AuthAxiosIns.login(loginValue);
    if (result !== undefined) {
      setLoginUser(result);
      navigate("/");
    }
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
                key="name"
                id="name"
                placeholder="Name"
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
      {type === "signup" && isAlreadyEmail && (
        <p className="text-[#FF2E2E] pt-[5px] text-[11px] md:text-[14px]">
          Email Already Exists
        </p>
      )}
    </div>
  );
}
