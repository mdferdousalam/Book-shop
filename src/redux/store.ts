import { configureStore } from "@reduxjs/toolkit";
import userRoleReducer from "./features/user/userRoleSlice";
import { authApi } from "./features/user/userApi";
import { bookApi } from "./features/books/booksApi";
import bookReducer from "./features/books/bookSlice";
import { reviewApi } from "./features/review/reviewApi";
import reviewReducer from "./features/review/reviewSlice";

export const store = configureStore({
  reducer: {
    userRole: userRoleReducer,
    [authApi.reducerPath]: authApi.reducer,
    book: bookReducer,
    [bookApi.reducerPath]: bookApi.reducer,
    review: reviewReducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(bookApi.middleware)
      .concat(reviewApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
