// apiSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface ApiState {
  loading: boolean;
}

const initialState: ApiState = {
  loading: false,
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = apiSlice.actions;

export default apiSlice.reducer;

// Create a selector to access the API state from the RootState
export const selectApiState = (state: RootState) => state.api;
