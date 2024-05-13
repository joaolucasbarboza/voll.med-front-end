import { StorageToken } from "@/utils/storage-token";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.request.use(
  function (config) {
    const token = StorageToken.accessToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log(token);
        
        console.log("Token foi adicionado");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
