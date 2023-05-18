import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axios'

import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { AiFillLock } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


import draw_img from '../../assets/img/logo.png'

const Register = () => {

  const nav = useNavigate()
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Success')

    axiosInstance.post('register', JSON.stringify({
      firstname, lastname, email, password
    })).then((response) => {
      console.log(response.data)
toast.success("Success")
      nav('/')
    }).catch(error => {
      if(error.response.status === 422){
        setError(error.response.data.errors)
      }
    })
  }
return (
    <>  <ToastContainer/>
    <div className='grid grid-cols-12'>
      <div className='col-span-7 flex items-center justify-center'>
       <img src={draw_img} className="w-full" alt="" />
      </div>


      <div className='col-span-5'>
        <div className="flex flex-col mt-20">
          <div className="grid place-items-center">
            <div className="p-10 lg:w-11/12  sm:px-10 bg-white rounded-lg shadow-2xl  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) border">
              <h2 className="registration-page-header-text">Register</h2>
              <form className="mt-10" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-2">
                  <div className="registration-page-form-group">
                    <div className="grid grid-cols-2 gap-x-3">
                      <div>
                        <label htmlFor="email" className="registration-page-form-label">First Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FaUser className='text-slate-500'/>
                          </div>
                          <input
                            id="firstname"
                            type="text"
                            name="firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            placeholder="First Name"
                            className={`w-full rounded border ${error.name? 'border-red-400' : 'border-slate-400'} focus:border-slate-600 pl-8 pr-2 py-2 outline-none`} />
                        </div>
                        {
                          error.firstname &&
                          <div className='text-red-400 text-sm'>{ error.firstname[0] }</div>
                        }
                      </div>
<div>
                        <label htmlFor="email" className="registration-page-form-label">Last Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FaUser className='text-slate-500'/>
                          </div>
                          <input 
                            id="lastname"
                            type="text"
                            name="lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            placeholder="Last Name"
                            className={`w-full rounded border ${error.name? 'border-red-400' : 'border-slate-400'} focus:border-slate-600 pl-8 pr-2 py-2 outline-none`} />
                        </div>
                        {
                          error.lastname &&
                          <div className='text-red-400 text-sm'>{ error.lastname[0] }</div>
                        }
                      </div>
                    </div>
                  </div>

                  <div className="registration-page-form-group">
                    <label htmlFor="email" className="registration-page-form-label">E-mail</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <MdEmail className='text-slate-500'/>
                      </div>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail address"
                        className={`w-full rounded border ${error.email? 'border-red-400' : 'border-slate-400'} focus:border-slate-600 pl-8 pr-2 py-2 outline-none`} />
                    </div>
                    {
                      error.email &&
                      <div className='text-red-400 text-sm'>{ error.email[0] }</div>
                    }
                  </div>

                  <div className="registration-page-form-group">
                    <label htmlFor="password" className="registration-page-form-label">Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <AiFillLock className='text-slate-500'/>
                      </div>
                      <input
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className={`w-full rounded border ${error.password? 'border-red-400' : 'border-slate-400'} focus:border-slate-600 pl-8 pr-2 py-2 outline-none`} />
                    </div>
                    {
                      error.password &&
                      <div className='text-red-400 text-sm'>{ error.password[0] }</div>
                    }
                  </div>

                  <div className="registration-page-form-group">
                    <button type="submit" onClick={handleSubmit} className="w-full py-3 mt-4 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none">Register</button>
                  </div>
                  
                  <div className="sm:flex sm:flex-wrap sm:mb-3 text-sm justify-center">
                    <Link to='/' className='flex-2 underline'>log in account</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default Register
