import React from 'react'
import { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import CreateLogModal from './CreateLogModal'

const CreateLogBtn = () => {

  const [createLogBtn, setCreateLogBtn] = useState(false)
  
  const close = () => setCreateLogBtn(false)

  return (
    <div>
      <button onClick={() => setCreateLogBtn(true)} className='flex items-center bg-slate-700 text-white px-8 py-2 rounded-full hover:bg-slate-800 text-sm font-semibold'>
        <HiPlus/>
        <span>Add New Attendance</span>
      </button>

      <CreateLogModal onClose={close} visible={createLogBtn} />
    </div>
  )
}

export default CreateLogBtn
