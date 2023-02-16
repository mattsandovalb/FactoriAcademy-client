import React from 'react'
import { Container, Typography } from '@mui/material'
import Navbar from '../components/Layouts/Navbar/Navbar'
import ViewCourses from '../components/Outlet/Section/ViewCourses';


function Home() {
  
  return (
  <> 
   <Navbar/>
        <Container sx={{ p: 2 }}>
        <Typography  variant="h1" component="h1" sx={{ p: 2 }} >FACTORIA ACADEMY</Typography>
        <ViewCourses/>
        </Container>
  </>
   
  )
}

export default Home