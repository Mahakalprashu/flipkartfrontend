import axios from "axios";

const API_URL = "http://localhost:8080/api/users"; // Your backend base URL

export const signupUser = (userData) => {
  return axios.post(`${API_URL}/signup`, userData);
};

export const loginUser = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};
