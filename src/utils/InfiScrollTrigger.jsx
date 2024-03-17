import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function InfiScrollTrigger({
  setIsSearching,
  getSearchBooks,
  searchText,
}) {
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [duringSearch, setDuringSearch] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const searchMorePosts = async (nextPage) => {
    const result = await getSearchBooks(nextPage);
    setDuringSearch(false);
    setPage(nextPage);

    if (result === 0) {
      setIsEnd(true);
    }
  };

  useEffect(() => {
    if (inView) {
      const next = page + 1;
      setIsSearching(true);
      setDuringSearch(true);
      searchMorePosts(next);
      setIsEnd(false);
    }
  }, [inView, searchText]);

  return (
    <>
      {duringSearch && null}
      {!isEnd && <div ref={ref}></div>}
    </>
  );
}
