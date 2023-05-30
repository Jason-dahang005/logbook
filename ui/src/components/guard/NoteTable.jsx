import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axiosInstance from '../../api/axios'
import { MdCalendarMonth } from 'react-icons/md'
import { ImFileEmpty } from 'react-icons/im'
import CreateNewNote from './CreateNewNote'
import DatePicker from 'react-datepicker'
import format from "date-fns/format"
import 'react-datepicker/dist/react-datepicker.css'
import { AiFillEye } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import NoteViewModal from './NoteViewModal'

const NoteTable = () => {
  const location = useLocation()
  const [note, setNote] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false)
  const [viewModal, setViewModal] = useState(false)
  const [modalContent, setModalContent] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const close = () => setViewModal(false)

  useEffect(() => {
    setLoading(true)
    fetchNote()
  }, [selectedDate])

  const formattedDate = selectedDate.toISOString().slice(0,10)

  const fetchNote = () => {
      axiosInstance.get(`list-note-logbook/${location.state.id}/${formattedDate}`)
      .then((response) => {
        setNote(response.data.note)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
    }

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setSelectedDate(e);
  }

  const onCheck = (id) => {
    console.log(id)
    setViewModal(true)
    setModalContent(id)
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const filteredData = note.filter((item) => {
    return item.description.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const clearSearch = () => {
    setSearchQuery('')
  }

  return (
    <div className='flex items-center justify-center'>
      <div className="rounded-xl p-5 shadow-[1px_1px_6px_2px_#00000024] w-full bg-white">
        <div className="flex w-full items-center justify-between border-b pb-3">
          <div className="flex items-center space-x-3">
            <div className="text-lg font-bold text-slate-700">Note Logbook</div>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='relative'>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BiSearch className='text-slate-700'/>
              </div>
              <input type="text" value={searchQuery} onChange={handleSearch} className='border border-gray-400 pl-8 p-2 outline-none rounded-lg text-sm font-semibold focus:border-gray-700 text-gray-700' placeholder='Search'/>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <GrFormClose size={20} onClick={clearSearch} className='text-slate-700 hover:cursor-pointer z-50 hover:bg-gray-200 rounded-full'/>
              </div>
            </div>
            <div className=''>
              <button onClick={handleClick} className='flex items-center space-x-1 hover:cursor-pointer filter-item'>
                <MdCalendarMonth size={20}/>
                <div>
                  <h1 className='font-semibold text-xs'>{ format(selectedDate, "dd-MM-yyyy") }</h1>
                </div>
              </button>
              {
              isOpen && (
                <div className="absolute z-50">
                  <DatePicker selected={selectedDate} onChange={handleChange} inline />
                </div>
                )
              }
            </div>
            <CreateNewNote fetchNote={fetchNote}/>
          </div>
        </div>
        <div className="logbook-table overflow-y-scroll max-h-80 ">
          <table>
            <thead>
              <tr>
                <th scope="col" className='w-9/12'>Description</th>
                <th scope="col" className='w-2/12'>Time</th>
                <th scope="col" className='w-1/12'>Action</th>
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
                  note.length > 0 ? filteredData.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{ item.description }</td>
                        <td>{ new Date(item.created_at).toLocaleTimeString() }</td>
                        <td>
                          <button type="button" onClick={() => onCheck(item)}>
                            <AiFillEye/>
                            <span>View</span>
                          </button>
                        </td>
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
      <NoteViewModal open={viewModal} onClose={close} content={modalContent}/>
    </div>
  )
}
export default NoteTable 
