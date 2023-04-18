import React from 'react'
import { useLocation } from 'react-router-dom'
import BackBtn from '../../components/guard/BackBtn'
import Logbook from '../../components/guard/Logbook'
import LogHistoryBtn from '../../components/guard/LogHistoryBtn'
import OrgName from '../../components/guard/OrgName'
import Calendar from '../../components/guard/Calendar'
import LogSearchInput from '../../components/guard/LogSearchInput'
import CreateLogBtn from '../../components/guard/CreateLogBtn'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axiosInstance from '../../api/axios'
import { useState, useEffect } from 'react'
import { AiFillEye } from 'react-icons/ai'
import ViewModal from '../../components/guard/ViewModal'
import { MdCalendarMonth } from 'react-icons/md'
import format from "date-fns/format"


const Organization = () => {
  const location = useLocation()

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [viewModal, setViewModal] = useState(false)
  const [char, setChar] = useState([])
  const close = () => setViewModal(false)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ccc = setInterval(() => {
      const formattedDate = selectedDate.toISOString().slice(0,10)
      axiosInstance.get(`logbook/${location.state.id}/${formattedDate}`)
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
    }, 1000)
    return () => clearInterval(ccc)
  }, [data])

  const onCheck = (id) => {
    console.log(id)
    setViewModal(true)
    setChar(id)
  }

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setSelectedDate(e);
  }

  if(loading){
    return (
      <div className='flex justify-center items-center space-x-2 h-[300px]'>
        <div style={{borderTopColor: 'transparent'}} className="w-8 h-8 border-4 border-red-400 border-double rounded-full animate-spin" />
        <h1 className='font-bold text-red-400'>Loading</h1>
      </div>
    )
  }

  return (
    <div className='px-8 py-3'>
      <div className="flex flex-col justify-start items-center md:flex-row  md:justify-between py-3 px-4 mb-1">
        <BackBtn/>
        <OrgName/>
        <div className='flex justify-center items-center space-x-2'>
          <div>
            <MdCalendarMonth
              className='bg-green-500 p-2 rounded-full fill-white hover:bg-green-800 hover:cursor-pointer'
              size={50}
              onClick={handleClick}
              >
              { format(selectedDate, "dd-MM-yyyy") }
            </MdCalendarMonth>
            {isOpen && (
              <div className="absolute right-[32px] top-[160px] z-50">
                <DatePicker selected={selectedDate} onChange={handleChange} inline />
              </div>
            )}
          </div>
          <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} disabled dateFormat="MMMM dd, yyyy" className='bg-white text-xl w-[140px] font-bold hover:cursor-pointer'/>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center border py-3 px-5 bg-slate-200'>
          <LogSearchInput/>
          <CreateLogBtn/>
        </div>
        <div className="">
        <table className='w-full'>
          <thead className='sticky top-0 bg-white'>
            <tr>
              <th scope="col" className="font-bold text-md border border-slate-300 text-gray-900 py-4 text-start pl-5">Firstname</th>
              <th scope="col" className="font-bold text-md border border-slate-300 text-gray-900 py-4 text-start pl-5">Lastname</th>
              <th scope="col" className="font-bold text-md border border-slate-300 text-gray-900 py-4 text-start pl-5">Description</th>
              <th scope="col" className="font-bold text-md border border-slate-300 text-gray-900 py-4 text-start pl-5">Time</th>
              <th scope="col" className="font-bold text-md border border-slate-300 text-gray-900 py-4 text-start pl-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.length > 0 ? data.map((item) => {
                return (
                 <tr className="even:bg-slate-200" key={item.id}>
                  <td className="text-slate-900 max-h-2 border border-slate-300 overflow-hidden px-5 py-2 whitespace-pre max-w-[200px]">{item.firstname}</td>
                  <td className="text-slate-900 max-h-2 border border-slate-300 overflow-hidden px-5 py-2 whitespace-pre max-w-[200px]">{item.lastname}</td>
                  <td className="text-slate-900 max-h-2 border border-slate-300 overflow-hidden px-5 py-2 whitespace-pre max-w-[200px] text-ellipsis">{item.description}</td>
                  <td className="text-slate-900 max-h-2 border border-slate-300 overflow-hidden px-5 py-2 whitespace-pre max-w-[200px]">
                    {new Date(item.created_at).toLocaleTimeString()}
                  </td>
                  <td className="text-slate-900 max-h-2 border border-slate-300 overflow-hidden px-5 py-2 whitespace-pre max-w-[30px]">
                    <button onClick={() => onCheck(item)} className='flex items-center space-x-1 bg-[#009900] px-2 py-1 rounded text-white hover:bg-[#006600]'>
                      <AiFillEye/>
                      <span className='text-sm'>View</span>
                    </button>
                  </td>
                 </tr> 
                )
              }) : (
                <tr>
                  <td className='text-center py-4 border' colSpan={5}>Table is empty</td>
                </tr>
              )
            }
          </tbody>
        </table>
        </div>
      </div>
      <ViewModal open={viewModal} onClose={close} content={char}/>
    </div>
  )
}

export default Organization
