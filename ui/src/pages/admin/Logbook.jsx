import React from 'react'
import { useLocation } from 'react-router-dom'
import DataContext from '../../context/DataContext'
import LogbookTable from '../../components/admin/LogbookTable'
import { useState, useEffect } from 'react'
import axiosInstance from '../../api/axios'
import AttendanceDatepicker from '../../components/admin/AttendanceDatepicker'
import SearchFilter from '../../components/admin/SearchFilter'

const Logbook = () => {

  const location = useLocation()

  const [attendance, setAttendance] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [searchQuery, setSearchQuery] = useState('')

  const date = selectedDate.toISOString().slice(0,10)

  useEffect(() => {
    setLoading(true)
    fetchAttendance()
  }, [selectedDate])

  const fetchAttendance = () => {
    axiosInstance.get(`attendance-logbook/${location.state.id}/${date}`)
    .then((response) => {
      setLoading(false)
      setAttendance(response.data.attendance)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const filteredData = attendance.filter((item) => {
    return item.firstname.toLowerCase().includes(searchQuery.toLowerCase()) || item.lastname.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const clearSearch = () => {
    setSearchQuery('')
  }

  return (
    <DataContext.Provider value={{
      selectedDate,
      setSelectedDate,
      attendance,
      loading,
      clearSearch,
      handleSearch,
      searchQuery,
      filteredData
      }}>
      <div className="w-full mb-12 xl:mb-0 mx-auto px-3 pt-3">
        <div className="relative flex flex-col min-w-0 break-words border bg-white w-full mb-6 rounded-lg p-3">
          <div className="rounded-t mb-0 py-3 border-0">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xl text-gray-600 font-sans">Logbook</h3>
              </div>
              <div className='flex space-x-2 '>
                <SearchFilter/>
                <AttendanceDatepicker/>
              </div>
            </div>
          </div>
          <LogbookTable/>
        </div>
      </div>
    </DataContext.Provider>
  )
}

export default Logbook
