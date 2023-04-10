import axios from "axios";

export const newRequest = axios.create({
  baseURL: "http://localhost:30000/api/",
  withCredentials: true,
});
