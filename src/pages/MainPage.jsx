import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import bookApi from "apis/BookApi";
import BookCard from "components/book/BookCard";
import usePopularBooksStore from "store/popularbooks";

function MainPage() {
  const { popularBooks, setPopularBooks } = usePopularBooksStore();

  const getPopularBookList = async () => {
    const data = await bookApi.getPopularBookList();
    if (data !== undefined) {
      setPopularBooks(data);
    }
  };

  useEffect(() => {
    if (popularBooks.length === 0) getPopularBookList();
  }, [popularBooks]);

  return (
    <MainLayout>
      <div className="[&>*]:py-4">
        <h1 className="text-3xl dark-text">인기 도서</h1>
        {popularBooks &&
          popularBooks.map((book) => <BookCard book={book} key={book.isbn} />)}
      </div>
    </MainLayout>
  );
}

export default MainPage;
