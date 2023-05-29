import React from 'react'

import { AdminOrganizationContext } from '../../context/admin/adminOrganizationProvider'
import { useContext } from 'react'
import AdminOrganization from '../../pages/admin/AdminOrganization'


const AdminOrganizationData = () => {

  return (props) => {
    const { name } = useContext(AdminOrganizationContext)

    return <AdminOrganization name={name} />
  }
}

export default AdminOrganizationData