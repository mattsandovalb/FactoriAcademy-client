import React from 'react';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import ViewCourse from '../components/ViewCourse';
import axios from 'axios';

const url = 'http://localhost:8000/api';

const ListCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${url}/courses`);
      setCourses(response.data);
    };
    fetchData();
  }, []);

  const addCourse = async (id) => {
    await axios.post(`${url}/courses/${id}`);
  };

  return (
    <Grid container spacing={2}>
      {courses.map((item) => (
        <ViewCourse key={item.id} setOrder={addCourse} {...item} />
      ))}
    </Grid>
  );
};

export default ListCourse;
