import React from 'react'
import { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'
import axiosInstance from '../../api/axios'
import { useRef } from 'react'
import Webcam from 'react-webcam'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CreateNewAttendance = (props) => {

  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState([])
  const webcamRef = useRef(null)

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

    const imageSrc = webcamRef.current.getScreenshot()

    const base64Image = imageSrc.split(',')[1]

    axiosInstance.post(`create-attendance-logbook/${location.state.id}`,
    {
      firstname,
      lastname,
      description,
      signature: base64Image
    })
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
      <button type='button' onClick={openModal} className='flex items-center p-2 h-[30px] text-sm font-semibold rounded-md space-x-1 bg-slate-700 text-white hover:bg-slate-800'>
        <AiOutlinePlusCircle size={20}/>
        <span className='text-xs'>Add New Attendance</span>
      </button>

      {
        open && (
          <div className="create-log-modal">
            <div className='create-log-modal-wrapper'>
              <div className="create-log-modal-container">
                <div className="create-log-modal-header">
                  <h3 className='create-log-modal-title'>Create New Attendance</h3>
                  <IoMdClose
                    className='create-log-modal-header-icon'
                    size={20}
                    onClick={closeModal}
                  />
                </div>
                <div className="create-log-modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-2'>
                      <div className='pr-3 flex items-center'>
                        <div className="input-group">
                          <Webcam width={300} audio={false} ref={webcamRef} className='rounded-lg' screenshotFormat="image/jpeg"/>
                        </div>
                      </div>
                      <div className=''>
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
                        rows="2"
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
                      </div>
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
