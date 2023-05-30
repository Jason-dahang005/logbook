import React from 'react'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { AiFillLock } from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import draw_img from '../../assets/img/logo.png'

const  Reset = () => {

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
    <h1 className="text-3xl font-bold mb-4  pt-5 flex flex-row"><Link to="/forgot"><AiOutlineArrowLeft className='rounded-full hover:bg-slate-300 p-1 mt-1'size={30}/></Link>Reset Password</h1>
    
        


        <form action="" class="my-1">
            <div class="flex flex-col space-y-5">
                <label for="email">
                    <p class="font-medium text-slate-700 pb-2">Email</p>
                    <input id="email" name="email" type="email" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address"/>
                </label>

                <label for="password">
                    <p class="font-medium text-slate-700 pb-2">New password</p>
                    <input id="email" name="email" type="password" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter new Password"/>
                </label>
                <label for="password">
                    <p class="font-medium text-slate-700 pb-2">Confirm password</p>
                    <input id="email" name="email" type="password" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Confirm"/>
                </label>
               
                <button  class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                      </svg>
                      
                      <span>Reset Password
                      </span>
                </button>
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

export default Reset