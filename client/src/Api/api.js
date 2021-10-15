import axios from "axios";

export const WEATHER_API_KEY = "df125f43340b93450ebd9da8d000b7d7";

const api = axios.create({
  baseURL: "http://localhost:8001/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
