import { Link } from "react-router-dom";
import React from "react";

export default function BookCard({ book, onSaveData }) {
  return (
    <Link
      to={`/book/${book.isbn13}`}
      onClick={onSaveData}
      state={{ book: book }}
      className="grid grid-cols-2 grid-rows-2 pt-8 pb-8 mb-8 border-2 border-gray-400 md:grid-rows-1 hover:border-opacity-100 hover:border-cyan-400 dark:text-white border-opacity-70"
    >
      <div className="justify-self-center w-[128px] h-[128px] md:w-[240px] md:h-[240px] border-4 dark:border-white border-black">
        {book.imgSrc !== "" ? (
          <img className="size-full" src={book.coverUrl} alt="Book" />
        ) : (
          <div className="flex flex-col w-[128px] h-[128px] md:w-[240px] md:h-[240px]  text-center justify-center ">
            <h1 className="text-sm md:text-2xl">No Image</h1>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between md:h-[240px] overflow-hidden ">
        <div className="flex flex-col justify-between px-4 pb-4 md:flex-row">
          <h1 className="text-lg font-bold md:text-2xl">{book.title}</h1>
          <h4 className="">{book.publicationDate.slice(0, 10)}</h4>
        </div>
        <div className="hidden row-start-2 pr-4 md:block">
          {(book.description?.length ?? 0) > 150
            ? `${book.description?.slice(0, 150)}...`
            : book.intro ?? ""}
        </div>
      </div>
      <div className="row-start-2 px-4 pt-4 pl-4 md:hidden">
        {(book.description?.length ?? 0) > 150
          ? `${book.description?.slice(0, 150)}...`
          : book.description ?? ""}
      </div>
    </Link>
  );
}
