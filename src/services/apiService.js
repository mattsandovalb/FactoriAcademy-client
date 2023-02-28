import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/';

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
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};

const updateCourse = async (id, formData) => {
  const response = await axios.put(`${apiUrl}courses/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};

const deleteCourse = async (id) => {
  const response = await axios.delete(`${apiUrl}courses/${id}`);
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
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};

const updateUser = async (id, formData) => {
  const response = await axios.put(`${apiUrl}users/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};

const deleteUser = async (id) => {
  const response = await axios.delete(`${apiUrl}users/${id}`);
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
  deleteUser
};

