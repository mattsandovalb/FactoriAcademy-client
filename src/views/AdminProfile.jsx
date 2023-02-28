import React from 'react'
import Dashboard from '../components/Layouts/Navbar/Dashboard'
import ListCourseProtected from '../components/Outlet/SectionProtected/ListCourseProtected';
import ListUsersProtected from '../components/Outlet/SectionProtected/ListUsersProtected';
import UserCourses from './../components/Outlet/Section/UserCourses'

function AdminProfile() {
  return (
  <> 
         <Dashboard/>
         <UserCourses/>
        <ListCourseProtected/>
        <ListUsersProtected/>
    </>
  )
}

export default AdminProfile;