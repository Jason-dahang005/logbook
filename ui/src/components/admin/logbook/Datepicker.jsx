import React from 'react'
import DatePicker from 'react-datepicker'
import format from "date-fns/format"
import 'react-datepicker/dist/react-datepicker.css'
import { useContext } from 'react'
import { AdminLogbookContext } from '../../../context/admin/AdminLogbookContext'
import { BsCalendar2WeekFill } from 'react-icons/bs'

const Datepicker = () => {

  const { selectedDate, handleChange } = useContext(AdminLogbookContext)
  return (
    <div className='relative'>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <BsCalendar2WeekFill size={15} className='z-30 text-slate-700'/>
      </div>
      <DatePicker selected={selectedDate} onChange={handleChange} dateFormat="MM-dd-yyyy" className='text-center w-28 border border-gray-400 outline-none pl-8 focus:border-gray-700 filter-item text-xs hover:cursor-pointer'/>
    </div>
  )
}

export default Datepicker
