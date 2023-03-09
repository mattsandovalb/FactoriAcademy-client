import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {TextField, Button, Container, Typography, Box, FormControl} from '@mui/material';
import { getCourseById, updateCourse } from './../../../../services/apiService/apiService';
//import queryString from 'query-string';

const UpdateCourse = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tech, setTech] = useState('');
    const [poster, setPoster] = useState('');
    const [level, setLevel] = useState('');
    const { id } = useParams();
   const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const course = await getCourseById(id);
            setTitle(course.title);
            setDescription(course.description);
            setTech(course.tech);
            setPoster(course.poster);
            setLevel(course.level);
        }
        fetchData();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then(async (result) => {
            if (result.isConfirmed) {
                const formData = new FormData();
                formData.append("title", title);
                formData.append("description", description);
                formData.append("tech", tech);
                formData.append("poster", poster);
                formData.append("level", level);

                
                await updateCourse(id, formData);

                navigate('/coursesprotected');
                Swal.fire('Saved!', '', 'success');
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info');
            }
        });
    };

return (
 <Container maxWidth="sm">
  <Box sx={{ mt: 5 }}>
              <Typography variant="h1" component="h2">Update course</Typography>
              <FormControl fullWidth sx={{ m: 1 }} onSubmit={handleUpdate}>
                  <Typography  variant="h4" component="h2"> TITLE </Typography>
                  <TextField  id="outlined-basic" label="title" variant="outlined" 
                      value={title} 
                      onChange={(e)=> setTitle(e.target.value)} 
                      type="text" 
                      InputLabelProps={{htmlFor: 'outlined-basic'}}
                      />
                  <Typography  variant="h4" component="h2"> Description </Typography>
                  <TextField id="outlined-basic" label="Description" variant="outlined" 
                      value={description} 
                      onChange={(e)=> setDescription(e.target.value)} 
                      type="text"
                      InputLabelProps={{htmlFor: 'outlined-basic'}}
                      />
                  <Typography  variant="h4" component="h2"> Tech </Typography> 
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" 
                      value={tech} 
                      onChange={(e)=> setTech(e.target.value)} 
                      type="text" />
                  <Typography  variant="h4" component="h2"> Level </Typography>    
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" 
                      value={level} 
                      onChange={(e)=> setLevel(e.target.value)} 
                      type="text"  className='form-control'
                      InputLabelProps={{htmlFor: 'outlined-basic'}}
                      />
                  <Typography  variant="h4" component="h2" for="poster"> Poster </Typography>  
                  <TextField id="outlined-basic" variant="outlined"
                      accept="image/*, .png, .jpg, .gif, .web"
                      for="poster"
                      value={poster} 
                      onChange={(e)=> setPoster(e.target.value)}
                      type="text"
                      InputLabelProps={{htmlFor: 'outlined-basic'}}
                      />
       <Button variant="outlined"><Link to="/coursesprotected" style={{ textDecoration: 'none', color: 'inherit' }}>Cancel</Link></Button>
      <Button type="submit" variant="contained" onClick={handleUpdate}>UPDATE</Button>
</FormControl>
</Box>
 </Container>
  );
 };
                      
 export default UpdateCourse;
  