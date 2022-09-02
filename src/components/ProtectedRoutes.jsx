import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import HeaderPokedex from './HeaderPokedex'

const ProtectedRoutes = ({nameMaestro}) => {
  
  // console.log('valor es: '+ nameMaestro);
  if(nameMaestro){
    return (<div className='protedted-route'>
              <HeaderPokedex/>
              <Outlet/>
            </div>
    )
  }else{    
    return <Navigate to='/'/>
  }
}

export default ProtectedRoutes