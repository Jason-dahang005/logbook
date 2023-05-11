import React from 'react'
import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'

const OrgNameFilter = () => {

  const [searchOrg, setSearchOrg] = useState('')

  const clearOrgSearch = () => {
    setSearchOrg('')
  }

  return (
    <div className='relative'>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <BiSearch className='text-slate-400'/>
      </div>
      <input type="text" className='border border-slate-400 pl-8 pr-2 py-1 outline-none rounded text-slate-700' placeholder='Search' />
      <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
        <GrFormClose size={20}  className='text-slate-700 hover:cursor-pointer z-50 hover:bg-gray-200 rounded-full'/>
      </div>
    </div>
  )
}

export default OrgNameFilter