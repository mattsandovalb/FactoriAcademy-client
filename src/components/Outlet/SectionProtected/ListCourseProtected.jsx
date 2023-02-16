import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, IconButton, Paper, Typography, Button} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

import Swal from 'sweetalert2';

const url = 'http://localhost:8000/api';

const ListCourseProtected = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
    const response = await axios.get(`${url}/courses`);
    setCourses(response.data);
  };

  const deleteCourse = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`${url}/courses/${id}`);
          if (response.status === 200) {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            setCourses(courses.filter((course) => course.id !== id));
          }
        } catch (error) {
          console.error(error);
          Swal.fire('Error', 'An error occurred while trying to delete the course.', 'error');
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ p: 1}}>
        <Typography variant="h1" component="h2" sx={{ p: 3 }}>
          Courses
        </Typography>
        <Button variant="contained" color="primary">
       <Link to="/courses/create" sx={{ color: 'white', textDecoration: 'none' }}>
       Create New Course
      </Link> 
    </Button>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Tech</TableCell>
              <TableCell>Poster</TableCell>
              <TableCell>Level</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.id}</TableCell>
                <TableCell>{course.title}</TableCell>
                <TableCell>{course.description}</TableCell>
                <TableCell>{course.tech}</TableCell>
                <TableCell>
                  <img src={`http://localhost:8000/images/poster/${course.poster}`} alt={course.title} height={60} />
                </TableCell>
                <TableCell>{course.level}</TableCell>
                <TableCell>
                  <Link to={`/courses/${course.id}/edit`}>
                    <IconButton color="primary">
                      <Edit />
                    </IconButton>
                  </Link>
                  <IconButton color="error" onClick={() => deleteCourse(course.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListCourseProtected;
