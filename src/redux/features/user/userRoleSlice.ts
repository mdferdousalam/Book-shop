import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const userRoleSlice = createSlice({
  name: "userRole",
  initialState,
  reducers: {
    setUserRole: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUserRole } = userRoleSlice.actions;
export default userRoleSlice.reducer;
