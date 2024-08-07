import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("authUser")) || {
      email: "",
      password: "",
      authUser: false,
    },
  },
  reducers: {
    login(state, action) {
      const userId = action.payload;
      const userValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(userId.email);
      const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/i.test(
        userId.password,
      );
      state.user = userId;
      if (!userValidation || !passwordValidation) {
        state.user.authUser = false;
      } else {
        state.user.authUser = true;
        const saveState = JSON.stringify(userId);
        sessionStorage.setItem("authUser", saveState);
      }
    },
    logout(state) {
      state.user = {
        email: "",
        password: "",
        authUser: false,
      };
      sessionStorage.clear();
    },
  },
});

export const { login, logout } = authReducer.actions;
export default authReducer.reducer;
