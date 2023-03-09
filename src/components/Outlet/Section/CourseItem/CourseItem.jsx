import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { getCourseById} from '../../../../services/apiService'

const CourseItem =() => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tech, setTech] = useState('');
  const [level, setLevel] = useState('');

  const { id } = useParams();


  useEffect(() => {
      const fetchData = async () => {
          const course = await getCourseById(id);
          setTitle(course.title);
          setDescription(course.description);
          setTech(course.tech);
          setLevel(course.level);
      }
      fetchData();
  }, [id]);

  return (
<>
  <Grid item mb={4} xs={12} md={4} sm={6} spacing={2}>
     <Typography gutterBottom variant="h3" component="div">
          {title}
        </Typography>
         <Typography gutterBottom variant="h2" component="div">
          {tech}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {level}
        </Typography>
        <Card sx={{ 
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
     // maxWidth: '100%',
      maxHeight: 'auto',
      ml: '20px'
    }}> 
    <CardContent>
    <Typography gutterBottom variant="p" component="div">
          {description}
      </Typography>
    </CardContent>
    </Card> 
  </Grid>
</>

  )
}

export default CourseItem;