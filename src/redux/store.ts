import { configureStore } from "@reduxjs/toolkit";
import userRoleReducer from "./features/user/userRoleSlice";
import { authApi } from "./features/user/userApi";


export const store = configureStore({
  reducer: {
    userRole: userRoleReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware), 
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
