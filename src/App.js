
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import UserCourses from './components/Outlet/Section/UserCourses';
import Home from './views/Home';
import CreateCourse from './components/Outlet/Forms/coursesCRUD/CreateCourse';
import UpdateCourse from './components/Outlet/Forms/coursesCRUD/UpdateCourse';

import CreateUser from './components/Outlet/Forms/usersCrud/CreateUser';
import UpdateUser from './components/Outlet/Forms/usersCrud/UpdateUser';
import Notfoundpage from './views/Notfoundpage';
import ListCourseProtected from './components/Outlet/SectionProtected/ListCourseProtected';
import ListUsersProtected from './components/Outlet/SectionProtected/ListUsersProtected';
import AdminProfile from './views/AdminProfile';
import UserProfile from "./views/UserProfile"
//import {RequiredAuth} from './hoc/RequireAuth';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<Notfoundpage/>} />
            <Route path='/user' element={<UserProfile/>} />

 {/*       <RequireAuth> */} 
             
           <Route path='/admin' element={<AdminProfile/>} />
             <Route path='/coursesprotected' element={<ListCourseProtected/>} />
             <Route path='/courses/create' element={<CreateCourse/>} />
             <Route path='/courses/:id/edit' element={<UpdateCourse/>}/>
          
          {/*  USERS */}

             <Route path='/usersprotected' element={<ListUsersProtected/>} />
             <Route path='/users/create' element={<CreateUser/>} />
             <Route path='/users/:id/edit' element={<UpdateUser/>}/>

            <Route path='/courses/my-courses' element={<UserCourses/>} />
  {/*       </RequireAuth> */}
          </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
