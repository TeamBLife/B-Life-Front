import React from "react";

export default function BookBox({ book }) {
  return (
    <div className="pt-4">
      <div className="py-4 text-2xl font-bold text-center dark-text">
        {book.title}
      </div>
      <div className="flex justify-between [&>*]:px-4">
        <img src={book.coverUrl} alt="cover" />
        <div className="flex flex-col dark-text [&>*]:py-2">
          <div>{book.description}</div>
          <div>저자 : {book.author}</div>
        </div>
      </div>
    </div>
  );
}
