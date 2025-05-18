import axios from "axios";

// Set up base URL for the backend API
const api = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your backend URL if it's different
});

export default api;
