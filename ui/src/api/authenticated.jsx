import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

const authenticated = () => {
  const token = localStorage.getItem('token')
  return (
    token ? <Outlet/> : <Navigate to="/" />
  )
}

export default authenticated
