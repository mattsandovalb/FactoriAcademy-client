import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Button, Box, Container, FormControl, TextField, Typography } from '@mui/material';
import { createUser } from './../../../../services/apiService';

const CreateUser = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();

    Swal.fire({
      title: 'Do you want to create a new user?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Create',
      denyButtonText: `Cancel`,
    }).then(async(result) => {
      if (result.isConfirmed) {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('role', role);
       
        await createUser(formData);

          navigate('/usersprotected');
          Swal.fire('New User Created!', '', 'success'); 
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
    }
});
};

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h1" component="h2">
          Create User
        </Typography>
        <FormControl fullWidth sx={{ m: 1 }} onSubmit={handleSubmit}>
          <Typography  variant="h4" component="h2"> NAME </Typography>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <Typography  variant="h4" component="h2"> EMAIL </Typography>
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />
          <Typography  variant="h4" component="h2"> PASSWORD </Typography>
          <TextField
            fullWidth
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />
          <Typography  variant="h4" component="h2"> ROLE </Typography>
          <TextField
            fullWidth
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            margin="normal"
            required
          />
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            Create
          </Button>
          <Button variant="outlined"><Link to="/usersprotected" style={{ textDecoration: 'none', color: 'inherit' }}>Cancel</Link></Button>
        </FormControl>
      </Box>
    </Container>
  );
}

export default CreateUser;
