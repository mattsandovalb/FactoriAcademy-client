import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {ListCourse} from './views/ListCourse';
import Home from './views/Home';
import {CreateCourse} from './components/CreateCourse';
import {UpdateCourse} from './components/UpdateCourse';
import {ViewCourse} from './components/ViewCourse';
import Notfoundpage from './views/Notfoundpage';
import ListCourseProtected from './components/ListCourseProtected';
//import {RequiredAuth} from './hoc/RequireAuth';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/courses' element={<ListCourse/>} />
            <Route path='/courses/view/:id' element={<ViewCourse/>} />
 {/*       <RequireAuth> */}
            <Route path='/coursesprotected' element={<ListCourseProtected/>} />
             <Route path='/courses/create' element={<CreateCourse/>} />
             <Route path='/courses/edit/:id' element={<UpdateCourse/>}/>
  {/*       </RequireAuth> */}
            <Route path='*' element={<Notfoundpage/>} />
          </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
