import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col'>
      <div className="w-full fixed z-50">
        <Header/>
      </div>
      <div className="w-full mt-[80px]">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
