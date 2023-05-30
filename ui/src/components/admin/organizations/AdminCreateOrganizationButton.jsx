import React from 'react'
import { useContext, useEffect } from 'react'
import { AdminOrganizationContext } from '../../../context/admin/AdminOrganizationContext'
import { AiFillPlusCircle } from 'react-icons/ai'

const AdminCreateOrganizationButton = () => {

  const { closeModal, openModal, isModalOpen } = useContext(AdminOrganizationContext)

  const close = closeModal

  return (
    <button onClick={openModal} className='flex justify-center items-center space-x-1 text-xs bg-blue-500 text-white py-1 rounded px-1 hover:bg-blue-600'>
      <AiFillPlusCircle size={15}/>
      <span>Create Organization</span>
    </button>
  )
}

export default AdminCreateOrganizationButton
