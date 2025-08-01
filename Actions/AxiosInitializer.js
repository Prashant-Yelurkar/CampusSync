
import { NEXT_PUBLIC_DEVELOPMENT_URL, NEXT_PUBLIC_PRODUCTION_URL } from '@env';
import axios from "axios";
import { getAuthToken } from "./Controllers/TokenController";
const __DEV__ = global?.__DEV__;

const baseURL = __DEV__
  ? NEXT_PUBLIC_DEVELOPMENT_URL
  : NEXT_PUBLIC_PRODUCTION_URL;

const myrouter = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

myrouter.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

myrouter.interceptors.response.use(
  (response) => ({
    status: response.status,
    data: response.data,
    success: true,
  }),
  (error) => {
    console.log( error);
    
    const errResponse = error.response || {};
    const data = errResponse.data || { message: "Something went wrong" };
    return Promise.resolve({
      status: errResponse.status || 500,
      data,
      success: false,
    });
  }
);

export default myrouter;
