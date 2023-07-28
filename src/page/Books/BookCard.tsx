import { useNavigate } from "react-router-dom";
import { IBook } from "../../types/book.type";
import { useDispatch } from "react-redux";
import { selectBook } from "../../redux/features/books/bookSlice";
const BookCard = ({ book }: { book: IBook }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    dispatch(selectBook(book._id));
    navigate("/bookdetails");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={book.thumbnail}
        alt={book.title}
        className="object-cover w-full h-40 rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{book.title}</h2>
        <p className="text-gray-700 mb-4">Author: {book.author}</p>
        <p className="text-gray-700">Genre: {book.genre}</p>
        <p className="text-gray-700">Price: ${book.price}</p>
        <p className="text-gray-700">
          Publication Year: {book.publicationYear}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md transition-all hover:bg-blue-600"
          onClick={handleDetailsClick}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;
