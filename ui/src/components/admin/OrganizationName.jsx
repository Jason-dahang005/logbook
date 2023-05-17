import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axios'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const OrganizationName = () => {

  const location = useLocation()
  const nav = useNavigate()
  const [org, setOrg] = useState([])

  useEffect(() => {
    fetchOrgName()
  }, [])

  const fetchOrgName = () => {
    axiosInstance.get(`admin-org/${location.state.id}`)
    .then((response) => {
      setOrg(response.data.org)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className='flex item-center space-x-3'>
      <div>
        <MdKeyboardArrowLeft onClick={() => nav('/organization-list')} size={30} className='fill-gray-500 hover:cursor-pointer hover:bg-gray-100 rounded-full'/>
      </div>
      <div className="flex flex-col">
        <h1 className='font-bold text-xl text-gray-600'>{ org.name }</h1>
        {/* <h4 className='text-[12px] text-gray-600 font-semibold'>Security guard: { org.user.firstname} { org.user.lastname}</h4> */}
      </div>
    </div>
  )
}

export default OrganizationName
