import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, IconButton, Paper, Typography, Button} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import Swal from 'sweetalert2';


import { getUsers, deleteUser } from './../../../services/apiService';


const ListUsersProtected = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    setUsers(response);
    };

  const handleDeleteUser = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await deleteUser(id);
          if (response.status === 200) {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            setUsers(users.filter((user) => user.id !== id));
          }
        } catch (error) {
          console.error(error);
          Swal.fire('Error', 'An error occurred while trying to delete the user.', 'error');
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ p: 1}}>
        <Typography variant="h1" component="h2" sx={{ p: 3 }}>
          USERS
        </Typography>
        <Button variant="contained" color="primary">
       <Link to="/users/create" sx={{ color: 'white', textDecoration: 'none' }}>
       Create New USER 
      </Link> 
    </Button>
    <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell  align="right">ID</TableCell>
              <TableCell  align="right">Name</TableCell>
              <TableCell  align="right">E-Mail</TableCell>
              <TableCell  align="right">Password</TableCell>
              <TableCell >Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
             <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.password}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Link to={`/users/${user.id}/edit`}>
                    <IconButton color="primary">
                      <Edit />
                    </IconButton>
                  </Link>
                  <IconButton color="error" onClick={() => handleDeleteUser(user.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListUsersProtected;
