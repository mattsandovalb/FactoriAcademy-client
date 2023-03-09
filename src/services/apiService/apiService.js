import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/';

const token = localStorage.getItem('token');

const getCourses = async () => {
  const response = await axios.get(`${apiUrl}courses`);
  return response.data;
};

const getCourseById = async (id) => {
  const response = await axios.get(`${apiUrl}courses/${id}`);
  return response.data;
};

const createCourse = async (formData) => {
  const response = await axios.post(`${apiUrl}courses`, formData, {
    headers: {
      
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};

const updateCourse = async (id, formData) => {
  const response = await axios.patch(`${apiUrl}courses/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};

const deleteCourse = async (id) => {
  const response = await axios.delete(`${apiUrl}courses/${id}`,{
    headers:{
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

const getUsers = async () => {
  const response = await axios.get(`${apiUrl}users`);
  return response.data;
};

const getUserById = async (id) => {
  const response = await axios.get(`${apiUrl}users/${id}`);
  return response.data;
};

const createUser = async (formData) => {
  const response = await axios.post(`${apiUrl}users`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};

const updateUser = async (id, formData) => {
  const response = await axios.put(`${apiUrl}users/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};

const deleteUser = async (id) => {
  const response = await axios.delete(`${apiUrl}users/${id}`,{
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  
  return response.data;
};
const getTasks = async () => {
  const response = await axios.get(`${apiUrl}exercices`);
  return response.data;
};

const getTaskById = async (id) => {
  const response = await axios.get(`${apiUrl}exercices/${id}`);
  return response.data;
};

const createTask = async (formData) => {
  const response = await axios.post(`${apiUrl}exercices`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};

const updateTask = async (id, formData) => {
  const response = await axios.put(`${apiUrl}exercices/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};

const deleteTask = async (id) => {
  const response = await axios.delete(`${apiUrl}courses/${id}`);
  return response.data;
};



export {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};

