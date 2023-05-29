import React from 'react'
import DataContext from '../../../context/DataContext'
import { useContext, useState } from 'react'

import DatePicker from 'react-datepicker'
import format from "date-fns/format"
import 'react-datepicker/dist/react-datepicker.css'
import { FaCalendarAlt } from 'react-icons/fa'

const AttendanceDatepicker = () => {

  const { attendanceSelectedDate, setAttendanceSelectedDate } = useContext(DataContext)

  const [open, setOpen] = useState(false)

  const handleDate = (e) => {
    setOpen(!open)
    setAttendanceSelectedDate(e)
  }

  const handleOpenCalendar = () => {
    setOpen(!open)
  }

  return (
    <div className='relative'>
      <DatePicker
        selected={attendanceSelectedDate}
        value={format(attendanceSelectedDate, 'MM-dd-yyyy')}
        className='border outline-none h-8 w-32 pl-3 rounded-md text-gray-600 text-sm font-semibold'
        disabled
      />
      <div className='absolute inset-y-0 right-0 flex items-center px-2 rounded-full z-50 hover:cursor-pointer mr-2 hover:bg-gray-200'>
        <FaCalendarAlt onClick={handleOpenCalendar} className='fill-gray-500'/>
      </div>
      {
        open && (
          <div className="absolute z-0 right-0 top-10">
            <DatePicker selected={attendanceSelectedDate} onChange={handleDate} inline/>
          </div>
        )
      }
    </div>
  )
}

export default AttendanceDatepicker
