import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axiosInstance from '../../api/axios'

const CreateLogModal = ({ visible, onClose }) => {

  const location = useLocation()
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    axiosInstance.post(`log-user/${location.state.id}`,
    JSON.stringify({
      firstname, lastname, description
    })).then((response) => {
      console.log(response.data)
      setFirstname('')
      setLastname('')
      setDescription('')
      onClose(close)
    })
  }

  if(!visible) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50'>
      <div className="bg-white p-4 rounded drop-shadow-md w-[450px]">
        <div className="flex justify-center items-center py-3">
          <h3 className='font-bold text-2xl'>Add Log</h3>
        </div>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="pt-3">
              <label className='font-bold text-slate-800' htmlFor="name">First Name</label>
              <input type="text" id='firstname' name='firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)} className='border border-slate-500 w-full py-2 px-4 outline-none focus:border-slate-500 rounded'/>
            </div>

            <div className="pt-3">
              <label className='font-bold text-slate-800' htmlFor="name">Last Name</label>
              <input type="text" id='lastname' name='lastname' value={lastname} onChange={(e) => setLastname(e.target.value)} className='border border-slate-500 w-full py-2 px-4 outline-none focus:border-slate-500 rounded'/>
            </div>

            <div className="pt-3">
              <label className='font-bold text-slate-800' htmlFor="description">Description</label>
              <textarea name="description" id="description" cols="30" rows="5" value={description} onChange={(e) => setDescription(e.target.value)} className='border border-slate-500 w-full py-2 px-4 outline-none focus:border-slate-500 rounded'></textarea>
            </div>
            <div className="flex justify-end items-center space-x-3 py-2">
              <button className='bg-blue-700 text-white px-2 py-1 rounded' type='submit'>Submit</button>
              <button className='bg-red-700 text-white px-2 py-1 rounded' onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateLogModal
