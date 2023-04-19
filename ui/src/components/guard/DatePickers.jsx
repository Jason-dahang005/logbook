import React from 'react'
import format from "date-fns/format"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useState } from 'react';
import { MdCalendarMonth } from 'react-icons/md'
import axiosInstance from '../../api/axios';

const DatePickers = ({ setSelectedDate }) => {

  const [selectedDate, setSelectedDate] = useState(null)
  
  const handleChange = (date) => {
    setSelectedDate(date)
  }

  const getDataByDate = async (date) => {
    try {
      const response = await axiosInstance.get(`logbook/${location.state.id}/${date}`)
      return response.data
    }
    catch(error) {
      console.log(error)
    }
  }

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="YYYY-MM-DD"
        disabled
        className='text-xl w-36 font-bold bg-red-500'
      />

      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
      
    </div>
  )
}

export default DatePickers
