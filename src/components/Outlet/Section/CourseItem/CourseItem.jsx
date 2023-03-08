import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import { getCourseById} from '../../../../services/apiService'

const CourseItem =() => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tech, setTech] = useState('');
  const [poster, setPoster] = useState('');
  const [level, setLevel] = useState('');
  const [tasks, setTasks] = useState('');
  const { id } = useParams();


  useEffect(() => {
      const fetchData = async () => {
          const course = await getCourseById(id);
          setTitle(course.title);
          setDescription(course.description);
          setTech(course.tech);
          setPoster(course.poster);
          setLevel(course.level);
          setTasks(course.tasks)
      }
      fetchData();
  }, [id]);

  return (
<>
  <Grid item mb={4} xs={12} md={4} sm={6} spacing={2}>
     <Typography gutterBottom variant="p" component="div">
          {title}
        </Typography>
         <Typography gutterBottom variant="p" component="div">
          {tech}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          {level}
        </Typography>
        <Card sx={{ 
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
     // maxWidth: '100%',
      maxHeight: 'auto',
      ml: '20px'
    }}>
        <Typography gutterBottom variant="p" component="div">
          {tasks} TASK 1
        </Typography>
        <CardMedia
    component="img"
    alt={title}
    sx={{
      height: '100%',
      width: { xs: '100%', md: '30%' },
      maxWidth: '100%',
      maxHeight: '100%',
    }}
    image={'https://via.placeholder.com/200x200'}
  />
      <Typography gutterBottom variant="p" component="div">
          CODE
       </Typography>
       <CardMedia
    component="img"
    alt={title}
    sx={{
      height: '100%',
      width: { xs: '100%', md: '30%' },
      maxWidth: '100%',
      maxHeight: '100%',
    }}
    image={'https://via.placeholder.com/200x200'}
  />
        <Typography gutterBottom variant="p" component="div">
       TEST
        </Typography>
        <CardMedia
    component="img"
    alt={title}
    sx={{
      height: '100%',
      width: { xs: '100%', md: '30%' },
      maxWidth: '100%',
      maxHeight: '100%',
    }}
    image={'https://via.placeholder.com/200x200'}
  />
  
    
    </Card> 
     <CardActions>
        <Stack spacing={2} width='100%' centered >
          <Button color="info" size="small" variant="contained" >RUN TEST </Button>
          <Button color="info" size="small" variant="contained" >NEXT</Button>
        </Stack>
      </CardActions>
  </Grid>
</>

  )
}

export default CourseItem