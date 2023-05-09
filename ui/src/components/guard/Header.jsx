import React, { useEffect, useState } from 'react'

// Image Imports
import user_img from '../../assets/img/user-img.png'

// React Router Dom Imports
import { Link, useLocation, useNavigate } from 'react-router-dom'

// React Icons Imports
import { IoMdArrowDropdown } from 'react-icons/io'
import { BiLogOut } from 'react-icons/bi'
import { FaCog, FaUserAlt } from 'react-icons/fa'

// Component Imports
import axiosInstance from '../../api/axios'
import Dropwdown from '../Dropwdown'
import OrgName from './OrgName'

const Header = () => {
  const locatoion = useLocation()
  const nav = useNavigate()
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState([])

  useEffect(() => {
    axiosInstance.get('auth-user').then((response) => {
      setUser(response.data.user)
    })
  }, [])

  const handleLogout = () => {
    axiosInstance.post('user-logout').then((response) => {
      localStorage.removeItem(['token'])
      nav('/')
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <header>
      <nav className='py-5 bg-slate-800 px-4 lg:px-6 shadow-[0px_2px_14px_6px_#00000024]'>
        <div className="flex justify-between items-center mx-auto">
          <div className="flex">
            <div>
              
            </div>
            <div>
              <h5 className='text-2xl'></h5>
            </div>
            
          </div>
          <div className="flex items-center space-x-2 hover:cursor-pointer"  onClick={() => {setOpen(!open)}}>
            <div className="">
              <img src={user_img} className="w-8 rounded-full" alt="" />
            </div>
            <span className='flex items-center'>
              <span className='text-white'>{ user.name }</span>
              <IoMdArrowDropdown className='fill-white'/>
            </span>
          </div>
          
          <div className={`w-[200px] text-slate-700 absolute bg-white right-5 top-14 rounded-md drop-shadow-md px-6 py-4 z-50 ${open ? 'opacity-100 visible translate-y-0 ease-in' : 'opacity-0 hidden translate-y-6 ease-in'}`} >
            <div className="text-center pb-2">
              Hi, { user.name }
            </div>
            <div className="">
              <ul>
                <li>
                  <Link className='flex items-center space-x-3 rounded hover:bg-slate-300 p-2'>
                    <FaUserAlt/>
                    <span>Profile</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border-t border-[1px] border-gray-300 my-2"></div>
            <div className="w-full">
              <button className='flex items-center justify-center hover:bg-slate-600 bg-slate-700 w-full py-2 text-white rounded-[5px] space-x-1' onClick={handleLogout}>
                <BiLogOut/>
                <span>Logout</span>
            </button></div>
          </div>
        </div>
      </nav>

      
    </header>
  )
}

export default Header
