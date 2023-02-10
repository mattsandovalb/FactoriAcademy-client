import React from 'react'
import { Container, Typography } from '@mui/material'
import Navbar from '../components/Layouts/Navbar/Navbar'


function Home() {
  return (
  <>  <Navbar/>
        <Container sx={{ p: 2 }}>
        <Typography  variant="h1" component="h1" >FACTORIA ACADEMY</Typography>
        </Container>
  </>
   
  )
}

export default Home