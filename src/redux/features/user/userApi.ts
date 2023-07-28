import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser, IUserLoginResponse } from "../../../types/User";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://book-shop-server-mp3ytvdwe-mdferdousalam.vercel.app/api/v1/auth",
  }),
  endpoints: (builder) => ({
    register: builder.mutation<IUser, Partial<IUser>>({
      query: (body) => ({
        url: "/signup",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<
      IUserLoginResponse,
      { email: string; password: string }
    >({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
    }),
    requestUserRole: builder.mutation<
      { message: string },
      { userId: string; role: string }
    >({
      query: ({ userId, role }) => ({
        url: `/request-user-role`,
        method: "POST",
        body: { userId, role },
      }),
    }),
  }),
  reducerPath: "authApi",
});

export const { useRegisterMutation, useLoginMutation } = authApi;
