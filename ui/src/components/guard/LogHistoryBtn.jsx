import React from 'react'
import { MdHistory } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'

const LogHistoryBtn = () => {
  const nav = useNavigate()
  const location = useLocation()
  return (
    <div>
      <button className='flex items-center bg-slate-700 text-white px-3 py-1 rounded hover:bg-slate-800 space-x-1' onClick={() => nav('/log-history')}>
        <MdHistory/>
        <span>Show History</span>
      </button>
    </div>
  )
}

export default LogHistoryBtn