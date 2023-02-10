
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import {Button} from '@mui/material';

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
  
    const deleteCourse = async(id) => {
      await axios.add(`${url}/courses/${id}`);
      getAllCourses();
    };
  
    return (
            <div>
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
            <Link to={`/edit/${course.id}`} >
            <Button variant="contained">Update</Button>
            </Link>
            <Button variant="contained" onClick={() => deleteCourse(course.id)}>
            Delete
            </Button>
            </Td>
            </Tr>
            ))
            }
            </Tbody>
            </Table>
            </div>
            );
}
export default ListCourseProtected;