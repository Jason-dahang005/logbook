import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axiosInstance from '../../api/axios'
import { AiFillEye } from 'react-icons/ai'

const SecurityListTable = () => {

  const [guard, setGuard] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const getGuardData = setInterval(() => {
      axiosInstance.get(`guard-list`)
      .then((res) => {
        setGuard(res.data.guards)
        console.log(res.data.guards)
      })
      .catch((error) => {
        console.log(error)
      })
    }, 1000)
    return () => clearInterval(getGuardData)
  }, [guard])

  return (
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
                <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>Name</th>
                <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                guard.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>{item.name}</td>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                        <button className='flex items-center space-x-1 bg-green-500 text-white p-1 rounded-sm'>
                          <AiFillEye/>
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
  )
}

export default SecurityListTable
