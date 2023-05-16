import React from 'react'
import DataContext from '../../context/DataContext'
import { useContext } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const OrganizationListTable = () => {

  const nav = useNavigate()

  const { loading, organization, filterData } = useContext(DataContext)

  return (
    <div className='admin-table'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date created</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            loading ? (
              <tr>
                <td className='' colSpan={6}>
                  <div className="flex items-center justify-center h-32 border-b">
                    <div style={{borderTopColor: 'transparent'}} className="w-4 h-4 border-2 border-gray-600 rounded-full animate-spin" />
                    <p className="ml-2 text-gray-600 font-sans text-sm">Loading organizations...</p>
                  </div>
                </td>
              </tr>
            ) : (
              filterData.length > 0 ? filterData.map((item) => {
                return (
                  <tr key={item.id} className='border-b'>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{new Date(item.created_at).toLocaleDateString()}</td>
                    <td>
                      <span className='badge-success'>Active</span>
                    </td>
                    <td>
                      <button onClick={() => nav('/logbook', {state: {id: item.id }})} className='btn-success flex items-center space-x-1'>
                        <AiFillEye/>
                        <span>Details</span>  
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

export default OrganizationListTable
