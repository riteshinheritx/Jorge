import axios from "axios";
import { getLocalStorageItem } from "./storage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loaderFalse, loaderTrue } from "../redux/reducer/loaderReducer";

export const BASE_URL = process.env.BASE_URL;

export const TOKEN = getLocalStorageItem("token") || "sampleToken";

// This will behave like a middleware for all api calling.
export const Request = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data;",
    Accept: "*/*",
    token: TOKEN,
  },
});

export const AxiosInterceptor = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const resInterceptor = (response) => {
      dispatch(loaderTrue());
      return response;
    };
    const responseInterceptor = (response) => {
      dispatch(loaderFalse());
      return response;
    };
    const errInterceptor = (error) => {
      dispatch(loaderFalse());
      return Promise.reject(error);
    };
    const interceptor = Request.interceptors.request.use(
      resInterceptor,
      errInterceptor
    );
    const ResponseInterceptor = Request.interceptors.response.use(
      responseInterceptor,
      errInterceptor
    );
    return () => {
      Request.interceptors.request.eject(ResponseInterceptor);
      Request.interceptors.response.eject(interceptor);
    };
    // eslint-disable-next-line
  }, []);

  return children;
};

// // Set up the interceptor
// Request.interceptors.request.use(
//   (config) => {
//     // Dispatch showLoader action
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Request.interceptors.response.use(
//   (response) => {
//     // Dispatch hideLoader action
//     HideLoader();
//     return response;
//   },
//   (error) => {
//     // Dispatch hideLoader action
//     // HideLoader();

//     return Promise.reject(error);
//   }
// );
