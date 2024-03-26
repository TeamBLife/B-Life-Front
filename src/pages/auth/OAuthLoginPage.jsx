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
      const { nickname, role, accessToken } = await oAuthApi.login(
        provider,
        code
      );
      console.log(role);
      localStorage.setItem("accessToken", accessToken);
      setLoginUser({ nickname, role });
      navigate("/");
    })();
  }, [provider, code, setLoginUser, navigate]);

  return <div>로그인중 기다려.</div>;
}
