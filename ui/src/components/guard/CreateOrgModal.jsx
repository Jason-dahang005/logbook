import React, { useState } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axios'

const CreateOrgModal = ({ visible, onClose }) => {

  const nav = useNavigate()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    axiosInstance.post(`create-org`, JSON.stringify({
      name, description
    })).then((response) => {
      console.log(response.data)
      setName('')
      setDescription('')
      onClose(close)
    }).catch(error => {
      if(error.response.status === 422){
        setError(error.response.data.errors)
      }
    })
  }
  
  if(!visible) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50'>
      <div className="bg-white rounded drop-shadow-md w-[450px]">
        <div className="flex justify-center items-center bg-slate-200 py-8 rounded-t">
          <h3 className='font-bold text-2xl'>Create Organization</h3>
        </div>
        <div className="px-4">
          <form onSubmit={handleSubmit}>
            <div className="pt-3">
              <label className='font-bold text-slate-800' htmlFor="name">Name</label>
              <input type="text" id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} className='border border-slate-500 w-full py-2 px-4 outline-none focus:border-slate-500 rounded' placeholder='Enter organization name'/>
              {
                error.name && <div className='text-red-500'>{ error.name[0] }</div>
              }
            </div>

            <div className="pt-3">
              <label className='font-bold text-slate-800' htmlFor="description">Description</label>
              <textarea name="description" id="description" cols="30" rows="5" value={description} onChange={(e) => setDescription(e.target.value)} className='border border-slate-500 w-full py-2 px-4 outline-none focus:border-slate-500 rounded' placeholder='Enter organization description'></textarea>
              {
                error.description && <div className='text-red-500'>{ error.description[0] }</div>
              }
            </div>
            <div className="flex justify-end items-center space-x-3 py-2">
              <button className='bg-blue-700 text-white px-2 py-1 rounded' type='submit'>Create</button>
              <button className='bg-red-700 text-white px-2 py-1 rounded' onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateOrgModal
