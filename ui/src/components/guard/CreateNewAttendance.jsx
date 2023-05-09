import React from 'react'
import { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'
import axiosInstance from '../../api/axios'

const CreateNewAttendance = (props) => {

  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState([])

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
    setFirstname('')
    setLastname('')
    setDescription('')
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
      setOpen(false)
      props.fetchAttendance()
    })
    .catch((error) => {
      if(error.response.status === 422){
        setError(error.response.data.errors)
      }
    })
  }



  return (
    <>
      <button type='button' onClick={openModal} className='flex items-center filter-item space-x-1'>
        <AiOutlinePlusCircle size={20}/>
        <span className='text-xs'>Add New Attendance</span>
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
                      <label  className='create-log-modal-form-label' htmlFor="firstname">First Name</label>
                      <input
                        type="text"
                        id='firstname'
                        name='firstname'
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        className={`create-log-modal-form-input ${ error.firstname ? 'border-red-500' : 'border'}`}
                        placeholder='Enter first name'
                      />
                      {
                        error.firstname && (
                          <span className="text-red-500 text-sm">
                            {
                              error.firstname[0]
                            }
                          </span>
                        )
                      }
                    </div>
                    <div className="input-group">
                      <label className='create-log-modal-form-label' htmlFor="lastname">Last Name</label>
                      <input
                        type="text"
                        id='lastname'
                        name='lastname'
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        className={`create-log-modal-form-input ${ error.lastname ? 'border-red-500' : 'border'}`}
                        placeholder='Enter last name'
                      />
                      {
                        error.lastname && (
                          <span className="text-red-500 text-sm">
                            {
                              error.lastname[0]
                            }
                          </span>
                        )
                      }
                    </div>
                    <div className="input-group">
                      <label className='create-log-modal-form-label' htmlFor="description">Description</label>
                      <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={`create-log-modal-form-input ${ error.description ? 'border-red-500' : 'border'}`}
                        placeholder='Enter description'>
                      </textarea>
                      {
                        error.description && (
                          <span className="text-red-500 text-sm">
                            {
                              error.description[0]
                            }
                          </span>
                        )
                      }
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
