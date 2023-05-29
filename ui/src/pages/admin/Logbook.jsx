import React from 'react'
import { useState } from 'react'
import AdminAttendanceTable from '../../components/admin/logbook/AdminAttendanceTable'
import { useLocation, useNavigate } from 'react-router-dom'
import AdminNoteTable from '../../components/admin/logbook/AdminNoteTable'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import AdminLogbookProvider from '../../context/admin/AdminLogbookContext'
import Datepicker from '../../components/admin/logbook/Datepicker'
import AdminLogSearch from '../../components/admin/logbook/AdminLogSearch'

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
          </div>
          <div className="">
            <div className='flex justify-between'>
              <div className="flex justify-around">
                <button onClick={() => action(1)} className={` ${tab === 1 ? 'border-t-2 border-slate-700 text-slate-700' : 'text-gray-400 hover:bg-gray-100 hover:text-gray-500' } text-xs font-semibold py-2 w-28`}>Attendance</button>
                <button onClick={() => action(2)} className={` ${tab === 2 ? 'border-t-2 border-slate-700 text-slate-700' : 'text-gray-400 hover:bg-gray-100 hover:text-gray-500' } text-xs font-semibold py-2 w-28`}>Note</button>
              </div>
              <div className='flex items-center justify-end space-x-1 py-2'>
                <AdminLogSearch/>
                <Datepicker/>
              </div>
            </div>
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
