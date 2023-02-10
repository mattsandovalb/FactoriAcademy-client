import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {ThemeProvider, createTheme} from '@mui/material';
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




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
