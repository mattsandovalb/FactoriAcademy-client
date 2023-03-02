import React from 'react'
import {Typography, Container} from '@mui/material';
import logo from '../assets/factoria/coder.png';

function Admin() {
  return (
    <Container sx={{ml:25, mt:10}}>
        <Typography variant="h3" sx={{ flexGrow: 1, m:1, pl:3 }}>
        “LOS GRANDES ACTOS SE COMPONEN DE PEQUEÑAS OBRAS REALIZADAS DÍA A DÍA.” LAO TZU
     </Typography> 
        <img src={logo} alt="Logo" height="400" />
    
    </Container>
  )
}

export default Admin