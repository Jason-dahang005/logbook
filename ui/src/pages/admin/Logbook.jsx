import React from 'react'
import { useState } from 'react'
import AdminAttendanceTable from '../../components/admin/organizations/AdminAttendanceTable'
import { useLocation, useNavigate } from 'react-router-dom'
import AdminNoteTable from '../../components/admin/organizations/AdminNoteTable'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import AdminLogbookProvider from '../../context/admin/AdminLogbookContext'

const Logbook = () => {

  const location = useLocation()
  const nav = useNavigate()

  const [tab, setTab] = useState(1)


  const action = (index) => {
    setTab(index)
  }

  return (
    <AdminLogbookProvider>
      <div className="w-full mb-12 xl:mb-0 mx-auto px-3 pt-3">
        <div className="relative flex flex-col min-w-0 break-words border bg-white w-full mb-6 rounded-lg p-3">
          <div className="rounded-t mb-0 border-0">
            <div className='border-b pb-1 mb-3'>
              <AiOutlineArrowLeft onClick={() => nav('/organizations')} size={20} className='hover:cursor-pointer'/>
            </div>
            <div className=" flex justify-around">
              <button onClick={() => action(1)} className={` ${tab === 1 ? 'border-b-2 border-gray-400 text-gray-500' : 'border-b-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500' } w-full text-xs font-semibold py-2`}>Attendance</button>
              <button onClick={() => action(2)} className={` ${tab === 2 ? 'border-b-2 border-gray-400 text-gray-500' : 'border-b-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500' } w-full text-xs font-semibold py-2`}>Note</button>
            </div>
          </div>
          <div className="mt-1">
            <div className={`${tab === 1 ? 'block' : 'hidden'}`}>
              <AdminAttendanceTable/>
            </div>
            <div className={`${tab === 2 ? 'block' : 'hidden'}`}>
              <AdminNoteTable/>
            </div>
          </div>
        </div>
      </div>
    </AdminLogbookProvider>
  )
}

export default Logbook
