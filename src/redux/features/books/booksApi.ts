import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBook } from "../../../types/book.type";

export const bookApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/books",
  }),
  endpoints: (builder) => ({
    addBook: builder.mutation<IBook, Partial<IBook>>({
      query: (bookData) => ({
        url: "/",
        method: "POST",
        body: bookData,
      }),
    }),
    editBook: builder.mutation<IBook, { id: string; bookData: Partial<IBook> }>(
      {
        query: ({ id, bookData }) => ({
          url: `/${id}`,
          method: "PATCH",
          body: bookData,
        }),
      }
    ),
    deleteBook: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
    getAllBooks: builder.query<IBook[], void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
    getSingleBook: builder.query<IBook, string>({
      query: (id) => ({
        url: `/bookdetails/${id}`,
        method: "GET",
      }),
    }),
  }),
  reducerPath: "bookApi",
});

export const {
  useAddBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
  useGetAllBooksQuery,
  useGetSingleBookQuery,
} = bookApi;
