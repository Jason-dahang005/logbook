import React, { useEffect, useState } from 'react'

// Image Imports
import user_img from '../../assets/img/user-img.png'

// React Router Dom Imports
import { Link, useNavigate } from 'react-router-dom'

// React Icons Imports
import { IoMdArrowDropdown } from 'react-icons/io'
import { BiLogOut } from 'react-icons/bi'
import { FaCog, FaUserAlt } from 'react-icons/fa'
import axiosInstance from '../../api/axios'

const Header = () => {

  const nav = useNavigate()
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState([])

  useEffect(() => {
    axiosInstance.get('auth-user').then((response) => {
      setUser(response.data.user)
    })
  }, [])

  const handleLogout = () => {
    axiosInstance.post('logout').then((response) => {
      localStorage.removeItem(['token'])
      nav('/')
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <header>
      <nav className='py-5 bg-slate-800 text-white px-4 lg:px-6'>
        <div className="flex justify-between items-center mx-auto">
          <div className="">
            <h5>hello</h5>
          </div>
          <div className="flex items-center space-x-2 hover:cursor-pointer"  onClick={() => {setOpen(!open)}}>
            <div className="">
              <img src={user_img} className="w-8 rounded-full" alt="" />
            </div>
            <span className='flex items-center'>
              <span>{ user.name }</span>
              <IoMdArrowDropdown/>
            </span>
          </div>
        </div>
      </nav>

      <div className={`w-[200px] text-slate-700 absolute bg-white right-5 top-14 rounded-md drop-shadow-md px-6 py-4 z-50 ${open ? 'opacity-100 visible translate-y-0 ease-in' : 'opacity-0 hidden translate-y-6 ease-in'}`} >
        <div className="text-center pb-2">
          Hi, { user.name }
        </div>
        <div className="">
          <ul>
            <li><Link className='flex items-center rounded hover:bg-slate-300 p-2'><FaUserAlt/>&nbsp;Profile</Link></li>
            <li><Link className='flex items-center rounded hover:bg-slate-300 p-2'><FaCog/>&nbsp;Setting</Link></li>
          </ul>
        </div>
        <div className="border-t border-[1px] border-gray-300 my-2"></div>
        <div className="w-full">
          <button className='flex items-center justify-center hover:bg-slate-600 bg-slate-700 w-full py-2 text-white rounded-[5px] space-x-1' onClick={handleLogout}>
            <BiLogOut/>
            <span>Logout</span>
         </button></div>
      </div>
    </header>
  )
}

export default Header
