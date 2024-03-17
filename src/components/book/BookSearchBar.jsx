import { useState, useEffect } from "react";
import InfiScrollTrigger from "utils/InfiScrollTrigger";
import useDebounce from "hooks/useDebounce";
import bookApi from "apis/BookApi";
import BookCard from "components/book/BookCard";
import BookCardSkeleton from "./BookCardSkeleton";

export default function BookSearchBar({ isOpen }) {
  const [searchText, setSearchText] = useState("");
  const [debouncedValue, forceFetch] = useDebounce({
    delay: 2000,
    value: searchText,
  });
  const [books, setPosts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const checkEnter = (e) => {
    if (e.key === "Enter") {
      forceFetch();
    }
  };

  const textChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const getSearchBooks = async (page) => {
    const result = await bookApi.searchBook(debouncedValue, page);

    if (result !== undefined && result !== null) {
      page !== 1
        ? setPosts([...(books ?? []), ...result])
        : setPosts([...result]);
    } else {
      setPosts(result);
    }

    setIsSearching(false);

    return result?.length;
  };
  useEffect(() => {
    // fetch Items
    if (debouncedValue !== "") {
      // ServerAction Exception
      setPosts(undefined);
      setIsSearching(true);
      getSearchBooks(1);
    }
  }, [debouncedValue]);

  // Craete infinite Scroll

  console.log(books);

  return (
    <>
      <div className="flex flex-row-reverse items-center my-4">
        <input
          className="p-2 transition-shadow border-2 duration-300 focus:border-cyan-300 border-gray-600 rounded-lg focus:shadow-[0_0_5px_5px] focus:shadow-cyan-300 focus:outline-none dark:bg-gray-800 dark:text-white"
          onKeyDown={checkEnter}
          onChange={textChangeHandler}
          placeholder="Search Post"
          value={searchText}
        />
      </div>
      {!isOpen && (
        <>
          <div
            className={`${
              isSearching ? "animate-pulse" : ""
            } flex justify-center pb-4 text-2xl font-bold dark-text`}
          >
            {isSearching ? "검색중..." : "검색 결과"}
          </div>
          {books?.map((book) => (
            <BookCard key={book.isbn13 + debouncedValue} book={book} />
          ))}
          {isSearching && <BookCardSkeleton />}
          {books !== undefined && books?.length !== 0 && (
            <InfiScrollTrigger
              setIsSearching={setIsSearching}
              getSearchBooks={getSearchBooks}
              searchText={debouncedValue}
            />
          )}
        </>
      )}
    </>
  );
}
