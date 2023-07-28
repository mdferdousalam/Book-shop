import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IReview } from "../../types/book.type";
import { selectBook, deleteBook } from "../../redux/features/books/bookSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetSingleBookQuery } from "../../redux/features/books/booksApi";

const BookDetailsPage = () => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedBookId = useSelector(
    (state: RootState) => state.book.selectedBookId
  );
  console.log("selectedBookId:", selectedBookId);

  const {
    data: selectedBook,
    isLoading,
    isError,
  } = useGetSingleBookQuery(selectedBookId!);
  console.log("selectedBook:", selectedBook);

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
    navigate("/all-books");

    if (!selectedBook) {
      return <div>No book selected.</div>;
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
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
          {selectedBook?.reviews && selectedBook?.reviews.length > 0 ? (
            <ul className="mt-4">
              {selectedBook.reviews.map((review: IReview) => (
                <li key={review.id} className="mb-2">
                  <p className="font-bold">Rating: {review.rating}</p>
                  <p className="text-gray-700">Comment: {review.comment}</p>
                  <p className="text-gray-700">User: {review.user}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4">No reviews yet.</p>
          )}
        </div>
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
