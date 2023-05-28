import React, { useState } from 'react'
import axiosInstance from '../../../api/axios'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import DatePicker from 'react-datepicker'
import format from "date-fns/format"
import 'react-datepicker/dist/react-datepicker.css'
import { MdCalendarMonth } from 'react-icons/md'
import { AiFillEye } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import { ImFileEmpty } from 'react-icons/im'

const AdminAttendanceTable = () => {

  const location = useLocation()

  const [selectedDate, setSelectedDate] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [attendance, setAttendance] = useState([])
  const [loading, setLoading] = useState(true)

  const formattedDate = selectedDate.toISOString().slice(0,10)

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setSelectedDate(e);
  }

  useEffect(() => {
    setLoading(true)
    fetchAttendanceLogbook()
  }, [selectedDate])

  const fetchAttendanceLogbook = () => {
    axiosInstance.get(`admin-list-attendance/${location.state.id}/${formattedDate}`)
    .then((response) => {
      console.log(response.data.attendance)
      setAttendance(response.data.attendance)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const filteredAttendance = attendance.filter((item) => {
    return item.firstname.toLowerCase().includes(searchQuery.toLowerCase()) || item.lastname.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const clearSearch = () => {
    setSearchQuery('')
  }

  return (
    <div className='admin-table'>
      <div className='flex justify-end py-1 space-x-1'>
        <div className='relative'>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BiSearch className='text-slate-700'/>
              </div>
              <input type="text" value={searchQuery} onChange={handleSearch} className='border border-gray-400 pl-8 outline-none focus:border-gray-700 filter-item text-xs' placeholder='Search'/>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <GrFormClose size={20} onClick={clearSearch} className='text-slate-700 hover:cursor-pointer z-50 hover:bg-gray-200 rounded-full'/>
              </div>
            </div>
        <div>
          <button onClick={handleClick} className='flex items-center space-x-1 hover:cursor-pointer filter-item'>
            <MdCalendarMonth size={20}/>
            <div>
              <h1 className='font-semibold text-xs'>{ format(selectedDate, "MM-dd-yyyy") }</h1>
            </div>
          </button>
          {
          isOpen && (
            <div className="absolute right-[20px] top-[120px] z-50">
              <DatePicker selected={selectedDate} onChange={handleChange} inline />
            </div>
            )
          }
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Description</th>
            <th>Time logged</th>
          </tr>
        </thead>
        <tbody>
          {
            loading ? (
              <tr>
                  <td className='text-center py-5' colSpan={5}>
                    <div className='flex justify-center items-center space-x-2 py-5'>
                      <div style={{borderTopColor: 'transparent'}} className="w-6 h-6 border-4 border-slate-700 border-double rounded-full animate-spin" />
                      <h1 className='font-bold text-sm text-slate-700'>Loading</h1>
                    </div>
                  </td>
                </tr>
            ) : (
              filteredAttendance.length > 0 ? filteredAttendance.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.description}</td>
                    <td>{new Date(item.created_at).toLocaleTimeString()}</td>
                  </tr>
                )
              }) : (
                <tr>
                  <td colSpan={4}>
                    <div className='flex flex-col justify-center items-center pt-4'>
                      <ImFileEmpty size={30}/>
                      <h1 className='font-bold text-sm text-slate-700 py-5'>No Data</h1>
                    </div>
                  </td>
                </tr>
              )
            )
          }
        </tbody>
      </table>      
    </div>
  )
}

export default AdminAttendanceTable
