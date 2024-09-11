import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { fetchUserData, loginUser, registerUser } from "./UserApi";
import Cookies from "js-cookie";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      email: null,
      role: Cookies.get("role") || null,
      name: null,
    },
    isLoading: false,
    error: null,
    token: Cookies.get("token") || null,
    isAuth: !!Cookies.get("token"),
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuth = false;
      state.error = null;
      state.isLoading = false;
      Cookies.remove("token");
      Cookies.remove("role");
      
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isAuth = true;
        console.log(state.token, state.user.role);
        Cookies.set("token", state.token, { expires: 7 });
        Cookies.set("role", state.user.role, { expires: 7 });
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isAuth = true;
        console.log(state.token, state.user.role);
        Cookies.set("token", state.token, { expires: 7 });
        Cookies.set("role", state.user.role, { expires: 7 });
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isAuth = true;
        state.userRole = jwtDecode(action.payload.token).role; // Используем jwtDecode
        Cookies.set("role", state.userRole);
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
