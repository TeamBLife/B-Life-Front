import MainLayout from "layouts/MainLayout";
import React from "react";
import NotFoundPage from "./NotFoundPage";

export default function NotSupportPage() {
  return (
    <MainLayout>
      <NotFoundPage>
        <h1 className="text-green-400">개발중인 페이지 입니다.</h1>
      </NotFoundPage>
    </MainLayout>
  );
}
