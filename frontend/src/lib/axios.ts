import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://echo-production-0d01.up.railway.app",
  withCredentials: true,
});
