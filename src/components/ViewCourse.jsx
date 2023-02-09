
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import {Card, CardMedia, Grid, CardContent, Typography, Button, CardActions} from '@mui/material';

const url = 'http://localhost:8000/api'


const ViewCourse = () => {
    
    
      const [courses, setCourses] = useState([]);
  
      useEffect(() => {
        getAllCourses();
      }, []);
      const getAllCourses = async () => {
        const response = await axios.get(`${url}/courses`);
        setCourses(response.data);
      };

      const addCourse = async (id) => {
        await axios.get(`${url}/courses/${id}`);
        getAllCourses();
      };
    

    return (
        

      <Grid mb={4} xs={12} md={4} sm={6} spacing={2} >
       {
            courses.map((course) => (
          <Card key={course.id} 
          sx={{
             maxHeight: '600px',
            ml:'20px'
          }}> 
          
          <CardMedia 
                    image={course.poster}
                    alt={course.title}
                    title={course.title}
                    sx={{height: 150 }}
                    />
            <CardContent   sx={{height: 200 }} >
                <Typography  variant="h6" component="h3" >{course.title}</Typography>
                <Typography variant="body2">{course.description}</Typography>
                <Typography  variant="h6" component="h6" >{course.tech}</Typography>
                <Typography  variant="h6" component="h6" >{course.level}</Typography>
            </CardContent>
            <CardActions>
            <Button color="primary" onClick={()=> addCourse(course.id)}>START COURSE</Button>
                  
           
                    </CardActions>
             </Card>
            ))
        }
        </Grid>
    
    );
    
};

export default ViewCourse;