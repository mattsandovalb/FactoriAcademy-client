import * as React from 'react';
import { useState } from 'react';

import { Drawer,Box, AppBar, Toolbar, List, ListItem, ListItemIcon, ListItemText, Typography, IconButton, Menu, MenuItem, Container, Avatar, Button, Tooltip } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, Logout as LogoutIcon } from '@mui/icons-material';

const drawerWidth = 240;

const MainContainer = ({ children }) => (
  <Box sx={{ display: 'flex' }}>
    {children}
  </Box>
);

const MainContent = ({ children }) => (
  <Box sx={{ flexGrow: 1, padding: 3 }}>
    {children}
  </Box>
);

const Sidebar = ({ children }) => (
  <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}
  >
    {children}
  </Drawer>
);

const Logo = () => (
  <Typography
    variant="h1"
    sx={{
      fontWeight: 'bold',
      fontSize: '1.5rem',
      lineHeight: '1.5rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: (theme) => theme.palette.primary.contrastText,
    }}
  >
    Dashboard
  </Typography>
);

const Navbar = ({ children }) => (
  <AppBar
    position="fixed"
    sx={{
      zIndex: (theme) => theme.zIndex.drawer + 1,
    }}
  >
    <Toolbar>
      {children}
    </Toolbar>
  </AppBar>
);

const ToolbarLeft = ({ children }) => (
  <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
    {children}
  </Toolbar>
);

const ToolbarRight = ({ children }) => (
  <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
    {children}
  </Toolbar>
);

const SidebarHeader = ({ children }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
    {children}
  </Box>
);

const SidebarFooter = ({ children }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
    {children}
  </Box>
);

const AvatarContainer = ({ children }) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    {children}
  </Box>
);

const UserName = () => (
  <Typography
    sx={{
      fontWeight: 'bold',
      marginLeft: (theme) => theme.spacing(2),
    }}
  >
    SUPER ADMIN
  </Typography>
);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <MainContainer>
      <Sidebar
        variant="permanent"
        anchor="left"
        open={sidebarOpen}
      >
        <SidebarHeader>
          <Logo>Dashboard</Logo>
        </SidebarHeader>
        <List>
          <ListItem button>
            <ListItemIcon>Admins</ListItemIcon>
            <ListItemText primary="Admins" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>Courses</ListItemIcon>
            <ListItemText primary="Courses" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>Users</ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>Exercicios</ListItemIcon>
            <ListItemText primary="Exercicios" />
          </ListItem>
        </List>
        <SidebarFooter>
      <AvatarContainer>
        <Avatar />
        <UserName>SuperAdmin</UserName>
      </AvatarContainer>
    </SidebarFooter>
  </Sidebar>
  <MainContent>
    <Navbar position="fixed">
      <ToolbarLeft>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleSidebarToggle}
        >
          <MenuIcon />
        </IconButton>
        <Logo>Dashboard</Logo>
      </ToolbarLeft>
      <ToolbarRight>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <Tooltip title="Logout">
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </ToolbarRight>
    </Navbar>
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome, SuperAdmin!
      </Typography>
    </Container>
  </MainContent>
</MainContainer>
);
};
export default Dashboard;

