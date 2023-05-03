import React from 'react'
import BackBtn from '../../components/guard/BackBtn'
import OrgName from '../../components/guard/OrgName'
import CreateLogBtn from '../../components/guard/CreateLogBtn'
import AttendanceTable from '../../components/guard/AttendanceTable'
import { useState } from 'react'
import NoteTable from '../../components/guard/NoteTable'

const Organization = () => {

  const [tab, setTab] = useState(1)

  const action = (index) => {
    setTab(index)
  }

  return (
    <div className='p-4'>
      <div className="flex flex-col space-y-3">
        <div className='p-2 flex justify-between'>
          <BackBtn/>
          <OrgName/>
          <div className="flex space-x-2">
            <button onClick={() => action(1)} className={`${tab === 1 ? 'bg-slate-700 text-white px-4 rounded-full text-sm font-semibold' : 'text-slate-700 bg-white border border-slate-700 px-4 rounded-full text-sm font-semibold'}`}>Attendance Log</button>
            <button onClick={() => action(2)} className={`${tab === 2 ? 'bg-slate-700 text-white px-4 rounded-full text-sm font-semibold' : 'text-slate-700 bg-white border border-slate-700 px-4 rounded-full text-sm font-semibold'}`}>Note Log</button>
          </div>
        </div>
        <div>
          <div className="mt-4">
            <div className={`${tab === 1 ? 'block' : 'hidden'}`}>
              <AttendanceTable/>
            </div>
            <div className={`${tab === 2 ? 'block' : 'hidden'}`}>
              <NoteTable/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Organization
