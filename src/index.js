import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider, createTheme} from '@mui/material';
import Swal from 'sweetalert2';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF4700',
    },
    secondary: {
      main: '#020100',
    },
    complement1: {
      main: '#9C9C9C',
    },
    complement2: {
      main: '#FFA37F',
    },
    white: {
      main: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Poppins, Fira Code, sans-serif',
    h1: {
      fontWeight: 'bold',
      fontSize: '36px',
    },
    h2: {
      fontWeight: 'medium',
      fontSize: '32px',
    },
    h3: {
      fontWeight: 'medium',
      fontSize: '28px',
    },
    body1: {
      fontWeight: 'light',
      fontSize: '16px',
    },
    body2: {
      fontWeight: 'light',
      fontSize: '14px',
    },
  },
});
/* Swal.setDefaults({
  customClass: {
    container: theme.palette.complement1.main,
    popup: theme.palette.complement2.main,
    header: theme.palette.primary.main,
    title: theme.typography.h1.fontWeight,
    content: theme.typography.body1.fontWeight,
    confirmButton: theme.palette.secondary.main,
  },
});

 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
