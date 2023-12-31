import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserRoleState {
  role: string | null;
  userId: string | null;
}

const initialState: UserRoleState = {
  role: null,
  userId: null,
};


const userRoleSlice = createSlice({
  name: "userRole",
  initialState,
  reducers: {
    setUserRole: (
      state,
      action: PayloadAction<{ role: string; userId: string }>
    ) => {
      state.role = action.payload.role;
      state.userId = action.payload.userId;
    },
  },
});

export const { setUserRole } = userRoleSlice.actions;
export default userRoleSlice.reducer;
