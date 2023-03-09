import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
import logo from '../../../assets/factoria/logoBlanco.png';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, mt: 5 }}>
      <AppBar position="fixed" sx={{top: 'auto', bottom: 0, bgcolor: 'primary' }}>
       <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}> 
       <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 , ml: 3, }}>
         <img src={logo} alt="Logo" height="40"  />
        </Box>
         <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Typography variant="body2" sx={{ marginRight: 2 }}>
              @2023 FactoriAcademy
            </Typography>
         </Box>  
         <Box sx={{ display: 'flex' }}>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <MailIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
