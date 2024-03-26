import oAuthApi from "apis/OAuthApi";
import React, { useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import useUserStore from "store/user";

export default function OAuthLoginPage() {
  const { provider } = useParams();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const { setLoginUser } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { nickname, accessToken } = await oAuthApi.login(provider, code);
      localStorage.setItem("accessToken", accessToken);
      setLoginUser(nickname);
      navigate("/");
    })();
  }, [provider, code, setLoginUser, navigate]);

  return <div>로그인중 기다려.</div>;
}
