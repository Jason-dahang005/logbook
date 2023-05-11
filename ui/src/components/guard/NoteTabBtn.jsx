import { useContext } from 'react'
import { OrganizationContext } from '../../pages/guard/Organization'

const NoteTabBtn = () => {

  const {tab, action} = useContext(OrganizationContext)
  
  return (
    <>
      <button onClick={() => action(2)} className={`${tab === 2 ? 'bg-slate-700 text-white px-4' : 'text-slate-700 bg-white border border-slate-700 px-4'} rounded-lg mx-1 text-sm font-semibold h-10 w-36`}>Note Log</button>
    </>
  )
}

export default NoteTabBtn
