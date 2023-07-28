import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IReview } from "../../types/book.type";
import { selectBook, deleteBook } from "../../redux/features/books/bookSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetSingleBookQuery } from "../../redux/features/books/booksApi";
import {
  useCreateReviewMutation,
  useGetAllReviewsForBookQuery,
} from "../../redux/features/review/reviewApi";
import jwtDecode from "jwt-decode";

const BookDetailsPage = () => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [review, setReview] = useState("");
  const [userId, setUserId] = useState("");
  const [rating, setRating] = useState<number>(0);
  // Get the userId from localStorage accessToken
  const accessToken = localStorage.getItem("accessToken") as string;
  if (accessToken) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decodedToken = jwtDecode<any>(accessToken);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setUserId(decodedToken._id);
  }

  const selectedBookId = useSelector(
    (state: RootState) => state.book.selectedBookId
  );

  const {
    data: selectedBook,
    isLoading,
    isError,
  } = useGetSingleBookQuery(selectedBookId!);
  console.log("selectedBook:", selectedBook);

  const {
    data: reviews,
    isLoading: reviewsLoading,
    isError: reviewsError,
  } = useGetAllReviewsForBookQuery(selectedBookId!);

  const [createReview] = useCreateReviewMutation();
  if (reviewsLoading) {
    return <div>Loading reviews...</div>;
  }

  if (reviewsError) {
    return <div>Error fetching reviews</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching book details</div>;
  }

  const handleEditClick = () => {
    dispatch(selectBook(selectedBookId));
    navigate("/edit-book");
  };

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleDeleteConfirmation = () => {
    dispatch(deleteBook(selectedBookId!));
    navigate("/");

    if (!selectedBook) {
      return <div>No book selected.</div>;
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleSubmitReview = async () => {
    try {
      const reviewData = {
        bookId: selectedBookId!,
        userId: userId,
        rating: rating,
        comment: review,
      };

      await createReview(reviewData)
        .unwrap()
        .then((data) => {
          console.log(data);
        });

      setReview("");
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <img
            src={selectedBook?.data.thumbnail}
            alt={selectedBook?.data.title}
            className="object-cover w-full h-80 rounded-t-lg"
          />
        </div>
        <div className="col-span-1">
          <h2 className="text-3xl font-bold mb-2">
            {selectedBook?.data.title}
          </h2>
          <p className="text-gray-700 mb-4">
            Author: {selectedBook?.data.author}
          </p>
          <p className="text-gray-700">Genre: {selectedBook?.data.genre}</p>
          <p className="text-gray-700">
            Publication Year: {selectedBook?.data.publicationYear}
          </p>
          <h3 className="text-xl font-bold mt-6">Reviews</h3>
          {reviews && reviews.length > 0 ? (
            <ul className="mt-4">
              {reviews.map((review: IReview) => (
                <li key={review._id} className="mb-2">
                  <p className="font-bold">Rating: {review.rating}</p>
                  <p className="text-gray-700">Comment: {review.comment}</p>
                  {/* You can display other review details here, e.g., User ID */}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4">No reviews yet.</p>
          )}
        </div>
      </div>

      <div>
        <input
          type="number"
          min={1}
          max={5}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-1/2 px-3 mt-5 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Rating (1-5)"
        />
        <textarea
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mt-4"
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)} // Step 4: Capture review text
        />
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md mr-2 hover:bg-blue-600"
          onClick={handleSubmitReview}
        >
          Submit Review
        </button>
      </div>

      <div className="mt-8">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md mr-2 hover:bg-blue-600"
          onClick={handleEditClick}
        >
          Edit Book
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"
          onClick={handleDeleteClick}
        >
          Delete Book
        </button>
      </div>

      {showDeleteConfirmation && (
        <div className="mt-4">
          <p>Are you sure you want to delete this book?</p>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md mr-2 hover:bg-red-600"
            onClick={handleDeleteConfirmation}
          >
            Confirm
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600"
            onClick={handleCancelDelete}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default BookDetailsPage;
