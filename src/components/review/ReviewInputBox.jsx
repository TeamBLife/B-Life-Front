import { createReview } from "apis/BookReviewApi";
import React, { useRef } from "react";

export default function ReviewInputBox({ id, addReview }) {
  const commentRef = useRef();
  const pointRef = useRef();

  const onSend = async () => {
    const comment = commentRef.current.value;
    const point = pointRef.current.value;

    if (point !== "" && comment !== "") {
      const data = await createReview(id, point, comment);
      if (data !== undefined) {
        commentRef.current.value = "";
        pointRef.current.value = "";
        addReview(data);
      }
    }
  };

  return (
    <div className="[&>*]:p-4 pb-8">
      <textarea
        ref={commentRef}
        placeholder="type comment"
        multiple
        className="w-full"
      />
      <input ref={pointRef} placeholder="별점 입력" />
      <button onClick={onSend} className="dark-text">
        확인
      </button>
      <hr />
    </div>
  );
}
