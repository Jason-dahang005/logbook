import React from 'react'
import { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import CreateLogModal from './CreateLogModal'

const CreateLogBtn = () => {

  const [createLogBtn, setCreateLogBtn] = useState(false)
  
  const close = () => setCreateLogBtn(false)

  return (
    <div>
      <button onClick={() => setCreateLogBtn(true)} className='flex items-center filter-item'>
        <HiPlus/>
        <span>Add New Attendance</span>
      </button>

      <CreateLogModal onClose={close} visible={createLogBtn} />
    </div>
  )
}

export default CreateLogBtn
