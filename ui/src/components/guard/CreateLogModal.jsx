import React from 'react'
import { useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import axiosInstance from '../../api/axios'
import { IoMdClose } from 'react-icons/io'
import Webcam from 'react-webcam'

const CreateLogModal = ({ visible, onClose }) => {

  const location = useLocation()
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [description, setDescription] = useState('')

  const webcamRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    axiosInstance.post(`log-user/${location.state.id}`,
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
      onClose(close)
    })
  }

  const handleClose = () => {
    onClose(close)
  }

  if(!visible) return null

  return (
    <div className="create-log-modal">
      <div className='create-log-modal-wrapper'>
        <div className="create-log-modal-container">
          <div className="create-log-modal-header">
            <h3 className='create-log-modal-title'>Add Log</h3>
            <IoMdClose
              className='create-log-modal-header-icon'
              size={20}
              onClick={handleClose}/>
          </div>
          <div className="create-log-modal-body">
            <form onSubmit={handleSubmit}>
              <div className="">
                {/* <div>
                  <Webcam
                    audio={false}

                  />
                </div> */}
                <div className="pt-3">
                  <label  className='create-log-modal-form-label' htmlFor="name">First Name</label>

                  <input
                    type="text"
                    id='firstname'
                    name='firstname'
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    className='create-log-modal-form-input'
                    placeholder='Enter first name'/>
                </div>

                <div className="pt-3">
                  <label className='create-log-modal-form-label' htmlFor="name">Last Name</label>

                  <input
                    type="text"
                    id='lastname'
                    name='lastname'
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className='create-log-modal-form-input'
                    placeholder='Enter last name'/>
                </div>

                <div className="pt-3">
                  <label className='create-log-modal-form-label' htmlFor="description">Description</label>

                  <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="5"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='create-log-modal-form-input'
                    placeholder='Enter description'></textarea>
                </div>
                <div className="create-log-modal-footer">
                  <button className='create-log-modal-btn-submit' type='submit'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateLogModal
