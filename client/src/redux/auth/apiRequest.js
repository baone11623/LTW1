import axios from "axios";
import {
  forgotStart,
  forgotSuccess,
  forgotFailed,
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
  authFailed,
  authSuccess,
} from "./authSlice";
import { endpoint } from "../../utils/endpoint";
import { LOCAL_STORAGE_TOKEN } from "../../utils/LocalStoreName";
import { jwtDecode } from "jwt-decode";

export const getCurrentUser = async (nameLocal, dispatch, toast) => {
  let dateCurrent = new Date();
  try {
    const decodeToken = jwtDecode(localStorage[nameLocal]);
    if (decodeToken.exp < dateCurrent.getTime() / 1000) {
      localStorage.removeItem(nameLocal);
      dispatch(authFailed());
    }
    const res = await axios.get(`${endpoint}/current-user`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN)}`,
      },
    });
    dispatch(authSuccess(res.data));
  } catch (error) {
    localStorage.removeItem(nameLocal);
    dispatch(authFailed());
    toast.warning(
      "You have been logged out or your session has expired. Please log in again!"
    );
    return;
  }
};

export const loginUser = async (dataForm, dispatch, navigate, toast) => {
  dispatch(loginStart());
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const res = await axios.post(`${endpoint}/login`, dataForm, config);
    dispatch(loginSuccess(res.data));
    localStorage.setItem(LOCAL_STORAGE_TOKEN, res.data.accessToken);
    navigate("/");
    toast.success("Logged in successfully");
  } catch (error) {
    dispatch(loginFailed());
    toast.error(`${error?.response?.data?.message || "An error occurred"}`);
  }
};

// registerUser
export const registerUser = async (dataForm, dispatch, toast, navigate) => {
  dispatch(registerStart());
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    await axios.post(`${endpoint}/register`, dataForm, config);

    dispatch(registerSuccess());
    navigate("/login");
    toast.success("Registered successfully");
  } catch (error) {
    dispatch(registerFailed());
    toast.error(`${error?.response?.data?.message} || "An error occurred`);
  }
};

// forgotUser

export const forgotUser = async (dataForm, dispatch, toast, navigate) => {
  dispatch(forgotStart());
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    await axios.post(`${endpoint}/forgot`, dataForm, config);
    dispatch(forgotSuccess());
    navigate("/login");
    toast.success("Password changed successfully");
  } catch (error) {
    dispatch(forgotFailed());
    toast.error(`${error?.response?.data?.message} || "An error occurred"`);
  }
};
