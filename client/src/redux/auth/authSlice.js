import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      error: false,
      currentUser: null,
      isFetching: false,
    },
    register: {
      error: false,
      success: false,
      isFetching: false,
    },
    // forgot
    forgot: {
      error: false,
      success: false,
      isFetching: false,
    },
    logout: {
      error: false,
      success: false,
      isFetching: false,
    },
    auth: {
      error: false,
      user: null,
      loading: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.error = false;
      state.login.currentUser = action.payload;
    },
    loginFailed: (state) => {
      state.login.error = true;
      state.login.currentUser = null;
      state.login.isFetching = false;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
      state.register.error = false;
    },
    registerSuccess: (state) => {
      state.register.error = false;
      state.register.success = true;
      state.register.isFetching = false;
    },
    registerFailed: (state) => {
      state.register.error = true;
      state.register.isFetching = false;
      state.register.success = false;
    },
    // forgot
    forgotStart: (state) => {
      state.forgot.isFetching = true;
      state.register.error = false;
    },
    forgotSuccess: (state) => {
      state.forgot.isFetching = false;
      state.forgot.success = true;
      state.forgot.error = false;
    },
    forgotFailed: (state) => {
      state.forgot.error = true;
      state.forgot.isFetching = false;
      state.forgot.success = false;
    },

    authStart: (state) => {
      state.auth.error = false;
      state.auth.loading = true;
    },

    authSuccess: (state, action) => {
      state.auth.error = false;
      state.auth.loading = false;
      state.auth.user = action.payload;
    },

    authFailed: (state) => {
      state.auth.error = true;
      state.auth.loading = false;
      state.auth.user = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  registerStart,
  registerSuccess,
  registerFailed,
  forgotStart,
  forgotSuccess,
  forgotFailed,
  authStart,
  authSuccess,
  authFailed,
} = authSlice.actions;

export default authSlice.reducer;
