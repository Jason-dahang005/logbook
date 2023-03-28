import React from 'react'
import { useLocation } from 'react-router-dom'
import BackBtn from '../../components/guard/BackBtn'
import Logbook from '../../components/guard/Logbook'
import LogHistoryBtn from '../../components/guard/LogHistoryBtn'
import OrgName from '../../components/guard/OrgName'
import { useEffect, useState } from 'react'
import { AiTwotoneCalendar } from 'react-icons/ai'

const Organization = () => {
  const location = useLocation()

  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString(undefined, options);

  const currentDay = new Date().toLocaleString('default', { weekday: 'long' });

  return (
    <div className='px-8 py-3'>
      <div className="flex flex-col justify-start items-center md:flex-row  md:justify-between border py-3 px-4 mb-3 bg-slate-200">
        <div className="">
          <BackBtn/>
        </div>

        <div className="">
          <OrgName/>
        </div>

        <div className='flex space-x-1'>
          
          {/* <LogHistoryBtn/> */}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className='col-span-12 md:col-span-12 lg:col-span-3'>
          <div className='border border-slate-200 p-2 flex justify-center space-x-2 items-center'>
            <div className='p-3 bg-green-500 hover:cursor-pointer hover:bg-green-700 rounded-full'>
              <AiTwotoneCalendar className='text-white' size={40}/>
            </div>
            <div className="">
              <h1 className='text-2xl font-bold'>{formattedDate}</h1>  
              <h1 className='text-md'>{currentDay}</h1>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-9">
          <Logbook/>
        </div>
      </div>
    </div>
  )
}

export default Organization
