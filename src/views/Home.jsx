import React from 'react'
import { Container } from '@mui/material'
import Navbar from '../components/Layouts/Navbar/Navbar'
import SignIn from './SignIn';

function Home() {
  
  return (
  <> 
   <Navbar/>
        <Container sx={{ p: 2 }}>
          <SignIn/>
        </Container>
  </>
   
  )
}

export default Home