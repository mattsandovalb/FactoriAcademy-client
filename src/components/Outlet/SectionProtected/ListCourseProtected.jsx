
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import {Button, Container} from '@mui/material';
import Navbar from '../../Layouts/Navbar/Navbar';

const url = 'http://localhost:8000/api'


const ListCourseProtected = () => {
    const [courses, setCourses] = useState([]);
  
    useEffect(() => {
      getAllCourses();
    }, []);
  
    const getAllCourses = async() => {
      const response = await axios.get(`${url}/courses`);
      setCourses(response.data);
    };
  
   const deleteCourse = async (id) => {
  try {
    await axios.delete(`${url}/courses/${id}`);
    getAllCourses();
  } catch (error) {
    console.error(error);
  }
};
  
    return (
            <div>  
               <Navbar/>
              <Container  sx={{ p: 5}}>
            <Link  to="/create">
            <Button variant="contained">Create New Course</Button>
            </Link>
            <Table>
            <Thead>
            <Tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Tech</Th>
            <Th>Popster</Th>
            <Th>Level</Th>
            </Tr>
            </Thead>
            <Tbody>
            {
            courses.map((course) => (
         <Tr key={course.id}>
            <Td>{course.title}</Td>
            <Td>{course.description}</Td>
            <Td>{course.tech}</Td>
            <Td>{course.poster}</Td>
            <Td>{course.level}</Td>
            <Td>
            <Button variant="contained" color="success">  <Link to={`/edit/${course.id}`} >Update</Link></Button>
            <Button variant="outlined" color="error" onClick={() => deleteCourse(course.id)}> Delete</Button>
            </Td>
            </Tr>
            ))
            }
            </Tbody>
            </Table>
            </Container>
            </div>
            );
}
export default ListCourseProtected;