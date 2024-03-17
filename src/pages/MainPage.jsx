import React from "react";
import MainLayout from "../layouts/MainLayout";
import BookListWrapper from "components/wrapper/BookListWrapper";

function MainPage() {
  return (
    <MainLayout>
      <BookListWrapper />
    </MainLayout>
  );
}

export default MainPage;
