import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axiosInstance from '../../api/axios'
import { MdCalendarMonth } from 'react-icons/md'
import { ImFileEmpty } from 'react-icons/im'
import CreateNewNote from './CreateNewNote'
import DatePicker from 'react-datepicker'
import format from "date-fns/format"
import 'react-datepicker/dist/react-datepicker.css';

const NoteTable = () => {
  const location = useLocation()
  const [note, setNote] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const note = setInterval(() => {
      const formattedDate = selectedDate.toISOString().slice(0,10)
      axiosInstance.get(`list-note-logbook/${location.state.id}/${formattedDate}`)
      .then((response) => {
        setNote(response.data.note)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
    }, 1000)
    return () => clearInterval(note)
  }, [note])

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setSelectedDate(e);
  }

  return (
    <div className='flex items-center justify-center'>
      <div className="rounded-xl border p-5 shadow-md w-full bg-white">
        <div className="flex w-full items-center justify-between border-b pb-3">
          <div className="flex items-center space-x-3">
            <div className="text-lg font-bold text-slate-700">Note Logbook</div>
          </div>
          <div className='flex items-center space-x-2'>
            <CreateNewNote/>
            <div className=''>
              <MdCalendarMonth onClick={handleClick} className='bg-green-500 p-2 rounded-full fill-white hover:bg-green-800 hover:cursor-pointer' size={40}>
                { format(selectedDate, "dd-MM-yyyy") }
              </MdCalendarMonth>
              {
              isOpen && (
                <div className="absolute right-[32px] top-[240px] z-50">
                  <DatePicker selected={selectedDate} onChange={handleChange} inline />
                </div>
                )
              }
            </div>
            <div>
              <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} disabled dateFormat="MMMM dd, yyyy" className='bg-white text-slate-800 text-xl w-[130px] font-bold hover:cursor-pointer'/>
            </div>
          </div>
        </div>
        <div className="logbook-table">
          <table>
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              {
                loading ? (
                  <tr>
                    <td className='text-center py-5 border' colSpan={4}>
                      <div className='flex justify-center items-center space-x-2 py-5'>
                        <div style={{borderTopColor: 'transparent'}} className="w-6 h-6 border-4 border-slate-700 border-double rounded-full animate-spin" />
                        <h1 className='font-bold text-sm text-slate-700'>Loading</h1>
                      </div>
                    </td>
                  </tr>
                ) : (
                  note.length > 0 ? note.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.description}</td>
                        <td>{new Date(item.created_at).toLocaleTimeString()}</td>
                      </tr>
                    )
                  }) : (
                    <tr>
                      <td colSpan={4}>
                        <div className='flex flex-col justify-center items-center pt-4'>
                          <ImFileEmpty size={30}/>
                          <h1 className='font-bold text-sm text-slate-700 py-5'>Table is empty</h1>
                        </div>
                      </td>
                    </tr>
                  )
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default NoteTable
