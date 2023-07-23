import { configureStore } from "@reduxjs/toolkit";
import userRoleReducer from "./features/user/userRoleSlice";
import apiReducer from "./features/user/apiSlice"; // Import apiReducer from apiSlice.ts
import { api } from "./features/user/userApi";

export const store = configureStore({
  reducer: {
    userRole: userRoleReducer,
    api: apiReducer,
 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
