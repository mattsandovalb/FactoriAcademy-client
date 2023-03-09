import React, { useState } from 'react';
import {  InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../../assets/factoria/logoblack.png'; 
import { login } from '../../services/apiAuth';
// import { getMeFn, loginUserFn } from '../components/api/AuthUser';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://factoriaf5.org/">
FACTORIA F5  </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

// export default function SignInSide() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };
  
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await login(email, password);
      localStorage.setItem('token', token);
      window.location.href="/admin"
      console.log(localStorage.getItem('token'));
      // redirect to dashboard
    } catch (error) {
      console.error(error);
    }
  }

//---------------------------------------------------Hacer que la contraseña se vuelva visible----------------------------------------//
const [showPassword, setShowPassword] = useState(false);

const handleClickShowPassword = () => {
  setShowPassword(!showPassword);
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

//-------------------------------------------------ESTILOS---------------------------------------------------------------------------//
const boton = {
  background: "#FF5733", // Color hexadecimal
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px"
};



//------------------------------------------------------CODIGO PRINCIPAL------------------------------------------------------------//
  

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '80vh' }}>
        <CssBaseline />
        {/* Primer Grid para la imagen */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
           backgroundImage: `url(${process.env.PUBLIC_URL}/assets/factoria/coder.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: '80% auto',
            backgroundPosition: 'center',
          }}
        />
        {/* Segundo Grid para el formulario */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
             <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
  <img src={logo} alt="Logo" height="30" />
          </Typography> 
            <Typography variant='body1'>
              Powered by Factoria F5
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
              fullWidth
               type={showPassword ? 'text' : 'password'}
               label="Contraseña"
               id='password'
               name='password'
               onChange={(e) => setPassword(e.target.value)}
               InputProps={{
                 endAdornment: (
                   <InputAdornment position="end">
                     <IconButton
                       onClick={handleClickShowPassword}
                       onMouseDown={handleMouseDownPassword}>
                       {showPassword ? <Visibility /> : <VisibilityOff />}
                     </IconButton>
                   </InputAdornment>
                 ),
               }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button style={boton}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default Login;