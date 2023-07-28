import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBook } from "../../../types/book.type";

interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export const bookApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://book-shop-server-mp3ytvdwe-mdferdousalam.vercel.app/api/v1/books",
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
    getAllBooks: builder.query<ApiResponse<IBook[]>, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      transformResponse: (response) => response as ApiResponse<IBook[]>,
    }),
    getSingleBook: builder.query<ApiResponse<IBook>, string>({
      query: (id) => ({
        url: `/bookdetails/${id}`,
        method: "GET",
      }),
      transformResponse: (response) => response as ApiResponse<IBook>,
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
