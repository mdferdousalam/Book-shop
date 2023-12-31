import { useState } from "react";
import UseTitle from "../../hooks/UseTitle";
import { useAddBookMutation } from "../../redux/features/books/booksApi";

export default function AddBook() {
  UseTitle("Add Book");

  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
    price: 0,
    author: "",
    genre: "",
    publicationYear: 20,
  });

  const handleChange = (e: {
    target: { name: string | number; value: string | number };
  }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [addBookMutation, { isLoading }] = useAddBookMutation();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    addBookMutation(formData);
    console.log(formData);
    setFormData({
      title: "",
      thumbnail: "",
      price: 0,
      author: "",
      genre: "",
      publicationYear: 0,
    });
  };

  return (
    <div className="flex justify-center mt-8">
      <form
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Add Book</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="thumbnail"
          >
            Thumbnail URL
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            type="text"
            id="thumbnail"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="author"
          >
            Author
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="genre"
          >
            Genre
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="publicationYear"
          >
            Publication Year
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            type="number"
            id="publicationYear"
            name="publicationYear"
            value={formData.publicationYear}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white  px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Adding book..." : "Add Book"}
          </button>
        </div>
      </form>
    </div>
  );
}
