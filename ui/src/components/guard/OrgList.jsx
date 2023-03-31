import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axios'
import user_img from '../../assets/img/user-img.png'
import empty_img from '../../assets/img/empty-img.png'
import { useState } from 'react'

const OrgList = () => {

  const nav = useNavigate()
  const [org, setOrg] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getOrgList = setInterval(() => {
      axiosInstance.get(`org-list`)
      .then((res) => {
        setOrg(res.data.organization)
        setLoading(false)
      }).catch((error) => {
        console.log(error)
      })
    }, 1000)
    return () => clearInterval(getOrgList)
  }, [org])

  
  if(loading){
    return (
      <div className='flex justify-center items-center h-[200px]'>
        <div style={{borderTopColor: 'transparent'}} className="w-16 h-16 border-4 border-red-400 border-double rounded-full animate-spin" />
      </div>

    )
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg: gap-5'>
      {
        org.length > 0 ? org.map((item) => {
          return (
            <div className="w-full border border-slate-300 rounded" key={item.id}>
              <div className="flex items-center space-x-1 p-2 bg-slate-300">
                <img src={user_img} alt="" className='w-16' />
              </div>
              <div className='px-3 py-3 text-center'>
                <div className="border py-2 drop-shadow-md">
                  <h3 className='font-bold text-2xl text-slate-600'>{ item.name }</h3>
                </div>
              </div>
              <div className="p-2">
                <button onClick={() => nav('/organization', {state: {id: item.id }})} className='hover:underline text-slate-500 text-sm'>View Organization</button>
              </div>
            </div>
          )
        }) : (
          <div className='col-span-4 bg-slate-200'>
            <div className="flex flex-col justify-center items-center">
              <img src={empty_img} className='w-[100px]' alt="" />
              <h1>No Organization Created</h1>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default OrgList
