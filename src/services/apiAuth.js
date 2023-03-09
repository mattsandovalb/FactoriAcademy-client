import axios from "axios";

const API_URL = "http://localhost:8000/api";

const token = localStorage.getItem('token');
const api = axios.create({
  baseURL: API_URL,
  headers: {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
  
  },
});

export const login = async (email, password) => {
  const response = await api.post(
    "login",
    {
      email: email,
      password: password,
    }
  );

  return response.data;
};

export const getUser = async () => {
  const response = await api.get("users/me");
  return response.data;
};
