import { IBook } from "../../types/book.type";

const BookCard = ({ book }: { book: IBook }) => {
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
      </div>
    </div>
  );
};

export default BookCard;
