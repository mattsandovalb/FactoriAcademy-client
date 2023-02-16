import { useEffect, useState } from 'react';
import axios from 'axios';

import { Grid, Typography, Card, CardContent, CardActions, Button } from '@mui/material';

const MyProfile = () => {
    const [myCourses, setMyCourses] = useState([]);
  
    useEffect(() => {
        axios.get('http://localhost:8000/api/my-courses') //HAY QUE CAMBIAR LINK DEL API
          .then(response => {
            setMyCourses(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);


    return (
        <Grid container spacing={2}>
          {myCourses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {course.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {course.tech}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {course.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Continue Course
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
      
          }
          export default MyProfile;
