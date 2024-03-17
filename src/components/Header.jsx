import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import BookSearchBar from "./book/BookSearchBar";

function Header() {
  const [navbarOption, setNavbarOption] = useState("block");
  const [curY, setCurY] = useState(0);

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
  return (
    <div
      className={`${navbarOption} top-0 z-50 justify-between hidden py-8 mb-8 text-center light-bg dark:bg-gray-900 md:flex`}
    >
      <Link className={`NavItem font-bold dark:text-white`} to="/">
        BLife
      </Link>
    </div>
  );
}

export default Header;
