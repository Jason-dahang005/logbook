import React from 'react'
import { useEffect } from 'react'
import { GrFormClose } from 'react-icons/gr'

const ViewModal = ({ open, onClose, content }) => {
  
  if(!open) return null

  useEffect(() => {
    console.log(content)
  }, [content])
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded drop-shadow-md w-[700px]">
        <div className="flex justify-between items-center bg-slate-200 p-3 rounded-t-md">
          <h1 className='text-2xl font-bold px-2 py-3'>Log Details</h1>
          <GrFormClose onClick={onClose} className='hover:cursor-pointer' size={30}/>
        </div>
        
        <div className="py-3 px-5">
          <table className=''>
            <tbody>
              <tr>
                <th className='border p-2 w-[150px]'>First Name:</th>
                <td className='border px-5 py-2 w-full whitespace-pre-line'>{ content.firstname }</td>
              </tr>
              <tr>
                <th className='border p-2 w-[150px]'>Last Name:</th>
                <td className='border px-5 py-2 w-full whitespace-pre-line'>{ content.lastname }</td>
              </tr>
              <tr>
                <th className='border p-2 w-[150px]'>Description:</th>
                <td className='border px-5 py-2 w-full whitespace-pre-line'>{ content.description }</td>
              </tr>
              <tr>
                <th className='border p-2 w-[150px]'>Time logged:</th>
                <td className='border px-5 py-2 w-full whitespace-pre-line'>{ new Date(content.created_at).toLocaleTimeString() }</td>
              </tr>
              <tr>
                <th className='border p-2 w-[150px]'>Date logged:</th>
                <td className='border px-5 py-2 w-full whitespace-pre-line'>{ new Date(content.created_at).toLocaleDateString() }</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ViewModal
