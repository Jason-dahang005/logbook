import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axios'
import { MdEmail } from 'react-icons/md'
import { AiFillLock } from 'react-icons/ai'

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
      console.log(response.data)
      nav('home')
    }).catch(error => {
      if(error.response.status === 422){
        setError(error.response.data.errors)
      }
    })
  }

  return (
    <div className="flex flex-col mt-20">
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">Login</h2>
          <form className="mt-10" onSubmit={handleSubmit}>

            <label htmlFor="email" className="block mt-2 text-xs text-start mb-1 font-semibold text-gray-600 uppercase">E-mail</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MdEmail className='text-slate-500'/>
              </div>
              <input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="e-mail address" className="w-full rounded border border-slate-400 focus:border-slate-600 pl-8 pr-2 py-2 outline-none" />
            </div>
            { error.email && <div className='text-red-500'>{ error.email[0] }</div> }

            <label htmlFor="password" className="block mt-2 text-xs text-start mb-1 font-semibold text-gray-600 uppercase">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <AiFillLock className='text-slate-500'/>
              </div>
              <input id="password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="password" className="w-full rounded border border-slate-400 focus:border-slate-600 pl-8 pr-2 py-2 outline-none" />
            </div>
            { error.password && <div className='text-red-500'>{ error.password[0] }</div> }

            <button type="submit" className="w-full py-3 mt-10 bg-gray-800 rounded-smfont-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none">Login</button>
            
            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
              <a href="#" className="flex-2 underline">Forgot password?</a>
              <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">or</p>
              <Link to='register' className='flex-2 underline'>Create an Account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
