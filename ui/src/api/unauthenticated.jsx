import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

const unauthenticated = () => {
  const token = localStorage.getItem('token')
  return (
    token ? <Navigate to="home" /> : <Outlet/>
  )
}

export default unauthenticated
