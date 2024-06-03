import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.100.122.157:8080/",
});

api.interceptors.request.use(function (config) {
  
  const token = localStorage.getItem("token");

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
