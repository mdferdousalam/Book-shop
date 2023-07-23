import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../../types/User";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-shop-r8eq.onrender.com/api/v1/auth",
  }),
  endpoints: (builder) => ({
    register: builder.mutation<IUser, Partial<IUser>>({
      query: (body) => ({
        url: "/signup",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<IUser, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = api;
