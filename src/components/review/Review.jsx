import { deleteReview, updateReview } from "apis/BookReviewApi";
import React, { useState } from "react";
import useUserStore from "store/user";

export default function Review({
  reviewId,
  comment,
  nickname,
  point,
  onDeleteReview,
}) {
  const { user } = useUserStore();
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [modifyComment, setModifyComment] = useState();
  const [discription, setdscription] = useState(comment);

  const sendModifyData = async () => {
    await updateReview(reviewId, point, modifyComment);
    setIsModifyMode(!isModifyMode);
    setdscription(modifyComment);
  };

  const changeModifyMode = () => {
    setModifyComment(comment);
    setIsModifyMode(!isModifyMode);
  };

  const onChange = (e) => {
    setModifyComment(e.target.value);
  };

  const removeReview = async () => {
    const data = await deleteReview(reviewId);
    if (!data) onDeleteReview(reviewId);
  };

  return (
    <div className="py-4">
      <div className="flex justify-between pb-2">
        <div className="flex [&>*]:px-4 px-4">
          <h1 className="dark-text">{nickname}</h1>
          <div className="dark-text">{point}</div>
        </div>
        {user.nickname === nickname && (
          <div className="flex [&>*]:px-4 px-4">
            <button
              className="dark-text"
              onClick={isModifyMode ? sendModifyData : changeModifyMode}
            >
              {!isModifyMode ? "수정" : "완료"}
            </button>
            <button onClick={removeReview} className="dark-text">
              삭제
            </button>
          </div>
        )}
      </div>
      {!isModifyMode ? (
        <div className="p-4 dark-text">{discription}</div>
      ) : (
        <textarea
          className="w-full p-4"
          onChange={onChange}
          defaultValue={modifyComment}
        />
      )}

      <hr />
    </div>
  );
}
