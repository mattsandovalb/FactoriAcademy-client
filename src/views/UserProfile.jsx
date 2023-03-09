import React from 'react'
import DetailCourse from '../components/Outlet/Section/DetailCourse/DetailCourse'
import {Typography} from '@mui/material'
import Navbar from '../components/Layouts/Navbar/Navbar';
import Footer from '../components/Layouts/Footer/Footer'

function UserProfile() {
  return (
    <div>
       <Navbar/>
          <Typography variant="h2" sx={{ m: 5}}>My Profile</Typography>
          <DetailCourse/>
         <Footer/>

    </div>
  )
}

export default UserProfile