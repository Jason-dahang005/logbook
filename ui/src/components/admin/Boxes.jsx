import React from 'react'
import { GrOrganization } from 'react-icons/gr'
import { FaRegUser, FaInfoCircle } from 'react-icons/fa'
import { VscOrganization } from 'react-icons/vsc'
import { useState } from 'react'
import { useEffect } from 'react'
import axiosInstance from '../../api/axios'
import { Link } from 'react-router-dom'

const Boxes = () => {

  const [dataCount, setDataCount] = useState('')

  useEffect(() => {
    const countData = setInterval(() => {
      axiosInstance.get(`dashboard`)
      .then((res) => {
        console.log(res.data)
        setDataCount(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }, 1000)
    return () => clearInterval(countData)
  }, [dataCount])

  return (
    <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-1 p-1'>

      <div className="w-full shadow-xl h-52 rounded-md flex flex-col">
        <div className="flex justify-between items-center h-full p-4">
          <FaRegUser size={50} className='animate-pulse fill-blue-700'/>
          <div className="">
            <h1 className='text-xs text-slate-700 font-bold'>
              No. of Security Guard
            </h1>
            <h1 className='text-right text-2xl font-bold text-slate-700'>
              {
                dataCount.user
              }
            </h1>
          </div>
        </div>
        <div className="  ">
          <Link to="/security-list" className='group flex items-center font-medium text-sm justify-center border py-1 gap-x-1 bg-blue-700 hover:bg-blue-900 text-white'>
            More Info
            <FaInfoCircle />
          </Link>
        </div>
      </div>
 
      <div className="w-full shadow-xl h-52 rounded-md flex flex-col">
        
        <div className="flex justify-between items-center h-full p-4">
       

          <VscOrganization size={50} className='animate-bounce fill-green-700 text-green-500'/>
        
          <div className="">
            
            <h1 className='text-xs text-slate-700 font-bold'>
              No. of Organization
            </h1>
            <h1 className='text-right text-2xl font-bold text-slate-700'>
              {
                dataCount.organization
              }
            </h1>
          </div>
        </div>
        <div className="">
          <Link to="/organization-list" className='group flex items-center font-medium text-sm justify-center border py-1 gap-x-1 bg-green-700 hover:bg-green-900 text-white'>
            More Info
            <FaInfoCircle/>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Boxes
