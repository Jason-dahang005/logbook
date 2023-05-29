import React from 'react'
import DataContext from '../../context/DataContext'
import { useContext } from 'react'

const LogbookTable = () => {

  const { loading, attendance, filteredData } = useContext(DataContext)

  return (
    <div className='admin-table'>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Description</th>
            <th>Time Logged</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            loading ? (
              <tr>
                <td colSpan={5}>
                  <div className="flex items-center justify-center h-32 border-b">
                    <div style={{borderTopColor: 'transparent'}} className="w-4 h-4 border-2 border-gray-600 rounded-full animate-spin" />
                    <p className="ml-2 text-gray-600 font-sans text-sm">Loading logbook...</p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredData.length > 0 ? filteredData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.description}</td>
                    <td>{new Date(item.created_at).toLocaleTimeString()}</td>
                    <td>
                      <button className='btn-success'>Details</button>
                    </td>
                  </tr>
                )
              }) : (
                <tr>
                  <td colSpan={5}>
                    <div className='text-gray-600 font-sans flex items-center justify-center text-sm py-5 border-b whitespace-nowrap h-32'>
                      <h1>No data found</h1>
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

export default LogbookTable
