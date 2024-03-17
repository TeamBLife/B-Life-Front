import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage({ children }) {
  return (
    <div className="flex flex-col items-center justify-center h-[85vh] gap-8">
      <div className="text-xl font-bold animate-bounce">{children}</div>
      <Link
        to="/"
        className="p-4 border-4 rounded-full text-cyan-300 border-cyan-300 hover:animate-spin"
      >
        돌아가기
      </Link>
    </div>
  );
}
