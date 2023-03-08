import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {TextField, Button, Container, Typography, Box, FormControl} from '@mui/material';
import { getTaskById, updateTask } from '../../../../services/apiService';

const UpdateTask = () => {

    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [statement, setStatement] = useState('');
    const [instruction, setInstruction] = useState('');
    const [documentation1, setDocumentation1] = useState('');
    const [documentation2, setDocumentation2] = useState('');
    const [value, setValue] = useState('');
    const [solution, setSolution] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchTask = async () => {
            const task = await getTaskById(id);
            setTitle(task.title);
            setStatement(task.statement);
            setInstruction(task.instruction);
            setDocumentation1(task.documentation1);
            setDocumentation2(task.documentation2);
            setValue(task.value);
            setSolution(task.solution);
        };

        fetchTask();
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
                formData.append("statement", statement);
                formData.append("instruction", instruction);
                formData.append("documentation1", documentation1);
                formData.append("documentation2", documentation2);
                formData.append("solution", solution);

                formData.append("value", value);
      
                await updateTask(id, formData);
      
                navigate('/taskprotected');
                Swal.fire('Exercise Updated!', '', 'success');
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info');
            }
        });
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 5 }}>
                <Typography variant="h1" component="h2">Update Exercise</Typography>
                <FormControl fullWidth sx={{ m: 1 }} onSubmit={handleUpdate}>
                    <Typography  variant="h4" component="h2"> TITLE </Typography>
                    <TextField  id="outlined-basic" label="Title" variant="outlined" 
                        value={title} 
                        onChange={(e)=> setTitle(e.target.value)} 
                        type="text"  />
                    <Typography  variant="h4" component="h2"> Statement </Typography>
                    <TextField id="outlined-basic" label="Statement" variant="outlined" 
                        value={statement} 
                        onChange={(e)=> setStatement(e.target.value)} 
                        type="text"  />
                    <Typography  variant="h4" component="h2"> Instruction </Typography> 
                    <TextField id="outlined-basic" label="Instruction" variant="outlined" 
                        value={instruction} 
                        onChange={(e)=> setInstruction(e.target.value)} 
                        type="text" />
                    <Typography  variant="h4" component="h2"> Documentation 1 </Typography>    
                    <TextField id="outlined-basic" label="Documentation 1" variant="outlined" 
                        value={documentation1} 
                        onChange={(e)=> setDocumentation1(e.target.value)} 
                        type="text" />
                        <Typography  variant="h4" component="h2"> Documentation 2 </Typography>    
                          <TextField id="outlined-basic" label="Documentation 1" variant="outlined" 
                              value={documentation2} 
                              onChange={(e)=> setDocumentation2(e.target.value)} 
                              type="text" />
                              <Typography  variant="h4" component="h2"> Value </Typography>    
                          <TextField id="outlined-basic" label="Documentation 1" variant="outlined" 
                              value={value} 
                              onChange={(e)=> setValue(e.target.value)} 
                              type="text" />
                               <Typography  variant="h4" component="h2"> Solution </Typography>    
                          <TextField id="outlined-basic" label="Solution" variant="outlined" 
                              value={solution} 
                              onChange={(e)=> setSolution(e.target.value)} 
                              type="text" />
                          <Button variant="outlined"><Link to="/coursesprotected" style={{ textDecoration: 'none', color: 'inherit' }}>Cancel</Link></Button>
                          <Button type="submit" variant="contained" onClick={handleUpdate}>SAVE</Button>
                  </FormControl>
          
              </Box>
          </Container>
        )
      }
      
      export default UpdateTask;
