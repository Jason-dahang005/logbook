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
      setOrg(response.data.organization)
      console.log(response.data)
    })
  }, [])

  return (
    <div className=''>
      <h1 className='text-[2rem] font-bold'></h1>
    </div>
  )
}

export default OrgName
