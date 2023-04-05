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
import Dropwdown from '../Dropwdown'

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
          <Dropwdown/>
        </div>
      </nav>

      
    </header>
  )
}

export default Header
