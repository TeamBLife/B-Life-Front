import axios from "axios";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default AxiosInstance;
