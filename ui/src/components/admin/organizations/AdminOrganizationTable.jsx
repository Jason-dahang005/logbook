import React from 'react'
import { useContext, useEffect } from 'react'
import { AdminOrganizationContext } from '../../../context/admin/AdminOrganizationContext'
import { GiNotebook } from 'react-icons/gi'
import { useLocation, useNavigate } from 'react-router-dom'

const AdminOrganizationTable = () => {

  const { organization, loading } = useContext(AdminOrganizationContext)
  const nav = useNavigate()
  const location = useLocation()

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
            <th>Assigned guard</th>
            <th>Date created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            loading ? (
              <tr>
                <td className='' colSpan={5}>
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
                    <td>{item.user.firstname} {item.user.lastname}</td>
                    <td>{new Date(item.created_at).toLocaleDateString()}</td>
                    <td>
                      <button onClick={() => nav('/logbook', {state: {id: item.id}})} className='flex justify-center items-center bg-green-500 text-white p-1 rounded-md space-x-1'>
                        <GiNotebook/>
                        <span>Logbook</span>
                      </button>
                    </td>
                  </tr>
                )
              }) : (
                <tr>
                  <td colSpan={5}>
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
