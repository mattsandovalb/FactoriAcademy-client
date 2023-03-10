import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {
CssBaseline,
Drawer,
Box,
AppBar,
Toolbar,
List,
Typography,
Divider,
IconButton,
Badge,
Link,
Avatar, 
} from '@mui/material';
import {
Menu as MenuIcon,
ChevronLeft as ChevronLeftIcon,
Notifications as NotificationsIcon
} from '@mui/icons-material';

import { mainListItems, secondaryListItems } from './ListItems';
//import Chart from '../components/adminComponents/Chart';
//import Deposits from '../components/adminComponents/Deposits';
import Orders from './Orders';
import Dashboard from '../Layouts/Navbar/Dashboard';




//---------------------------------------Funciones varias----------------------------------------------------//
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;
//-------------------------------------------Necesario para la Barra arriba-----------------------------------//
/* const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
})); 
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardUserContent() {
  const [active,setActive]=useState('Dashboard');
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
//------------------------------------------------------------Codigo Principal---------------------------------------//
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
{/* Barra superior */
        <AppBar position="absolute" open={open}
        color="secondary">
        <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
        >
{/* Icono de Menu para cerrar la barra superior */}
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                    marginRight: '36px',
                    ...(open && { display: 'none' }),
            }}
            >
{/* Icono exportado como tal */}
            <MenuIcon />
            </IconButton>
{/* Texto Barra superior */}
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Eduard Molina Torres
            </Typography>
                                                {/* Icono Campanita */}
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
{/* Fin de la barra Superior */}
{/* Inicio de la barra lateral */}
        <Drawer variant="permanent" open={open}>
{/* Parte Supeior izquierda */}
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
        <Divider />
            <Avatar/>
        <Divider />
{/* Importacion de la navbar */}
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
                                              

        {active === "Dashboard" && <Dashboard/>}
        {active === "Orders" && <Orders/>}


  
        
export default function UserProfile() {
  return <DashboardUserContent />;
}