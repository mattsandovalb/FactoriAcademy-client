
import { Box, Drawer, Toolbar, List, ListItem, ListItemIcon, ListItemText, Typography, Divider, IconButton, AppBar, Avatar } from '@mui/material';
import {  Home as HomeIcon, ExitToApp as ExitToAppIcon, Book as BookIcon, People as PeopleIcon, Assignment as AssignmentIcon } from '@mui/icons-material';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import logo from '../../../assets/factoria/logoblack.png'; 
import { getUser } from '../../../services/apiAuth';
import { useEffect } from 'react';import ForumIcon from '@mui/icons-material/Forum';




const drawerWidth = 220;

export default function DashAdmin() {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
  <Toolbar sx={{ justifyContent: 'space-between' }}>
  <img src={logo} alt="Logo" height="25" />
    <Typography variant="h5" component="h5" sx={{ flexGrow: 1, m:2, pl:10 }}>
      dashboard
    </Typography>
    <IconButton color="inherit" sx={{ 
  flexGrow: 1, 
  display: { xs: 'flex', md: 'none' },
  justifyContent: 'center',
}}>
  <HomeIcon />
</IconButton>
<IconButton color="inherit" sx={{ 
  flexGrow: 1, 
  display: { xs: 'flex', md: 'none' },
  justifyContent: 'center',
}}>
  <ExitToAppIcon />
</IconButton>
<Link to={`/home`}>
<IconButton color="white" sx={{ 
  flexGrow: 0, 
  display: { xs: 'none', md: 'flex' },
  marginLeft: 'auto',
}}>
  <HomeIcon />
</IconButton>
</Link>

<IconButton color="inherit" sx={{ 
  flexGrow: 0, 
  display: { xs: 'none', md: 'flex' },
}}>
  <ExitToAppIcon />
</IconButton>
  </Toolbar>
</AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
          <Divider />
          <List>
           <ListItem
              button
              key="ADMIN"
              sx={{ '&.active': { bgcolor: 'primary.main' } }}
              component={Link}
              to="/admin"
            >
             <ListItemIcon sx={{ color: '#FF4700' }}>
                <Avatar sx={{ color: '#FF4700' }} />
              </ListItemIcon>
              <ListItemText primary={<Typography fontWeight="bold">ADMIN</Typography>} />
            </ListItem>
            <Divider />
            <ListItem
              button
              key="Courses"
              sx={{ '&.active': { bgcolor: 'primary.main' } }}
              component={Link}
              to="/coursesprotected"
            >
<ListItemIcon sx={{ color: '#FF4700' }}>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography fontWeight="bold">Courses</Typography>} />
            </ListItem>
            <Divider />
            <ListItem
              button
              key="Users"
              sx={{ '&.active': { bgcolor: 'primary.light' } }}
              component={Link}
              to="/usersprotected"
            >
<ListItemIcon sx={{ color: '#FF4700' }}>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography fontWeight="bold">Users</Typography>} />
            </ListItem>
            <Divider />
            <ListItem
              button
              key="Tasks"
              sx={{ '&.active': { bgcolor: 'primary.light' } }}
              component={Link}
              to="/taskprotected"
            >
<ListItemIcon sx={{ color: '#FF4700' }}>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography fontWeight="bold">Exercices</Typography>} />
            </ListItem>
          </List>
          <Divider />
          <ListItem
              button
              key="USER_COURSES"
              sx={{ '&.active': { bgcolor: 'primary.main' } }}
              component={Link}
              to="/user-courses"
            >
             <ListItemIcon sx={{ color: '#FF4700' }}>
                <AutoGraphIcon sx={{ color: '#FF4700' }} />
              </ListItemIcon>
              <ListItemText primary={<Typography fontWeight="bold">USER_COURSES</Typography>} />
            </ListItem>
            <Divider />
          <List>
            <ListItem button key="Log Out">
            <ListItemIcon sx={{ color: '#FF4700' }}>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography fontWeight="bold">Log Out</Typography>} />
            </ListItem>
          </List>
        </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 2, marginLeft: '220px'}}>
        </Box>
      </Box>
    </>
  );
};
