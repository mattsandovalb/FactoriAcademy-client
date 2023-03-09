import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import {CardContent, Container, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { getCourseById} from '../../../../services/apiService'

const CourseItem =() => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tech, setTech] = useState('');
  const [level, setLevel] = useState('');
  const [poster, setPoster] = useState('');

  const { id } = useParams();


  useEffect(() => {
      const fetchData = async () => {
          const course = await getCourseById(id);
          setTitle(course.title);
          setPoster(course.poster);
          setDescription(course.description);
          setTech(course.tech);
          setLevel(course.level);
      }
      fetchData();
  }, [id]);

  return (
<>
<Container>
  <Grid item mb={4} xs={12} md={4} sm={6} spacing={2}>
       <Card sx={{ 
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      bgcolor: 'info',
      maxHeight: 'auto',
      ml: '20px'
    }}> 
    <CardMedia
  sx={{ height: 200, width: 200 }}
  image={poster  }
/>
        
    <CardContent sx={{  bgcolor: 'info',
}}>
     <Typography gutterBottom variant="h3" component="div">
          {title}
        </Typography>
         <Typography gutterBottom variant="h2" component="div">
          {tech}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {level}
        </Typography>
     <Typography gutterBottom variant="p" component="div">
          {description}
      </Typography>
    </CardContent>
    </Card> 
   </Grid>
  </Container>
</>

  )
}

export default CourseItem;