
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from '../views/Home.jsx';
import Notfoundpage from '../views/Notfoundpage.jsx';
import Cursos from '../views/Cursos.jsx';
import DetailCourse from '../views/DetailCourse.jsx';



function PublicRouter() {
  return (
    <div>
    
      <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/cursos' element={<Cursos/>} />
            <Route path='*' element={<Notfoundpage/>} />
            <Route path='/courses/:id' element={<DetailCourse/>} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default PublicRouter;
