import { useContext } from 'react'
import { OrganizationContext } from '../../pages/guard/Organization'

const AttendanceTabBtn = () => {

  const {tab, action} = useContext(OrganizationContext)
  
  return (
    <>
      <button onClick={() => action(1)} className={`${tab === 1 ? 'bg-slate-700 text-white px-4' : 'text-slate-700 bg-white border border-slate-700 px-4'} rounded-lg mx-1 text-sm font-semibold h-10 w-36`}>Attendance Log</button>
    </>
  )
}

export default AttendanceTabBtn
