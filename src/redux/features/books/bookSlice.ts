import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../../types/book.type";

interface BookState {
  loading: boolean;
  books: IBook[];
  selectedBookId: string | null;
  error: string | null;
}

const initialState: BookState = {
  loading: false,
  books: [],
  error: null,
  selectedBookId: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setBooks: (state, action: PayloadAction<IBook[]>) => {
      state.books = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    addBook: (state, action: PayloadAction<IBook>) => {
      state.books.push(action.payload);
    },
    selectBook: (state, action: PayloadAction<string | null>) => {
      state.selectedBookId = action.payload;
    },
    updateBook: (
      state,
      action: PayloadAction<{ bookId: string; updatedBook: IBook }>
    ) => {
      const { bookId, updatedBook } = action.payload;
      const index = state.books.findIndex((book) => book._id === bookId);
      if (index !== -1) {
        state.books[index] = updatedBook;
      }
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book._id !== action.payload);
    },
  },
});

export const {
  setLoading,
  setBooks,
  setError,
  addBook,
  updateBook,
  deleteBook,
  selectBook,
} = bookSlice.actions;

export default bookSlice.reducer;
