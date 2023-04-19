import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axiosInstance from '../../api/axios'
import { AiFillEye } from 'react-icons/ai'

const OrganizationListTable = () => {

  const [org, setOrg] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getOrgData = setInterval(() => {
      axiosInstance.get(`admin-org-list`)
      .then((res) => {
        //console.log(res.data.organization)
        setOrg(res.data.organization)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
    }, 1000);
    return () => clearInterval(getOrgData)
  }, [org])

  if(loading){
    return (
      <div className="flex items-center justify-center h-60">
        <div style={{borderTopColor: 'transparent'}} className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin" />
        <p className="ml-2">Loading...</p>
      </div>
    )
  }

  return (
    <div className="w-full px-4 mx-auto py-5">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full drop-shadow-xl rounded">
        <div className="rounded-t px-2 py-3 border-0">
          <div className="relative w-full px-1 max-w-full flex-grow flex-1">
            <h3 className="font-bold text-xl text-blueGray-700">List of Organization</h3>
          </div>
        </div>
        <div className='w-full h-[500px] overflow-y-auto'>
          <table className=''>
            <thead className='bg-slate-300 sticky top-0'>
              <tr>
                <th className='text-left p-3 w-2/12'>Name</th>
                <th className='text-left p-3 w-9/12'>Description</th>
                <th className='text-center p-3 w-1/12'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                org.length > 0 ? org.map((item) => {
                  return (
                    <tr key={item.id} className='even:bg-slate-200'>
                      <td className='text-sm p-3'>{item.name}</td>
                      <td className='text-sm p-3'>{item.description}</td>
                      <td className='text-sm p-3'>
                        <button className='flex items-center space-x-1 bg-green-500 text-white py-1 px-2 rounded-sm'>
                          <AiFillEye size={20} />
                          <span className='text-sm'>View</span>
                        </button>
                      </td>
                    </tr>
                  )
                }) : (
                  <tr>
                    <td className='text-center py-4' colSpan={5}>Table is currently empty</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OrganizationListTable
