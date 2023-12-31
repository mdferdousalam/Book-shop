import { useGetAllBooksQuery } from "../../redux/features/books/booksApi";
import BookCard from "./BookCard";
import { IBook } from "../../types/book.type";

const AllBooks = () => {
  const { data: apiResponse, isLoading, isError } = useGetAllBooksQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError || !apiResponse) {
    return <div>Error fetching books</div>;
  }
 
  const books: IBook[] = apiResponse.data;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books?.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default AllBooks;
