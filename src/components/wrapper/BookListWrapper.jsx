import React, { useState } from "react";
import BookSearchBar from "components/book/BookSearchBar";
import { BsSearch } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function BookListWrapper({ children, post }) {
  const [isOpenSearchBar, setIsOpenSearchBar] = useState(true);

  return (
    <>
      <div className="flex flex-row-reverse items-center gap-4 px-4 h-[60px]">
        <BsSearch
          size={"24px"}
          className="transition-transform duration-300 hover:cursor-pointer hover:scale-150 dark:text-white"
          onClick={() => setIsOpenSearchBar(!isOpenSearchBar)}
        />
      </div>
      <hr />
      <div className={`${!isOpenSearchBar && "hidden"}`}>
        <BookSearchBar isPost={isOpenSearchBar} />
      </div>
    </>
  );
}
