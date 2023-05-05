import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import  Navbar  from '../Components/NavBar/NavBar';
import  FooterBar  from '../Components/Footer/FooterBar';


const PublicRoutes = () => {
  return (

      <Fragment>
        <Navbar/>
        <Outlet/>
        <FooterBar/>
      </Fragment>

  )
}

export default PublicRoutes
