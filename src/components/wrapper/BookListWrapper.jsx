import React, { useState } from "react";
import BookSearchBar from "components/book/BookSearchBar";
import { BsSearch } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function BookListWrapper({ children, isAdmin, post }) {
  const [isOpenSearchBar, setIsOpenSearchBar] = useState(false);

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
      <AnimatePresence mode="popLayout">
        <motion.div
          key={true ? "post" : "postList"}
          animate={{ opacity: 1, scaleY: 1 }}
          initial={{ opacity: 0, scaleY: 2 }}
          exit={{ opacity: 0, scaleY: 0.1 }}
          transition={{ duration: 0.3 }}
        >
          {!isOpenSearchBar ? (
            <>
              <div className={`${isOpenSearchBar && "hidden"}`}>{children}</div>
            </>
          ) : (
            <>{post}</>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
