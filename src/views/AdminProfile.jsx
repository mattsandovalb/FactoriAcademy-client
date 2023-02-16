import React from 'react'
import Dashboard from '../components/Layouts/Navbar/Dashboard'
import ListCourseProtected from '../components/Outlet/SectionProtected/ListCourseProtected';

function AdminProfile() {
  return (
  <> 
     <Dashboard/>
        <ListCourseProtected/>
    </>
  )
}

export default AdminProfile;