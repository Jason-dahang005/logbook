import React from 'react'
import CreateOrgModal from './CreateOrgModal'
import { useState } from 'react'

import { HiPlus } from 'react-icons/hi'

const CreateOrgBtn = () => {

  const [createOrgModal, setCreateOrgModal] = useState(false)

  const close = () => setCreateOrgModal(false)

  return (
    <div>
      <button onClick={() => setCreateOrgModal(true)} className='bg-slate-800 hover:bg-slate-700 text-white px-2 py-1 rounded flex items-center space-x-1'>
        <HiPlus/>
        <span>Create Organization</span>
      </button>

      <CreateOrgModal onClose={close} visible={createOrgModal}/>
    </div>
  )
}

export default CreateOrgBtn
