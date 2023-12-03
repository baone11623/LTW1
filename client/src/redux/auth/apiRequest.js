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
} from "./authSlice";
import { endpoint } from "../../utils/endpoint";
import { LOCAL_STORAGE_TOKEN } from "../../utils/LocalStoreName";

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
