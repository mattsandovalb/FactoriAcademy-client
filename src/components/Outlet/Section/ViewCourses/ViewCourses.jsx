import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
} from '@mui/material';
import {Link} from 'react-router-dom';
import { getCourses } from '../../../../services/apiService';

const ViewCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
    const response = await getCourses();
    setCourses(response.course);
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {courses.map((course) => (
          <Grid key={course.id} item xs={12} sm={6} md={4}>
            <Card sx={{ height: 450 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={`${course.poster}`}
              />
              <CardContent sx={{ height: 220 }}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {course.tech}
                </Typography>
                <Typography variant="h5" component="div">
                  {course.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {course.tech}
                </Typography>
                <Typography variant="body2">{course.description}</Typography>
                <Typography variant="h6" component="h6">
                  {course.level}
                </Typography>
              </CardContent>
              <CardActions>
                <Button color="primary" size="small" component={Link} to={`/courses/${course.id}`} >
                  START COURSE
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ViewCourses;
