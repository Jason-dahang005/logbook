import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axiosInstance from '../../api/axios'
import { AiFillEye } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const SecurityListTable = () => {

  const nav = useNavigate()
  const [guard, setGuard] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const getGuardData = setInterval(() => {
      axiosInstance.get(`guard-list`)
      .then((res) => {
        setGuard(res.data.guards)
        setLoading(false)
        console.log(res.data.guards)
      })
      .catch((error) => {
        console.log(error)
      })
    }, 1000)
    return () => clearInterval(getGuardData)
  }, [guard])

  if(loading){
    return (
      <div className="flex items-center justify-center h-60">
        <div style={{borderTopColor: 'transparent'}} className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin" />
        <p className="ml-2">Loading...</p>
      </div>
    )
  }

  return (
    <>
    <div className="w-full mb-12 xl:mb-0 px-4 mx-auto py-5">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="relative w-full px-2 max-w-full flex-grow flex-1">
            <h3 className="font-bold text-xl text-blueGray-700">List of Security Guard</h3>
          </div>
        </div>
        <div className='block w-full overflow-x-auto'>
          <table className='items-center bg-transparent w-full border-collapse'>
            <thead>
              <tr>
                <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>First Name</th>
                <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>Last Name</th>



                <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                guard.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>{item.firstname}</td>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>{item.lastname}</td>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'></td>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                        <button onClick={() => nav('/profile', {state: {id: item.id }})} className='flex items-center space-x-1 bg-green-500 text-white py-1 px-2 rounded-sm'>
                          <AiFillEye size={20} />
                          <span className='text-sm'>View</span>
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>

    </>
  )
}

export default SecurityListTable
