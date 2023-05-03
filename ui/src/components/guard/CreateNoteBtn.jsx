import React from 'react'
import { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import CreateNoteModal from './CreateNoteModal'

const CreateNoteBtn = () => {

  const [noteBtn, setNoteBtn] = useState(false)

  const close = () => setNoteBtn(false)
  
  return (
    <div>
      <button onClick={() => setNoteBtn(true)} className='flex items-center bg-slate-700 text-white px-8 py-1 rounded-full hover:bg-slate-800 text-sm font-semibold'>
        <HiPlus/>
        <span>Add New Note</span>
      </button>

      <CreateNoteModal onClose={close} visible={noteBtn}/>
    </div>
  )
}

export default CreateNoteBtn
