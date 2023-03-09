import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import {ThemeProvider, createTheme} from '@mui/material';
import { AuthUserContextProvider } from './services/providers/AuthUserContextProvider.jsx';


const theme = createTheme({
  palette: {
    primary: {
      main: '#FF4700',
    },
    secondary: {
      main: '#020100',
    },
    info: {
      main: '#9C9C9C',
    },
    warning: {
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
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthUserContextProvider>
      <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </AuthUserContextProvider>
  </React.StrictMode>
);



reportWebVitals();
