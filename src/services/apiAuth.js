import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const getToken = () => {
  return localStorage.getItem('token');
  
};


const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
});

export const login = async (email, password) => {
  const response = await api.post('login', {
    email: email,
    password: password,
  });
  return response.data;
};

export const getUser = async () => {
  const response = await api.get('user');
  return response.data;
};
