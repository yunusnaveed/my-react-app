import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Import your auth slice
import userReducer from "./userSlice"; // New user slice

const store = configureStore({
  reducer: {
    auth: authReducer, // Register the auth slice
    user: userReducer,
  },
});

export default store;
