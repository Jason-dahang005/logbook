import React from 'react'
import { GrFormClose } from 'react-icons/gr'

const ViewModal = ({ open, onClose }) => {
  
  if(!open) return null
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded drop-shadow-md w-[450px] px-5 py-3">
        <div className="flex justify-between items-center">
          <h1 className='text-lg font-bold'>Details</h1>
          <GrFormClose onClick={onClose} className='hover:cursor-pointer' size={30}/>
        </div>
        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-span-1">
            <input type="text" className='bg-slate-200 w-full px-4 py-2' placeholder='First Name' />
          </div>
          <div class="row-span-1 bg-slate-200">
            <input type="text" className='bg-slate-200 w-full px-4 py-2' placeholder='Last Name' />
          </div>
          <div class="row-span-3 bg-slate-200">
            <input type="text" className='bg-slate-200 w-full px-4 py-2' placeholder='Description' />
          </div>
          <div class="row-span-5 col-span-2 bg-slate-200">
            <textarea name="" id="" cols="30" rows="10" className='bg-slate-200 w-full px-4 py-2' placeholder='History'></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewModal
