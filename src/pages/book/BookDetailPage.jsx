import BookListWrapper from "components/wrapper/BookListWrapper";
import MainLayout from "layouts/MainLayout";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "pages/NotFoundPage";
import BookBox from "components/book/BookBox";
import bookApi from "apis/BookApi";

export default function BookDetailPage() {
  const { isbn } = useParams();
  // const initData = useLocation().state; 데이터를 쌓기 위하여 무조건 서버 요청을 하는 방향으로 잡았다.
  const initData = null;
  const [book, setBook] = useState();

  const getBookByisbn = async () => {
    const result = await bookApi.getBookByIsbn(isbn);
    setBook(result);
  };

  useEffect(() => {
    if (initData === null) {
      getBookByisbn();
    } else setBook(initData.book);
  }, [initData, isbn]);

  return (
    <MainLayout>
      <BookListWrapper />
      {book !== undefined ? (
        <BookBox book={book} />
      ) : (
        <NotFoundPage>
          <h1>존재하지 않음</h1>
        </NotFoundPage>
      )}
    </MainLayout>
  );
}
