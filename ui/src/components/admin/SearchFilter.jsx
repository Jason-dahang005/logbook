import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import DataContext from '../../context/DataContext'
import { useContext } from 'react'

const SearchFilter = () => {

  const { clearSearch, handleSearch, searchQuery } = useContext(DataContext)

  return (
    <div className='relative'>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <BiSearch className='text-gray-500'/>
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch} 
        placeholder='Search' 
        className='border border-gray-300 rounded-md pl-8 outline-none focus:border-gray-500 h-8 text-sm text-gray-500'
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <GrFormClose
          size={20}
          onClick={clearSearch}
          className='text-gray-400 hover:cursor-pointer z-50 hover:bg-gray-200 rounded-full'/>
      </div>
    </div>
  )
}

export default SearchFilter
