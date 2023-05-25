import React from 'react'
import { useContext, useEffect } from 'react'
import { AdminOrganizationContext } from '../../../context/admin/AdminOrganizationContext'

const AdminOrganizationTable = () => {

  const { organization, loading } = useContext(AdminOrganizationContext)

  // useEffect(() => {
  //   console.log(organization)
  // }, [organization])

  return (
    <div className='admin-table'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date created</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            loading ? (
              <tr>
                <td className='' colSpan={4}>
                  <div className="flex items-center justify-center h-32 border-b">
                    <div style={{borderTopColor: 'transparent'}} className="w-4 h-4 border-2 border-gray-600 rounded-full animate-spin" />
                    <p className="ml-2 text-gray-600 font-sans text-sm">Loading organizations...</p>
                  </div>
                </td>
              </tr>
            ) : (
              organization.length > 0 ? organization.map((item) => {
                return (
                  <tr key={item.id} className='border-b'>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{new Date(item.created_at).toLocaleDateString()}</td>
                    <td>
                      <span className='badge-success'>Active</span>
                    </td>
                  </tr>
                )
              }) : (
                <tr>
                  <td colSpan={4}>
                    <div className='text-gray-600 font-sans flex items-center justify-center text-sm py-5 border-b whitespace-nowrap h-32'>
                      <h1>No organization found</h1>
                    </div>
                  </td>
                </tr>
              )
            )
          }
        </tbody>
      </table>      
    </div>
  )
}

export default AdminOrganizationTable
