import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");

    console.log(token);
    

    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});