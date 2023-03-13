import React from 'react'
import { Container, Typography } from '@mui/material'
import Navbar from '../components/Layouts/Navbar/Navbar'
import SignIn from '../components/SignIn/SignIn.jsx';
import Footer from '../components/Layouts/Footer/Footer'


function Home() {
  
  return (
  <> 
      <Navbar/>
        <Container sx={{ p: 2 }}>
          <SignIn/> 
          <Typography variant="h2" component="h2" sx={{ p: 2 }}>Bienvenid@s a tod@s!</Typography>
          <Typography variant="body1" component="body1" sx={{ p: 10, m: 5 }}>FactoriAcademy es una plataforma didáctica para personas como tu que han sido preseleccionadas por Factoría F5 con la idea de poder acceder a alguno de sus cursos y bootcamps. Nuestro objetivo es que podáis tener vuestro primer contacto con el código, y aseguraros que eso no muerde.
          Tenéis que hace todos los ejercicios que se os muestre en vuestro perfil por un tiempo limitado, asi que date prisa! Pero no os alarmes, te daremos documentación oficial, correcciones y un chat con el administrador. No pasa nada si no te convence el mundo de código. Lo mejor es probarlo y que te lleves la experiencia!</Typography>
        </Container>
      <Footer/>
  </>
   
  )
}

export default Home