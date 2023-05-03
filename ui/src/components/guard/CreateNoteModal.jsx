import React from 'react'
import { IoMdClose } from 'react-icons/io'

const CreateNoteModal = ({ visible, onClose }) => {

  if(!visible) return null

  return (
    <div className="create-log-modal">
      <div className='create-log-modal-wrapper'>
        <div className="create-log-modal-container">
          <div className="create-log-modal-header">
            <h3 className='create-log-modal-title'>Add Note</h3>
            <IoMdClose
              className='create-log-modal-header-icon'
              size={20}
            />
          </div>
          <div className="create-log-modal-body">

          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateNoteModal
