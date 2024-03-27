import BookListWrapper from "components/wrapper/BookListWrapper";
import MainLayout from "layouts/MainLayout";
import React from "react";

export default function BookSearchPage() {
  return (
    <>
      <MainLayout>
        <BookListWrapper />
      </MainLayout>
    </>
  );
}
