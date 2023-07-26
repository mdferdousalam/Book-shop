import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ApiState {
  loading: boolean;
}

const initialState: ApiState = {
  loading: false,
};

const apiSlice = createSlice({
  name: "authApi",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = apiSlice.actions;

export default apiSlice.reducer;
