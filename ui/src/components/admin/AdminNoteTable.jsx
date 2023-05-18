import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axiosInstance from '../../api/axios'
import DatePicker from 'react-datepicker'
import format from "date-fns/format"
import 'react-datepicker/dist/react-datepicker.css'
import { FaCalendarAlt } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import OrganizationName from './OrganizationName'

const AdminNoteTable = () => {

  const location = useLocation()
  const [note, setNote] = useState([])
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [noteSelectedDate, setNoteSelectedDate] = useState(new Date())

  const noteDate = noteSelectedDate.toISOString().slice(0,10)

  useEffect(() => {
    setLoading(true)
    fetchNote()
  }, [noteSelectedDate])

  const fetchNote = () => {
    axiosInstance.get(`note-logbook/${location.state.id}/${noteDate}`)
    .then((response) => {
      setLoading(false)
      console.log(response.data.note)
      setNote(response.data.note)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const handleDate = (e) => {
    setOpen(!open)
    setNoteSelectedDate(e)
  }

  const handleOpenCalendar = () => {
    setOpen(!open)
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const noteFilter = note.filter((item) => {
    return item.description.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const clearSearch = () => {
    setSearchQuery('')
  }

  return (
    <>
      <div className='flex justify-end items-end space-x-2 py-2'>
        <div className='relative'>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BiSearch className='text-gray-500'/>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch} 
            placeholder='Search' 
            className='border border-gray-300 rounded-md pl-8 outline-none focus:border-gray-500 h-8 text-sm text-gray-500'
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <GrFormClose
              size={20}
              onClick={clearSearch}
              className='text-gray-400 hover:cursor-pointer z-50 hover:bg-gray-200 rounded-full'/>
          </div>
        </div>
        <div className='relative'>
          <DatePicker
            selected={noteSelectedDate}
            value={format(noteSelectedDate, 'MM-dd-yyyy')}
            className='border outline-none h-8 w-32 pl-3 rounded-md text-gray-600 text-sm font-semibold'
            disabled
          />
          <div className='absolute inset-y-0 right-0 flex items-center px-2 rounded-full z-50 hover:cursor-pointer mr-2 hover:bg-gray-200'>
            <FaCalendarAlt onClick={handleOpenCalendar} className='fill-gray-500'/>
          </div>
          {
            open && (
              <div className="absolute z-0 right-0 top-10">
                <DatePicker selected={noteSelectedDate} onChange={handleDate} inline/>
              </div>
            )
          }
        </div>
      </div>
      <div className='admin-table'>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Date Logged</th>
              <th>Time Logged</th>
            </tr>
          </thead>
          <tbody>
            {
              loading ? (
                <tr>
                  <td colSpan={5}>
                    <div className="flex items-center justify-center h-32 border-b">
                      <div style={{borderTopColor: 'transparent'}} className="w-4 h-4 border-2 border-gray-600 rounded-full animate-spin" />
                      <p className="ml-2 text-gray-600 font-sans text-sm">Loading logbook...</p>
                    </div>
                  </td>
                </tr>
              ) : (
                noteFilter.length > 0 ? noteFilter.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.description}</td>
                      <td>{new Date(item.created_at).toLocaleDateString()}</td>
                      <td>{new Date(item.created_at).toLocaleTimeString()}</td>
                    </tr>
                  )
                }) : (
                  <tr>
                  <td colSpan={5}>
                    <div className='text-gray-600 font-sans flex items-center justify-center text-sm py-5 border-b whitespace-nowrap h-32'>
                      <h1>No data found</h1>
                    </div>
                  </td>
                </tr>
                )
              )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminNoteTable
