
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, IconButton, Paper, Typography, Button} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import Swal from 'sweetalert2';

import { getTasks, deleteTask } from './../../../services/apiService';

const ListTaskProtected = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    const response = await getTasks();
    setTasks(response);
  };

  const handleDeleteTask = async (id) => {
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
          const response = await deleteTask(id);
          if (response.status === 200) {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            setTasks(tasks.filter((task) => task.id !== id));
          }
        } catch (error) {
          console.error(error);
          Swal.fire('Error', 'An error occurred while trying to delete the task.', 'error');
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ pl: 30, pt:5}}>
        <Typography variant="h1" component="h2" sx={{ p: 2 }}>
          TASKS
        </Typography>
        <Button variant="contained" color="primary">
          <Link to="/tasks/create" style={{ textDecoration: 'none', color: 'inherit' }}>
            Create New Task
          </Link>
        </Button>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Statement</TableCell>
              <TableCell align="right">Instruction</TableCell>
              <TableCell align="right">Documentation1</TableCell>
              <TableCell align="right">Documentation2</TableCell>
              <TableCell align="right">Solution</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.id}</TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.statement}</TableCell>
                <TableCell>{task.instruction}</TableCell>
                <TableCell>{task.documentation1}</TableCell>
                <TableCell>{task.documentation2}</TableCell>
                <TableCell>{task.solution}</TableCell>
                <TableCell>{task.value}</TableCell>
                <TableCell>
                  <Link to={`/tasks/${task.id}/edit`}>
                    <IconButton color="primary">
                      <Edit />
                    </IconButton>
                  </Link>
                  <IconButton color="error" onClick={() => handleDeleteTask(task.id)}>
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

export default ListTaskProtected;