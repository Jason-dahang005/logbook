import React from 'react'
import { ImFileEmpty } from 'react-icons/im'
import { useContext } from 'react'
import { AdminLogbookContext } from '../../../context/admin/AdminLogbookContext'

const AdminNoteTable = () => {

  const { notes, loading, noteSearch } = useContext(AdminLogbookContext)

  return (
    <div className='admin-table'>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Time logged</th>
            <th>Date logged</th>
          </tr>
        </thead>
        <tbody>
          {
            loading ? (
              <tr>
                <td className='text-center py-5' colSpan={3}>
                  <div className='flex justify-center items-center space-x-2 py-5'>
                    <div style={{borderTopColor: 'transparent'}} className="w-6 h-6 border-4 border-slate-700 border-double rounded-full animate-spin" />
                    <h1 className='font-bold text-sm text-slate-700'>Loading</h1>
                  </div>
                </td>
              </tr>
            ) : (
              noteSearch.length > 0 ? noteSearch.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.description}</td>
                    <td>{new Date(item.created_at).toLocaleTimeString()}</td>
                    <td>{new Date(item.created_at).toLocaleDateString()}</td>
                  </tr>
                )
              }): (
                <tr>
                  <td colSpan={3}>
                    <div className='flex flex-col justify-center items-center pt-4'>
                      <ImFileEmpty size={30}/>
                      <h1 className='font-bold text-sm text-slate-700 py-5'>No Data</h1>
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

export default AdminNoteTable
