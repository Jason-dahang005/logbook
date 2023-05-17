import React from 'react'
import { BiSearch } from 'react-icons/bi'

const OrgNameFilter = () => {
  return (
    <div className='relative'>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <BiSearch className='text-slate-400'/>
      </div>
      <input type="text" className='border border-slate-400 pl-8 pr-2 py-1 outline-none rounded text-slate-70' placeholder='Search organization' />
    </div>
  )
}

export default OrgNameFilter