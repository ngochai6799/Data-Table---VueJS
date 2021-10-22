import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
  headers: { accept: "application/json" },
});

export default axiosInstance;
