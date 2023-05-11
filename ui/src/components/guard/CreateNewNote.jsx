import React from 'react'
import { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import axiosInstance from '../../api/axios'
import { useLocation } from 'react-router-dom'

const CreateNewNote = (props) => {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [description, setDescription] = useState('')

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axiosInstance.post(`create-note-logbook/${location.state.id}`,
    JSON.stringify({
      description
    }))
    .then((response) => {
      console.log(response.data)
      setDescription('')
      setOpen(false)
      props.fetchNote()
    })
  }

  return (
    <>
      <button type='button' onClick={openModal} className='flex items-center filter-item space-x-1'>
        <AiOutlinePlusCircle size={20}/>
        <span className='text-xs'>Create New Note</span>
      </button>

      {
        open && (
          <div className="create-log-modal">
            <div className='create-log-modal-wrapper'>
              <div className="create-log-modal-container">
                <div className="create-log-modal-header">
                  <h3 className='create-log-modal-title'>Create New Note</h3>
                  <IoMdClose
                    className='create-log-modal-header-icon'
                    size={20}
                    onClick={closeModal}
                  />
                </div>
                <div className="create-log-modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label  htmlFor="description" className='form-label'>Description</label>
                      <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="7"
                        className='form-input'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Enter note description'>
                      </textarea>
                    </div>
                    <div className="form-group">
                      <button type='submit' className='btn bg-green-500 hover:bg-green-600 text-white'>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default CreateNewNote
