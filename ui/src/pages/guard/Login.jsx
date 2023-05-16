import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axios'
import { MdEmail } from 'react-icons/md'
import { AiFillLock } from 'react-icons/ai'

import draw_img from '../../assets/img/logo.png'

const Login = () => {

  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    axiosInstance.post('login', JSON.stringify({
      email, password
    })).then((response) => {
      
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      localStorage.setItem('role', response.data.user.roles[0].name)

      const role = localStorage.getItem('role')

      if (role === 'user') {
       
        nav('/home')
      } else if (role === 'admin') {
        nav('/dashboard')
      }

    }).catch(error => {
      if(error.response.status === 422){
        setError(error.response.data.errors)
      }
    })
  }
  

  return (
    <div className=' grid grid-cols-12'> 
      <div className='col-span-7 flex items-center justify-center'>
       <img src={draw_img} className="w-full" alt="" />
      </div>

      <div className='col-span-5'>
        <div className="flex flex-col mt-20 mr-3">
          <div className="grid place-items-center">
            <div className="p-10 lg:w-11/12  sm:px-10 bg-white rounded-lg shadow-2xl  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25)   border">
              <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">Login</h2>
              <form className="mt-10" onSubmit={handleSubmit}>

                <label htmlFor="email" className="block mt-2 text-xs text-start mb-1 font-semibold text-gray-600 uppercase">E-mail</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MdEmail className='text-slate-500'/>
                  </div>
                  <input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="e-mail address" className="w-full rounded border border-slate-400 focus:border-slate-600 pl-8 pr-2 py-2 outline-none" />
                </div>
                { error.email && <div className='text-red-400 text-sm'>{ error.email[0] }</div> }

                <label htmlFor="password" className="block mt-2 text-xs text-start mb-1 font-semibold text-gray-600 uppercase">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <AiFillLock className='text-slate-500'/>
                  </div>
                  <input id="password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="password" className="w-full rounded border border-slate-400 focus:border-slate-600 pl-8 pr-2 py-2 outline-none" />
                </div>
                { error.password && <div className='text-red-400 text-sm'>{ error.password[0] }</div> }

                <button type="submit" className="w-full py-3 mt-10 bg-gray-800 rounded-smfont-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none">Login</button>
                
                <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                  <a href="/forgot" className="flex-2 underline">Forgot password?</a>
                  <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">or</p>
                  <Link to='register' className='flex-2 underline'>Create an Account</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login