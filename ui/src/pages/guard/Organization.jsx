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
import { BiSearch } from 'react-icons/bi'


const Organization = () => {
  const location = useLocation()

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [viewModal, setViewModal] = useState(false)
  const [modalContent, setModalContent] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState([])

  const close = () => setViewModal(false)

  useEffect(() => {
    const ccc = setInterval(() => {
      const formattedDate = selectedDate.toISOString().slice(0,10)
      axiosInstance.get(`logbook/${location.state.id}/${formattedDate}`)
      .then((res) => {
        //console.log(res.data)
        setData(res.data)
        setSearch(res.data)
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
    setModalContent(id)
  }

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setSelectedDate(e);
  }

  const Filter = (e) => {
    setSearch(data.filter(f => f.firstname.toLowerCase().includes(e.target.value)))
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

      <div className="organization-page">
        <div className='flex flex-col'>
          <div className='flex justify-between items-center border py-3 px-5 bg-slate-200'>
            <div className='relative'>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BiSearch className='text-slate-400'/>
              </div>
              <input type="text" className='border border-slate-200 pl-8 pr-2 py-1 outline-none rounded text-slate-700' onChange={Filter} placeholder='Search'/>
            </div>
            <CreateLogBtn/>
          </div>
          <div className="logbook-table">
            <table>
              <thead>
                <tr>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Description</th>
                  <th scope="col">Time</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.length > 0 ? data.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.description}</td>
                        <td>
                          {new Date(item.created_at).toLocaleTimeString()}
                        </td>
                        <td>
                          <button onClick={() => onCheck(item)}>
                            <AiFillEye/>
                            <span>View</span>
                          </button>
                        </td>
                      </tr> 
                    )
                  }) : (
                    <tr>
                      <td className='text-center py-5 border' colSpan={6}>Table is empty</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ViewModal open={viewModal} onClose={close} content={modalContent}/>
    </div>
  )
}

export default Organization
