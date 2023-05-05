import React, { useEffect } from 'react'
import axiosInstance from '../../api/axios'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const OrgName = () => {

  const location = useLocation()
  const [org, setOrg] = useState([])

  useEffect(() => {
    axiosInstance.get(`show-org/${location.state.id}`)
    .then((response) => {
      setOrg(response.data.org)
    })
  }, [])

  return (
    <div className=''>
      <h1 className='text-2xl font-bold text-slate-800'>{org.name}</h1>
    </div>
  )
}

export default OrgName
