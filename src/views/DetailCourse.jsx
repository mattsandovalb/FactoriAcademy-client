import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCourseById} from '../services/apiService';
//import CourseItem from '../components/Outlet/Section/CourseItem/CourseItem';
import { Typography, Container } from '@mui/material';
import Task1 from '../components/ace/Task1/Task1';
import Task from '../components/ace/Task/Task'
import Navbar from '../components/Layouts/Navbar/Navbar'


const DetailCourse = () => {
    const { id } = useParams();
    const [course, setCourse]= useState({});
    
    const getCourse = async () =>{
        const singleCourse = await getCourseById(id);
        setCourse(singleCourse);
    }
    useEffect(() => {
        getCourse();
      }, [id]);

    return (
        <> 
        <Navbar/> 
        <Container sx={{ p: 2 }}>
       
      <Typography variant="h1" component="h1" sx={{ p: 2 }} >Programa del Curso</Typography>
     
       {/*    <Task/> */}
         <Task1/>
        </Container>





      {/*   {course && (
  <CourseItem
    key={course.id}
    titulo={course.title}
    poster={course.poster}
    level={course.level}
    tech={course.tech}
    tasks={course.tasks} // IMPORTANTE ADADIR TASKS
    description={course.description}
  />
)} */}
        </>

    )
      
}        
            


export default DetailCourse;
