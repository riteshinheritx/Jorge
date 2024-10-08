import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loaderFalse, loaderTrue } from "../redux/reducer/loaderReducer";

export const BASE_URL = process.env.BASE_URL;


// This will behave like a middleware for all api calling.
export const Request = axios.create({
  baseURL: BASE_URL,
  headers: {

  },
});

// Request.interceptors.response.use( (response) => {
//   return response.json()
// }, (error) => {
//   if (!error.response) {
//       return Promise.reject('Network Error')
//   } else {
//       return error.response
//   }

// });

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