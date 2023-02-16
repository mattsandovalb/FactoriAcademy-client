import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {TextField, Button, Container, Typography, Box, FormControl} from '@mui/material';

const url = 'http://localhost:8000/api/courses/';

const UpdateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tech, setTech] = useState('');
  const [poster, setPoster] = useState(null);
  const [level, setLevel] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${url}${id}`);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setTech(response.data.tech);
      setPoster(response.data.poster);
      setLevel(response.data.level);
    };
    fetchData();
  }, [id]);

  const handleUpdate = async (event) => {
    event.preventDefault();
     
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        const formData = new FormData();
              formData.append('title', title);
              formData.append('description', description);
              formData.append('tech', tech);
              if (poster) {
                formData.append('poster', poster);
              }
              formData.append('level', level);

              axios.put(`${url}${id}`, formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
      }).then(() => {
        navigate('/coursesprotected');
        Swal.fire('Updated!', '', 'success');
      }).catch((error) => {
        Swal.fire('Error', error.message, 'error');
      });
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info');
    }
  });
};
const handleFileChange = (event) => {
  if (event.target.files && event.target.files.length > 0) {
    setPoster(event.target.files[0]);
  }
};

return (
  <Container maxWidth="sm">
  <Box sx={{ mt: 5 }}>
  <Typography variant="h1" component="h2">
        Update Course
      </Typography>
      <FormControl fullWidth sx={{ m: 1 }}onSubmit={handleUpdate}>
      <Typography  variant="h4" component="h2"> TITLE </Typography>

        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
          required
        />
        <Typography  variant="h4" component="h2"> Description </Typography>
        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
          required
        />
       <Typography  variant="h4" component="h2"> Tech </Typography>
        <TextField
          fullWidth
          label="Tech"
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          margin="normal"
          required
        />
      
        <Typography  variant="h4" component="h2"> Level </Typography>    
        <TextField
          fullWidth
          label="Level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          margin="normal"
          required
        />
       <Typography  variant="h4" component="h2" > Poster </Typography>  
        <FormControl fullWidth margin="normal" for="poster">
          <TextField
            for="poster"
            type="text"
           // accept=".jpg,.jpeg,.png"
            onChange={handleFileChange}
          />
        </FormControl>
          <Button variant="contained" type="submit" onClick={handleUpdate}>
            Save
          </Button>
          <Button variant="outlined"><Link to="/coursesprotected">Cancel</Link></Button>
</FormControl>
    </Box>
  </Container>
);
}

export default UpdateCourse;