import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCourseById } from '../services/apiService';
import { Typography, Container, Button } from '@mui/material';
import Task from '../components/ace/Task/Task';
import Navbar from '../components/Layouts/Navbar/Navbar';
import Footer from '../components/Layouts/Footer/Footer'
import CourseItem from '../components/Outlet/Section/CourseItem/CourseItem';

const DetailCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const getCourse = async () => {
    const singleCourse = await getCourseById(id);
    setCourse(singleCourse);
  };

  useEffect(() => {
    getCourse();
  }, [id]);

  return (
    <>
      <Navbar />
      <Container sx={{ p: 2 }}>
        <Typography variant="h4" component="h4" sx={{ p: 2 }}>Programa del Curso</Typography>
        <CourseItem title={course.title} description={course.description} tech={course.tech} level={course.level} />
        <Button color="secondary" variant="contained" onClick={handleClick}>
          {isOpen ? "Close Task" : "Open Task"}
        </Button>
        {isOpen && <Task />}
      </Container>
      <Footer/>

    </>
  )
}

export default DetailCourse;
