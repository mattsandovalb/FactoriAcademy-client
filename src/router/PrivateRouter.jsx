
import {Router, Route,  Routes } from 'react-router-dom';


import CreateCourse from '../components/Outlet/Forms/coursesCRUD/CreateCourse.jsx';
import UpdateCourse from '../components/Outlet/Forms/coursesCRUD/UpdateCourse.jsx';
import UserCourses from '../components/Outlet/Section/UserCourses/UserCourses.jsx'
import CreateUser from '../components/Outlet/Forms/usersCrud/CreateUser.jsx';
import UpdateUser from '../components/Outlet/Forms/usersCrud/UpdateUser.jsx';
import CreateTask from '../components/Outlet/Forms/exercisesCRUD/CreateTask.jsx';
import UpdateTask from '../components/Outlet/Forms/exercisesCRUD/UpdateTask.jsx';

import ListCourseProtected from '../components/Outlet/SectionProtected/ListCourseProtected.jsx';
import ListUsersProtected from '../components/Outlet/SectionProtected/ListUsersProtected.jsx';
import ListTaskProtected from '../components/Outlet/SectionProtected/ListTaskProtected.jsx';
import Admin from '../views/Admin.jsx';
import Layout from '../components/Layouts/Layout'


function PrivateRouter() {
  return (
    <div>
    <Router>
          <Routes>
           <Route element={<Layout />}>
           <Route pathname='/admin' element={<Admin/>} />  
             <Route pathname='/coursesprotected' element={<ListCourseProtected/>} />
             <Route path='/courses/create' element={<CreateCourse/>} />
             <Route path='/courses/:id/edit' element={<UpdateCourse/>}/>

          {/*  USERS */}

             <Route path='/usersprotected' element={<ListUsersProtected/>} />
             <Route path='/users/create' element={<CreateUser/>} />
             <Route path='/users/:id/edit' element={<UpdateUser/>}/>

          {/* TASK */}
      
             <Route path='/taskprotected' element={<ListTaskProtected/>} />
             <Route path='/tasks/create' element={<CreateTask/>} />
             <Route path='/tasks/:id/edit' element={<UpdateTask/>}/>
{/* FILTER PROGRESS
 */}             
             <Route path='/user-courses' element={<UserCourses/>}/>

  {/*       </RequireAuth> */}
            </Route>
        </Routes>
     </Router>
    </div>
  );
}

export default PrivateRouter;
