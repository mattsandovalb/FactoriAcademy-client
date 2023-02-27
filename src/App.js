import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './views/Home.jsx';
import CreateCourse from './components/Outlet/Forms/coursesCRUD/CreateCourse.jsx';
import UpdateCourse from './components/Outlet/Forms/coursesCRUD/UpdateCourse.jsx';

import CreateUser from './components/Outlet/Forms/usersCrud/CreateUser.jsx';
import UpdateUser from './components/Outlet/Forms/usersCrud/UpdateUser.jsx';
import Notfoundpage from './views/Notfoundpage.jsx';
import ListCourseProtected from './components/Outlet/SectionProtected/ListCourseProtected.jsx';
import ListUsersProtected from './components/Outlet/SectionProtected/ListUsersProtected.jsx';
import AdminProfile from './views/AdminProfile.jsx';
import UserProfile from "./views/UserProfile.jsx"
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

  {/*       </RequireAuth> */}
          </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
