import { env } from "../config";
import axios, { AxiosError, AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: env.serverUrl,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
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
