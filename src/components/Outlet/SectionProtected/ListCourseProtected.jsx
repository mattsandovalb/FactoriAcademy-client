import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, IconButton, Paper, Typography, Button} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import Swal from 'sweetalert2';

import { getCourses, deleteCourse} from './../../../services/apiService';

import logocss from '../../../assets/courses/css.jpg'; 
import logohtml from '../../../assets/courses/html.png'; 
import logofactoria from '../../../assets/courses/factoria.jpg'; 
import logojs from '../../../assets/courses/js.png'; 
import logophp from '../../../assets/courses/php.png'; 

const logos = [logohtml, logocss, logofactoria, logojs, logophp];

const ListCourseProtected = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
    const response = await getCourses();
    setCourses(response);
  };

  const habdleDeleteCourse = async (id) => {
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
          const response = await deleteCourse(id);
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
      <TableContainer  component={Paper} sx={{ pl: 30, pt:5}} >
        <Typography variant="h1" component="h2" sx={{ p: 2}}>
          Courses
        </Typography>
        <Button variant="contained" color="primary" sx={{p:1, mb: 3}}>
       <Link to="/courses/create" style={{ textDecoration: 'none', color: 'inherit' }}>
       Create New Course
      </Link> 
    </Button>
    <Card>
     
        <Table stickyHeader aria-label="sticky table">
      
          <TableHead >
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
              <TableRow key={course.id} sx={{}}>
                <TableCell  sx={{p:1 }}>{course.id}</TableCell>
                <TableCell sx={{p:1 }}>{course.title}</TableCell>
                <TableCell sx={{p:1 }}>{course.description}</TableCell>
                <TableCell sx={{p:1 }}>{course.tech}</TableCell>
                <TableCell sx={{p:1 }}>
                  <img src={logos[Math.floor(Math.random() * logos.length)]}  alt={course.title} height={60} />
                </TableCell>
                <TableCell sx={{p:1 }}>{course.level }</TableCell>
                <TableCell sx={{p:1 }}>
                  <Link to={`/courses/${course.id}/edit`}>
                    <IconButton color="primary">
                      <Edit />
                    </IconButton>
                  </Link>
                  <IconButton color="error" onClick={() => habdleDeleteCourse(course.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Card>
      </TableContainer>
    </>
  );
};

export default ListCourseProtected;
