import React from 'react'
import { useLocation } from 'react-router-dom'
import BackBtn from '../../components/guard/BackBtn'
import Logbook from '../../components/guard/Logbook'
import LogHistoryBtn from '../../components/guard/LogHistoryBtn'
import OrgName from '../../components/guard/OrgName'
import Calendar from '../../components/guard/Calendar'
import LogSearchInput from '../../components/guard/LogSearchInput'
import CreateLogBtn from '../../components/guard/CreateLogBtn'


const Organization = () => {
  const location = useLocation()

  return (
    <div className='px-8 py-3'>
      <div className="flex flex-col justify-start items-center md:flex-row  md:justify-between border py-3 px-4 mb-1  bg-slate-200">
        <BackBtn/>
        <OrgName/>
        <Calendar/>
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center border py-3 px-5 bg-slate-200'>
          <LogSearchInput/>
          <CreateLogBtn/>
        </div>
        <Logbook/>
      </div>
    </div>
  )
}

export default Organization
