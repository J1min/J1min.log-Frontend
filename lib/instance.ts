import axios, { AxiosError, AxiosInstance } from "axios";

const { NEXT_PUBLIC_BACK_DEV_URL } = process.env;

const instance: AxiosInstance = axios.create({
  baseURL: NEXT_PUBLIC_BACK_DEV_URL,
  timeout: 20000,
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

export default instance;
