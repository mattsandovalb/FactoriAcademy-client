
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from '../views/Home.jsx';
import CreateCourse from '../components/Outlet/Forms/coursesCRUD/CreateCourse.jsx';
import UpdateCourse from '../components/Outlet/Forms/coursesCRUD/UpdateCourse.jsx';
import CreateUser from '../components/Outlet/Forms/usersCrud/CreateUser.jsx';
import UpdateUser from '../components/Outlet/Forms/usersCrud/UpdateUser.jsx';
import CreateTask from '../components/Outlet/Forms/exercisesCRUD/CreateTask.jsx';
import UpdateTask from '../components/Outlet/Forms/exercisesCRUD/UpdateTask.jsx';
import Notfoundpage from '../views/Notfoundpage.jsx';
import ListCourseProtected from '../components/Outlet/SectionProtected/ListCourseProtected.jsx';
import ListUsersProtected from '../components/Outlet/SectionProtected/ListUsersProtected.jsx';
import ListTaskProtected from '../components/Outlet/SectionProtected/ListTaskProtected.jsx';
import Admin from '../views/Admin.jsx';
import UserProfile from "../views/UserProfile.jsx";
import Cursos from '../views/Cursos.jsx';
import Layout from '../components/Layouts/Layout.jsx'


function Router() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/cursos' element={<Cursos/>} />
            <Route path='*' element={<Notfoundpage/>} />
            
 {/*       </RequireAuth> */}

            <Route path='/courses/:id' element={<UserProfile/>} />
            <Route element={<Layout />}>
              <Route path='/admin' element={<Admin/>} />  
              <Route path='/coursesprotected' element={<ListCourseProtected/>} />
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
               
  {/*       </RequireAuth> */}
            </Route>
         </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default Router;
