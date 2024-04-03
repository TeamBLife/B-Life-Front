import React, { useEffect, useState } from "react";
import Review from "./Review";
import { getBookReview } from "apis/BookReviewApi";
import ReviewInputBox from "./ReviewInputBox";
import useUserStore from "store/user";

export default function ReviewBox({ id }) {
  const [reviews, setReviews] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const { user } = useUserStore();
  const [page, setPage] = useState(1);
  const [update, setUpdate] = useState();

  const getBookReviews = async (page, pageSize) => {
    const data = await getBookReview(id, page - 1, pageSize);
    if (data !== undefined) {
      setReviews(data.content);
      setTotalPages(data.totalPages);
    }
  };

  const addReview = (review) => {
    reviews !== undefined && reviews.length < 10
      ? setReviews([...reviews, review])
      : setReviews([review]);

    setUpdate(review);
  };

  const onDeleteReview = (removeId) => {
    setReviews((prev) => {
      return prev.filter((review) => review.id !== removeId);
    });
  };

  const onClickPage = (clikcedPage) => {
    setPage(clikcedPage);
  };

  useEffect(() => {
    getBookReviews(page, 10);
  }, [page, update]);
  console.log(reviews);
  return (
    <div className="grid w-full px-4 border-2 border-white">
      {user && <ReviewInputBox addReview={addReview} id={id} />}
      {reviews &&
        reviews.length !== 0 &&
        reviews.map((review) => (
          <Review
            nickname={review.nickname}
            point={review.point}
            key={review.id}
            comment={review.comment}
            reviewId={review.id}
            onDeleteReview={onDeleteReview}
          />
        ))}
      <div className="flex justify-center items-center [&>*]:px-2 border-2 py-4">
        {Array(totalPages)
          .fill(0)
          .map((item, index) => (
            <button
              key={`review${index + 1}`}
              onClick={() => {
                onClickPage(index + 1);
              }}
              className="dark-text"
            >
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
}
