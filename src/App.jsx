import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import MainPage from "./pages/MainPage";
import "./globals.css";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "pages/auth/SignupPage";
import BookDetailPage from "pages/book/BookDetailPage";
import OAuthLoginPage from "pages/auth/OAuthLoginPage";
import AuthCheckPage from "pages/auth/AuthCheckPage";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/book/:isbn" element={<BookDetailPage />} />
        <Route path="/oauth2/:provider" element={<OAuthLoginPage />} />
        <Route path="/auth/check/:email" element={<AuthCheckPage />} />
        <Route
          path="*"
          element={
            <NotFoundPage>
              <h1 className="text-white">존재하지 않는 페이지 입니다.</h1>
            </NotFoundPage>
          }
        />
      </Routes>
    </>
  );
}

export default App;
