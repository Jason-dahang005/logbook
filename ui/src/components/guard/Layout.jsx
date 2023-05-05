import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col'>
      <div className="w-full">
        <Header/>
      </div>
      <div className="w-full">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
