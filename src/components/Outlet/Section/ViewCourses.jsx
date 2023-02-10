
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Card, Grid, CardContent, Typography, Button, CardActions} from '@mui/material';


const url = 'http://localhost:8000/api'


const ViewCourses = () => {

      const [courses, setCourses] = useState([]);
      const [user, setUser] = useState(null);
      
      useEffect(() => {
        getAllCourses();
        checkAuth();
      }, []);

      const getAllCourses = async () => {
        const response = await axios.get(`${url}/courses`);
        setCourses(response.data);
      };
      
      const checkAuth = async () => {
        const response = await axios.get(`${url}/auth`);
        setUser(response.data);
      };

      const addCourse = async (id) => {
        if(!user) {
          //show login message
          return;
        }
        await axios.post(`${url}/basket`, { course_id: id });
        //update basket or show success message
      };
    

    return (
   
      <Grid  mb={2} xs={12} md={4} sm={6} container spacing={2}> 
       {
            courses.map((course) => (
        <Card key={course.id} 
          sx={{
             maxHeight: '600px',
             ml:'20px'
          }}> 
          <CardContent   sx={{height: 200 }} >
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{course.tech}</Typography>
            <Typography variant="h5" component="div">{course.title}</Typography>
      
            <Typography sx={{ mb: 1.5 }} color="text.secondary"> {course.tech}</Typography>
            <Typography variant="body2">{course.description}   <br /> </Typography>
            <Typography  variant="h6" component="h6" >{course.level}</Typography>
          </CardContent>

          <CardActions>
            <Button color="primary" size="small" onClick={()=> addCourse(course.id)}>START COURSE</Button>
            <Button color="primary" size="small" >READ MORE</Button>
          </CardActions>
        </Card>
            ))
        }
        </Grid>
       
    );
    
};

export default ViewCourses;