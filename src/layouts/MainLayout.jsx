import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <>
      <div
        className={`h-auto [&>*]:px-[5%] md:[&>*]:px-[10%] md:[&>*]pt-8 bg-zinc-50 dark:bg-gray-800`}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
