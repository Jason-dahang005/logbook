import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import { useContext } from 'react'
import { AdminLogbookContext } from '../../../context/admin/AdminLogbookContext'

const AdminLogSearch = () => {

  const { search, handleSearch, clearSearch} = useContext(AdminLogbookContext)

  return (
    <div className='relative'>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <BiSearch className='text-slate-700'/>
      </div>
      <input type="text" value={search} onChange={handleSearch} className='border border-gray-400 pl-8 outline-none focus:border-gray-700 filter-item text-xs' placeholder='Search'/>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <GrFormClose size={20} onClick={clearSearch} className='text-slate-700 hover:cursor-pointer z-30 hover:bg-gray-200 rounded-full'/>
      </div>
    </div>
  )
}

export default AdminLogSearch
