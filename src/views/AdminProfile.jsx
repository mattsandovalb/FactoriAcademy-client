import React from 'react'
import Dashboard from '../components/Layouts/Navbar/Dashboard'
import ListCourseProtected from '../components/Outlet/SectionProtected/ListCourseProtected';
import ListUsersProtected from '../components/Outlet/SectionProtected/ListUsersProtected';


function AdminProfile() {
  return (
  <> 
     <Dashboard/>
        <ListCourseProtected/>
        <ListUsersProtected/>
    </>
  )
}

export default AdminProfile;