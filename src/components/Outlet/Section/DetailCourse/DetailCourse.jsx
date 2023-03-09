import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCourseById } from '../../../../services/apiService';
import { Typography, Container, Button } from '@mui/material';
import Task1 from '../../../ace/Task1/Task1';
import CourseItem from '../CourseItem/CourseItem';

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
   
      <Container sx={{ p: 2 }}>
        <Typography variant="h4" component="h4" sx={{ p: 2 }}>Programa del Curso</Typography>
           <CourseItem poster={course.poster} title={course.title} description={course.description} tech={course.tech} level={course.level} />
           <Button color="secondary" variant="contained" onClick={handleClick}>
          {isOpen ? "Close Task" : "Open Task"}
        </Button>
        {isOpen && <Task1 />}
      </Container>

    </>
  )
}

export default DetailCourse;
