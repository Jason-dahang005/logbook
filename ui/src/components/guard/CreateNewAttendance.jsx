import React from 'react'
import { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import { useLocation } from 'react-router-dom'

const CreateNewAttendance = () => {

  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [description, setDescription] = useState('')

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axiosInstance.post(`create-attendance-logbook/${location.state.id}`,
    JSON.stringify({
      firstname,
      lastname,
      description
    }))
    .then((response) => {
      console.log(response.data)
      setFirstname('')
      setLastname('')
      setDescription('')
      open(false)
    })
  }


  return (
    <>
      <button type='button' onClick={openModal} className='flex items-center bg-slate-700 text-white px-8 py-1 rounded-full hover:bg-slate-800 text-sm font-semibold'>
        <HiPlus/>
        <span>Add New Attendance</span>
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
                    <div className="input-group">
                      <label  className='create-log-modal-form-label' htmlFor="name">First Name</label>
                      <input
                        type="text"
                        id='firstname'
                        name='firstname'
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        className='create-log-modal-form-input'
                        placeholder='Enter first name'
                      />
                    </div>
                    <div className="input-group">
                      <label className='create-log-modal-form-label' htmlFor="name">Last Name</label>
                      <input
                        type="text"
                        id='lastname'
                        name='lastname'
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        className='create-log-modal-form-input'
                        placeholder='Enter last name'
                      />
                    </div>
                    <div className="input-group">
                      <label className='create-log-modal-form-label' htmlFor="description">Description</label>
                      <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='create-log-modal-form-input'
                        placeholder='Enter description'>
                      </textarea>
                    </div>
                    <div className="create-log-modal-footer">
                      <button className='create-log-modal-btn-submit' type='submit'>Submit</button>
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

export default CreateNewAttendance
