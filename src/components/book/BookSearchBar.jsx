import { useState, useEffect } from "react";
import InfiScrollTrigger from "utils/InfiScrollTrigger";
import useDebounce from "hooks/useDebounce";
import bookApi from "apis/BookApi";
import BookCard from "components/book/BookCard";
import BookCardSkeleton from "./BookCardSkeleton";
import { toInteger } from "lodash";

export default function BookSearchBar({ isOpen }) {
  const [searchText, setSearchText] = useState("");
  const [debouncedValue, forceFetch] = useDebounce({
    delay: 2000,
    value: searchText,
  });
  const [books, setBooks] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [page, setPage] = useState(1);
  const [isScrollable, setIsScrollable] = useState(false);

  const checkEnter = (e) => {
    if (e.key === "Enter") {
      forceFetch();
    }
  };

  const textChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const getSearchBooks = async (page) => {
    const result = await bookApi.searchBook(searchText, page);

    if (result !== undefined && result !== null) {
      page !== 1
        ? setBooks([...(books ?? []), ...result])
        : setBooks([...result]);
    } else {
      setBooks(result);
    }

    setIsSearching(false);

    return result?.length;
  };
  useEffect(() => {
    if (
      debouncedValue !== "" &&
      sessionStorage.getItem("savedBookSearch") !== debouncedValue
    ) {
      setBooks(undefined);
      setIsSearching(true);
      setPage((prevPage) => {
        getSearchBooks(1);
        return 1;
      });
    }
  }, [debouncedValue]);

  const saveDataAndScroll = () => {
    sessionStorage.setItem("savedBookSearch", debouncedValue);
    sessionStorage.setItem(debouncedValue, JSON.stringify(books));
    sessionStorage.setItem("bookSearchPage", `${page}`);
    sessionStorage.setItem(
      "scroll",
      window.scrollY === null ? "1" : `${window.scrollY}`
    );
  };
  console.log(books);

  useEffect(() => {
    const savedSearchText = sessionStorage.getItem("savedBookSearch");
    const savedData = sessionStorage.getItem(savedSearchText);
    const savedPage = sessionStorage.getItem("bookSearchPage");

    console.log(debouncedValue);
    if (savedSearchText !== undefined) {
      setBooks(JSON.parse(savedData));
      setSearchText(savedSearchText);
      setPage(toInteger(savedPage));
      setIsScrollable(true);
    }
  }, []);

  useEffect(() => {
    // 리스트가 렌더링 되면(isScrollable === true) 저장된 스크롤 위치로 이동
    const savedScroll = sessionStorage.getItem("scroll");
    if (!isScrollable || !savedScroll) return;
    window.scrollTo(0, Number(savedScroll));
  }, [isScrollable]);

  return (
    <>
      <div className="flex flex-row-reverse items-center my-4">
        <input
          className="p-2 transition-shadow border-2 duration-300 focus:border-cyan-300 border-gray-600 rounded-lg focus:shadow-[0_0_5px_5px] focus:shadow-cyan-300 focus:outline-none dark:bg-gray-800 dark:text-white"
          onKeyDown={checkEnter}
          onChange={textChangeHandler}
          placeholder="Search Book Title"
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
          {books?.map((book, index) => (
            <BookCard
              key={book.isbn13 + book.title + index}
              book={book}
              onSaveData={saveDataAndScroll}
            />
          ))}
          {isSearching && <BookCardSkeleton />}
          {books !== undefined && books?.length !== 0 && (
            <InfiScrollTrigger
              setIsSearching={setIsSearching}
              getSearchBooks={getSearchBooks}
              searchText={searchText}
              beforePage={page}
              onSetPage={setPage}
            />
          )}
        </>
      )}
    </>
  );
}
