import React from 'react'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { AiFillLock } from 'react-icons/ai'

import draw_img from '../../assets/img/logo.png'

const  Forgot = () => {

  return (
 
    <div className=' grid grid-cols-12'> 
      <div className='col-span-7 flex items-center justify-center'>
       <img src={draw_img} className="w-full" alt="" />
      </div>
      <div className='col-span-5'>
        <div className="flex flex-col mt-20 mr-3">
          <div className="grid place-items-center">
            <div className="p-10 lg:w-11/12  sm:px-10 bg-white rounded-lg shadow-2xl  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25)   border">
              <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800"></h2>
              <body class="">
    <div class="">
        <h1 class="text-4xl font-medium">Forgot password</h1>
      
        <p class=""> remember  password?  <a href="/" class="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Login </span><span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></span></a></p>
        


        <form action="" class="my-10">
            <div class="flex flex-col space-y-5">
                <label for="email">
                    <p class="font-medium text-slate-700 pb-2">Email address</p>
                    <input id="email" name="email" type="email" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address"/>
                </label>
               
            <p class="  text-center"> <a href="/reset"
  class=" px-20 py-3 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600  hover:text-blue-200 ">Submit</a></p>
                <p class="text-center">Not registered yet? <a href="/register" class="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></span></a></p>
            </div>
        </form>
    </div>
    
</body>

              

              </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Forgot