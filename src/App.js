import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import UserCourses from './components/Outlet/Section/UserCourses';
import Home from './views/Home';
import CreateCourse from './components/Outlet/Forms/coursesCRUD/CreateCourse';
import UpdateCourse from './components/Outlet/Forms/coursesCRUD/UpdateCourse';
import Notfoundpage from './views/Notfoundpage';
import ListCourseProtected from './components/Outlet/SectionProtected/ListCourseProtected';
import AdminProfile from './views/AdminProfile';

//import {RequiredAuth} from './hoc/RequireAuth';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<Notfoundpage/>} />

 {/*       <RequireAuth> */} 
             
           <Route path='admin' element={<AdminProfile/>} />
             <Route path='/coursesprotected' element={<ListCourseProtected/>} />
             <Route path='/courses/create' element={<CreateCourse/>} />
             <Route path='/courses/:id/edit' element={<UpdateCourse/>}/>

            <Route path='/courses/my-courses' element={<UserCourses/>} />
  {/*       </RequireAuth> */}
          </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
