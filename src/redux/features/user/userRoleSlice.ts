import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: string = "";

const userRoleSlice = createSlice({
  name: "userRole",
  initialState,
  reducers: {
    setUserRole: (state, action: PayloadAction<string>) => {
      return action.payload; // Return the payload as the new state value
    },
  },
});

export const { setUserRole } = userRoleSlice.actions;
export default userRoleSlice.reducer;
