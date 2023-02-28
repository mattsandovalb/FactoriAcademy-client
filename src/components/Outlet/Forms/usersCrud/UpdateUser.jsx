import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Button, Box, Container, FormControl, TextField, Typography } from '@mui/material';


const url = 'http://localhost:8000/api/users/';

const UpdateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setPassword(response.data.password);
        setRole(response.data.role);
    
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);


  const handleUpdate = async(event) => {
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
              formData.append('name', name);
              formData.append('email', email);
              formData.append('password', password);
              formData.append('role', role);
              axios.put(`${url}${id}`, formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
      }).then(() => {
        navigate('/usersprotected');
        Swal.fire('Updated!', '', 'success');
      }).catch((error) => {
        Swal.fire('Error', error.message, 'error');
      });
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info');
    }
  });
};
return (
  <Container maxWidth="sm">
  <Box sx={{ mt: 5 }}>
  <Typography variant="h1" component="h2">
  Update USER
  </Typography>
  <FormControl fullWidth sx={{ m: 1 }} onSubmit={handleUpdate}>
  <Typography  variant="h4" component="h2"> NAME </Typography>
  <TextField
  fullWidth
  label="name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  margin="normal"
  required
  />
  <Typography  variant="h4" component="h2"> E - mail </Typography>
  <TextField
  fullWidth
  label="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  margin="normal"
  required
  />
  <Typography  variant="h4" component="h2"> Password </Typography>
  <TextField
  fullWidth
  label="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  margin="normal"
  required
  />
  <Typography  variant="h4" component="h2"> Role </Typography>
  <TextField
  fullWidth
  label="role"
  value={role}
  onChange={(e) => setRole(e.target.value)}
  margin="normal"
  required
  />
  <Button variant="contained" type="submit">
  Save
  </Button>
  <Button variant="outlined">
  <Link to="/usersprotected">Cancel</Link>
  </Button>
  </FormControl>
  </Box>
  </Container>
);
}

export default UpdateUser;