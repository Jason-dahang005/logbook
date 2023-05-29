import React from 'react'
import { AdminOrganizationContext } from '../context/admin/AdminOrganizationContext'

const AdminOrganizationProvider = ({ children }) => {

  const name = 'jason'

  return (
    <AdminOrganizationContext.Provider value={name}>
      {children}
    </AdminOrganizationContext.Provider>
  )
}

export default AdminOrganizationProvider
