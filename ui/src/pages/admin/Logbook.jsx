import React from 'react'
import { useLocation } from 'react-router-dom'
import DataContext from '../../context/DataContext'
import LogbookTable from '../../components/admin/LogbookTable'
import { useState, useEffect } from 'react'
import axiosInstance from '../../api/axios'
import AttendanceDatepicker from '../../components/admin/AttendanceDatepicker'
import SearchFilter from '../../components/admin/SearchFilter'
import OrganizationName from '../../components/admin/OrganizationName'
import AdminAttendanceTable from '../../components/admin/AdminAttendanceTable'
import AdminNoteTable from '../../components/admin/AdminNoteTable'
import NoteDatePicker from '../../components/admin/NoteDatePicker'

const Logbook = () => {

  const location = useLocation()

  const [attendance, setAttendance] = useState([])
  const [note, setNote] = useState([])
  const [loading, setLoading] = useState(true)
  const [attendanceSelectedDate, setAttendanceSelectedDate] = useState(new Date())
  const [noteSelectedDate, setNoteSelectedDate] = useState(new Date())
  const [searchQuery, setSearchQuery] = useState('')
  const [org, setOrg] = useState([])
  const [tab, setTab] = useState(1)


  const attendanceDate = attendanceSelectedDate.toISOString().slice(0,10)
  const noteDate = noteSelectedDate.toISOString().slice(0,10)

  useEffect(() => {
    setLoading(true)
    fetchAttendance()
  }, [attendanceSelectedDate])

  // useEffect(() => {
  //   fetchNote()
  // }, [])

  const fetchAttendance = () => {
    axiosInstance.get(`attendance-logbook/${location.state.id}/${attendanceDate}`)
    .then((response) => {
      setLoading(false)
      setAttendance(response.data.attendance)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // const fetchNote = () => {
  //   axiosInstance.get(`logbook-note/${location.state.id}/${'2023-05-17'}`)
  //   .then((response) => {
  //     console.log(response.data.note)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }

  // const handleSearch = (e) => {
  //   setSearchQuery(e.target.value)
  // }

  // const attendanceFilter = attendance.filter((item) => {
  //   return item.firstname.toLowerCase().includes(searchQuery.toLowerCase()) || item.lastname.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase())
  // })

  // const noteFilter = note.filter((item) => {
  //   return item.description.toLowerCase().includes(searchQuery.toLowerCase())
  // })

  const clearSearch = () => {
    setSearchQuery('')
  }

  const action = (index) => {
    setTab(index)
  }

  return (
      <div className="w-full mb-12 xl:mb-0 mx-auto px-3 pt-3">
        <div className="relative flex flex-col min-w-0 break-words border bg-white w-full mb-6 rounded-lg p-3">
          <div className="rounded-t mb-0 border-0">
            <div className='border-b pb-1 mb-3'>
              <OrganizationName/>
            </div>
            <div className=" flex justify-around">
              <button onClick={() => action(1)} className={` ${tab === 1 ? 'border-b-2 border-gray-400 text-gray-500' : 'border-b-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500' } w-full text-xs font-semibold py-2`}>Attendance</button>
              <button onClick={() => action(2)} className={` ${tab === 2 ? 'border-b-2 border-gray-400 text-gray-500' : 'border-b-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500' } w-full text-xs font-semibold py-2`}>Note</button>
            </div>
          </div>
          <div className="mt-1">
            <div className={`${tab === 1 ? 'block' : 'hidden'}`}>
              <AdminAttendanceTable/>
            </div>
            <div className={`${tab === 2 ? 'block' : 'hidden'}`}>
              <AdminNoteTable/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Logbook
