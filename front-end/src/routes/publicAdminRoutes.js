
import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import  Dashbord  from '../Components/Dashboard/dashbord';
const publicAdminRoutes = () => {
  return (
    <div>
       <Fragment>
        <Dashbord/>
        <Outlet/>
       </Fragment>
    </div>
  )
}

export default publicAdminRoutes
