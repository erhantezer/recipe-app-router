import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const currentUser =JSON.parse(sessionStorage.getItem("user"))
  
  return (
    currentUser ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRouter