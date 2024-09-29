import axios from "axios";

const api = axios.create({
  baseURL: "https://hackasol.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
