import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCourseById } from '../../../../services/apiService/apiService';
import { Typography, Container, Button } from '@mui/material';
import Task1 from '../../../ace/Task1/Task1';
import CourseItem from '../CourseItem/CourseItem';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Task2 from '../../../ace/Task2/Task2';



const DetailCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [showTask2, setShowTask2] = useState(false);
  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const getCourse = async () => {
    const singleCourse = await getCourseById(id);
    setCourse(singleCourse);
  };

  useEffect(() => {
    getCourse();
  }, [id]);
  
   

  const handleClick = () => {
    setShowTask2(true);
  };
  return (
    <>
   
      <Container sx={{ p: 2 }}>
        <Typography variant="h4" component="h4" sx={{ p: 2 }}>Programa del Curso</Typography>
           <CourseItem poster={course.poster} title={course.title} description={course.description} tech={course.tech} level={course.level} />
           <Button color="secondary" variant="contained" onClick={handleClickOpen}>
          {isOpen ? "Close Task" : "Open Task"}
        </Button>
        {isOpen && <Task1 />}
        {showTask2 ? (
        <Task2 />
      ) : (
        <Button variant="contained" color="secondary" sx={{ m: 1 }} onClick={handleClick}>
          NEXT <ArrowForwardIosIcon />
        </Button>
      )}  
      </Container>

    </>
  )
}

export default DetailCourse;
