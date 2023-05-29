import React from 'react'
import { useContext } from 'react'
import { AdminLogbookContext } from '../../../context/admin/AdminLogbookContext'
import { useLocation } from 'react-router-dom'


const OrganizationNameAndGuard = () => {

  const location = useLocation()

  const { org } = useContext(AdminLogbookContext)
  return (
    <div className='flex flex-col'>
      <span className='font-semibold text-md'>{ org.name }</span>
      <span className='text-[10px]'>{org.user.firstname} {org.user.lastname} </span>
    </div>
  )
}

export default OrganizationNameAndGuard
