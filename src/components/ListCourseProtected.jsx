
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
Table,
TableHead,
TableRow,
TableCell,
TableBody,
Button,

} from '@mui/material';

const url = 'http://localhost:8000/api'


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
      await axios.delete(`${url}/courses/${id}`);
      getAllCourses();
    };
  
    return (
            <div>
            <Link  to="/create">
            <Button variant="contained">Create New Course</Button>
            </Link>
            <Table>
            <TableHead>
            <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Repository</TableCell>
            <TableCell>Demo</TableCell>
            <TableCell>Poster</TableCell>
            <TableCell>Technologies</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {
            courses.map((course) => (
         <TableRow key={course.id}>
            <TableCell>{course.name}</TableCell>
            <TableCell>{course.description}</TableCell>
            <TableCell>{course.github_link}</TableCell>
            <TableCell>{course.linkDemo}</TableCell>
            <TableCell>{course.poster}</TableCell>
            <TableCell>{course.technologies}</TableCell>
            <TableCell>
            <Link to={`/edit/${course.id}`} >
            <Button variant="contained">Update</Button>
            </Link>
            <Button variant="contained" onClick={() => deleteCourse(course.id)}>
            Delete
            </Button>
            </TableCell>
            </TableRow>
            ))
            }
            </TableBody>
            </Table>
            </div>
            );
}
export default ListCourseProtected;