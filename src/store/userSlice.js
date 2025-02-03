import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("userData")) || {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { saveUserData } = userSlice.actions;
export default userSlice.reducer;
