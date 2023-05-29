import DataContext from '../../context/DataContext'
import { useContext } from 'react'
import { BiSearch } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'

const OrganizationSearchFilter = () => {

  const { searchQuery, setSearchQuery } = useContext(DataContext)

  return (
    <div className='relative'>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <BiSearch className='text-slate-700'/>
      </div>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='border border-gray-300 rounded-lg pl-8 outline-none focus:border-gray-700 h-8 text-xs' placeholder='Search'/>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <GrFormClose size={20} onClick={() => setSearchQuery('')} className='text-slate-700 hover:cursor-pointer z-50 hover:bg-gray-200 rounded-full'/>
      </div>
    </div>
  )
}

export default OrganizationSearchFilter
