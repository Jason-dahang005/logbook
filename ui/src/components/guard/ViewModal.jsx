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
      <div className="bg-white rounded-lg drop-shadow-md w-[700px]">
        <div className="text-center bg-slate-200 p-3 rounded-t-md relative">
          <h1 className='text-2xl font-bold px-2 py-3'>Log Details</h1>
          <GrFormClose onClick={onClose} className='hover:cursor-pointer absolute top-3 right-4 hover:bg-slate-300 rounded-full' size={30}/>
        </div>
        
        <div className="py-5 px-5">
          <table className='table-full'>
            <tbody>
              <tr>
                <th className='border p-2'>First Name:</th>
                <td className='border px-5 py-2 w-full whitespace-pre-line'>{ content.firstname }</td>
              </tr>
              <tr>
                <th className='border p-2'>Last Name:</th>
                <td className='border px-5 py-2 w-full whitespace-pre-line'>{ content.lastname }</td>
              </tr>
              <tr>
                <th className='border p-2'>Description:</th>
                <td className='border px-5 py-2 w-full whitespace-pre-line'>{ content.description }</td>
              </tr>
              <tr>
                <th className='border p-2'>Time logged:</th>
                <td className='border px-5 py-2 w-full whitespace-pre-line'>{ new Date(content.created_at).toLocaleTimeString() }</td>
              </tr>
              <tr>
                <th className='border p-2'>Date logged:</th>
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
