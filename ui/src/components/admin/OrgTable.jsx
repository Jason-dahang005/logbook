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

const OrgTable = () => {
  const location = useLocation()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const attendance = setInterval(() => {
      const formattedDate = selectedDate.toISOString().slice(0,10)
      axiosInstance.get(`adminlistattendance/${location.state.id}/${formattedDate}`)
      .then((response) => {
        //console.log(response.data.Attendance)
        setData(response.data.Attendance)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
    }, 1000)
    return () => clearInterval(attendance)
  }, [data])

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setSelectedDate(e);
  }

  return (
    
    <div className='flex items-center justify-center p-5 '>
      <div className="rounded-xl border p-5  shadow-2xl	box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) w-full bg-white">
         
        <div className="flex w-full items-center justify-between border-b pb-3">
          <div className="flex items-center space-x-3">
            <div className="text-lg font-bold text-slate-700">Attendance Logbook</div>
          </div>
          <div className="flex items-center space-x-2">
            
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
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
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
                  data.length > 0 ? data.map((item) => {
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

export default OrgTable
