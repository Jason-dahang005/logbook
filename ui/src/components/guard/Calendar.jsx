import React from 'react'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { MdCalendarMonth } from 'react-icons/md'
import "react-datepicker/dist/react-datepicker.css";
import format from "date-fns/format"
import DatePicker from 'react-datepicker'
import { useState } from 'react';

const Calendar = () => {

  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString(undefined, options);
  const currentDay = new Date().toLocaleString('default', { weekday: 'long' });

  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setStartDate(e);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='flex justify-center items-center space-x-1'>
        <div className='bg-green-500 rounded-full full hover:bg-green-700 p-2'>
          <MdCalendarMonth className='hover:cursor-pointer text-white example-custom-input' size={30} onClick={handleClick}>
            { format(startDate, "dd-MM-yyyy") }
          </MdCalendarMonth>
        </div>
        <div className='fex flex-col'>
          <h1 className='font-bold'>{formattedDate}</h1>
          <h4 className='text-sm'>{currentDay}</h4>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-[32px] top-[160px] z-50">
          <DatePicker selected={startDate} onChange={handleChange} inline />
        </div>
      )}
    </>
  )
}

export default Calendar
