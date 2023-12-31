import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IReview } from "../../../types/book.type";

export const reviewApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://book-shop-server-mp3ytvdwe-mdferdousalam.vercel.app/api/v1/review/",
  }),
  endpoints: (builder) => ({
    createReview: builder.mutation<IReview, Partial<IReview>>({
      query: (reviewData) => ({
        url: "/",
        method: "POST",
        body: reviewData,
      }),
    }),
    getAllReviewsForBook: builder.query<IReview[], string>({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "GET",
      }),
    }),
    getReviewById: builder.query<IReview, string>({
      query: (reviewId) => ({
        url: `/review/${reviewId}`,
        method: "GET",
      }),
    }),
    updateReview: builder.mutation<IReview, IReview>({
      query: (updatedReview) => ({
        url: `/review/${updatedReview._id}`,
        method: "PATCH",
        body: updatedReview,
      }),
    }),
    deleteReview: builder.mutation<void, string>({
      query: (reviewId) => ({
        url: `/review/${reviewId}`,
        method: "DELETE",
      }),
    }),
  }),
  reducerPath: "reviewApi",
});

export const {
  useCreateReviewMutation,
  useGetAllReviewsForBookQuery,
  useGetReviewByIdQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
