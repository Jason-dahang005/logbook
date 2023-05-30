import React from 'react'
import { useContext } from 'react'
import { AdminLogbookContext } from '../../../context/admin/AdminLogbookContext'
import { useLocation } from 'react-router-dom'


const OrganizationNameAndGuard = () => {

  const location = useLocation()

  const { org } = useContext(AdminLogbookContext)
  return (
    <div className='flex flex-col'>
      <span className='font-bold text-md pl-5'>{ org.name }</span>
    </div>
  )
}

export default OrganizationNameAndGuard
