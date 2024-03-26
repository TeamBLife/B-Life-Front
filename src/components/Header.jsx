import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import useUserStore from "store/user";

function Header() {
  const [navbarOption, setNavbarOption] = useState("block");
  const [curY, setCurY] = useState(0);
  const { user, setLoginUser } = useUserStore();

  useEffect(() => {
    const scrollHandler = debounce(() => {
      const currentY = window.scrollY;

      if (curY > currentY) setNavbarOption("sticky");
      else setNavbarOption("block");

      setCurY(currentY);
    }, 200);
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [curY]);

  const onClickLogout = () => {
    setLoginUser();
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("accessToken");
  };

  return (
    <div
      className={`${navbarOption} top-0 z-50 justify-between hidden py-8 mb-8 text-center light-bg dark:bg-gray-900 md:flex`}
    >
      <Link className={`NavItem font-bold dark:text-white`} to="/">
        BLife
      </Link>
      <div className="[&>*]:dark-text">
        {user === undefined ? (
          <Link to={"/login"} className="dark-text">
            로그인
          </Link>
        ) : (
          <div className="[&>*]:px-2">
            <Link className="dark-text" to={"/userinfo"}>
              {user.nickname}
            </Link>
            <button onClick={onClickLogout} className="dark-text">
              로그아웃
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
