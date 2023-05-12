import React from 'react'
import { useState, useEffect } from 'react'
import axiosInstance from '../../api/axios'
import { useLocation } from 'react-router-dom'
import CreateLogBtn from '../../components/guard/CreateLogBtn'
import { ImFileEmpty } from 'react-icons/im'
import DatePicker from 'react-datepicker'
import format from "date-fns/format"
import 'react-datepicker/dist/react-datepicker.css'
import { MdCalendarMonth } from 'react-icons/md'
import { AiFillEye } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import CreateNewAttendance from './CreateNewAttendance'
import ViewModal from '../../components/guard/ViewModal'

const AttendanceTable = () => {
  const location = useLocation()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false)
  const [viewModal, setViewModal] = useState(false)
  const [modalContent, setModalContent] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const close = () => setViewModal(false)

  useEffect(() => {
    fetchAttendance()
  }, [selectedDate])

  const formattedDate = selectedDate.toISOString().slice(0,10)

  const fetchAttendance = () => {
    setLoading(true)
      axiosInstance.get(`list-attendance-logbook/${location.state.id}/${formattedDate}`)
      .then((response) => {
        setData(response.data.Attendance)
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

  const filteredData = data.filter((item) => {
    return item.firstname.toLowerCase().includes(searchQuery.toLowerCase()) || item.lastname.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const clearSearch = () => {
    setSearchQuery('')
  }

  return (
    <div className='flex items-center justify-center border'>
      <div className="rounded-xl p-5 shadow-[1px_1px_6px_2px_#00000024] w-full bg-white">
        <div className="flex w-full items-center justify-between -b pb-3">
          <div className="flex items-center space-x-3">
            <div className="text-lg font-bold text-slate-700">Attendance Logbook</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className='relative borde'>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BiSearch className='text-slate-700'/>
              </div>
              <input type="text" value={searchQuery} onChange={handleSearch} className=' -gray-400 pl-8 p-2 outline-none focus:-gray-700 filter-item' placeholder='Search'/>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <GrFormClose size={20} onClick={clearSearch} className='text-slate-700 hover:cursor-pointer z-50'/>
              </div>
            </div>
            <div className=''>
              <button onClick={handleClick} className='flex items-center space-x-1 hover:cursor-pointer filter-item'>
                <MdCalendarMonth size={20}/>
                <div>
                  <h1 className='font-semibold text-sm'>{ format(selectedDate, "MM-dd-yyyy") }</h1>
                </div>
              </button>
              {
              isOpen && (
                <div className="absolute right-[212px] top-[240px] z-50">
                  <DatePicker selected={selectedDate} onChange={handleChange} inline />
                </div>
                )
              }
            </div>
            <CreateNewAttendance fetchAttendance={fetchAttendance}/>
          </div>
        </div>
        <div className="logbook-table">
          <table>
            <thead>
              <tr>
                <th scope="col" className='w-2/12 -x'>Firstname</th>
                <th scope="col" className='w-2/12 -x'>Lastname</th>
                <th scope="col" className='w-6/12 -x'>Description</th>
                <th scope="col" className='w-1/12 -x'>Time</th>
                <th scope="col" className='w-1/12 -x'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                loading ? (
                  <tr>
                    <td className='text-center py-5 ' colSpan={5}>
                      <div className='flex justify-center items-center space-x-2 py-5'>
                        <div style={{TopColor: 'transparent'}} className="w-6 h-6 -4 -slate-700 -double rounded-full animate-spin" />
                        <h1 className='font-bold text-sm text-slate-700'>Loading</h1>
                      </div>
                    </td>
                  </tr>
                ) : (
                  data.length > 0 ? filteredData.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td className=''>{item.firstname}</td>
                        <td className=''>{item.lastname}</td>
                        <td className=''>{item.description}</td>
                        <td className=''>{new Date(item.created_at).toLocaleTimeString()}</td>
                        <td className=''>
                          <button type='button' onClick={() => onCheck(item)} >
                            <AiFillEye/>
                            <span>View</span>
                          </button>
                        </td>
                      </tr>
                    )
                  }) : (
                    <tr>
                      <td colSpan={5}>
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
      <ViewModal open={viewModal} onClose={close} content={modalContent}/>
    </div>
  )
}

export default AttendanceTable
