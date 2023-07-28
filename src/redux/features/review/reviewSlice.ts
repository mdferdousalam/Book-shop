import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IReview {
  _id: string;
  bookId: string;
  userId: string;
  rating: number;
  comment: string;
}

interface ReviewState {
  loading: boolean;
  reviews: IReview[];
  error: string | null;
}

const initialState: ReviewState = {
  loading: false,
  reviews: [],
  error: null,
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setReviews: (state, action: PayloadAction<IReview[]>) => {
      state.reviews = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    createReview: (state, action: PayloadAction<IReview>) => {
      state.reviews.push(action.payload);
    },
    updateReview: (state, action: PayloadAction<IReview>) => {
      const index = state.reviews.findIndex(
        (review) => review._id === action.payload._id
      );
      if (index !== -1) {
        state.reviews[index] = action.payload;
      }
    },
    deleteReview: (state, action: PayloadAction<string>) => {
      state.reviews = state.reviews.filter(
        (review) => review._id !== action.payload
      );
    },
  },
});

export const {
  setLoading,
  setReviews,
  setError,
  createReview,
  updateReview,
  deleteReview,
} = reviewSlice.actions;

export default reviewSlice.reducer;
