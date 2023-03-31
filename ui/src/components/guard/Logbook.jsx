import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axiosInstance from '../../api/axios'
import { AiFillEye } from 'react-icons/ai'
import CreateLogBtn from '../../components/guard/CreateLogBtn'
import ViewModal from './ViewModal'

const Logbook = () => {

  const location = useLocation()
  const [logbook, setLogbook] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewModal, setViewModal] = useState(false)
  const [char, setChar] = useState([])
  const close = () => setViewModal(false)


  useEffect(() => {
    const x = setInterval(() => {
      axiosInstance.get(`logbook/${location.state.id}`)
      .then((res) => {
        console.log(res.data)
        setLogbook(res.data.logs)
        setLoading(false)
      }).catch((error) => {
        console.log(error)
      })
    }, 1000)
    return () => clearInterval(x)
  }, [logbook])

  const onCheck = (id) => {
    console.log(id)
    setViewModal(true)
    setChar(id)
  }

  if(loading){
    return (
      <div className='flex justify-center items-center h-[300px]'>
        <div style={{borderTopColor: 'transparent'}} className="w-16 h-16 border-4 border-red-400 border-double rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div>
      <div className="h-[400px] overflow-y-auto bg-white">
        <table className="w-full">
          <thead> 
            <tr className='sticky top-0 bg-white'>
              <th scope="col" className="font-bold text-md border border-slate-300 text-gray-900 py-4 text-start pl-5">Last Name</th>
              <th scope="col" className="font-bold text-md border border-slate-300 text-gray-900 py-4 text-start pl-5">First Name</th>
              <th scope="col" className="font-bold text-md border border-slate-300 text-gray-900 py-4 text-start pl-5 w-5/12">Description</th>
              <th scope="col" className="font-bold text-md border border-slate-300 text-gray-900 py-4 w-1/12">Time</th>
              <th scope="col" className="font-bold text-md border border-slate-300 text-gray-900 py-4 w-1/12">Action</th>
            </tr>
          </thead>
          <tbody className='border-y-2 border-slate-500'>
            {
              logbook.length > 0 ? logbook.map((item) => {
                return (
                  <tr className="even:bg-slate-200" key={item.id}>
                    <td className="text-slate-900 max-h-2 border-x border-slate-300 overflow-hidden px-5 py-2 whitespace-pre max-w-[200px]">{ item.lastname }</td>
                    <td className="text-slate-900 max-h-2 border-x border-slate-300 overflow-hidden px-5 py-2 whitespace-pre max-w-[200px]">{ item.firstname }</td>
                    <td className="text-slate-900 max-h-2 border-x border-slate-300 overflow-hidden px-5 py-2 whitespace-pre max-w-[200px] text-ellipsis">{ item.description }</td>
                    <td className="text-slate-900 max-h-2 border-x border-slate-300 overflow-hidden px-5 py-2 whitespace-pre max-w-[200px]">{new Date(item.created_at).toLocaleTimeString()}</td>
                    <td className="text-slate-900 max-h-2 border-x border-slate-300 py-2 px-4">
                      <button onClick={() => onCheck(item)} className='flex items-center space-x-1 bg-[#009900] px-2 py-1 rounded text-white hover:bg-[#006600]'>
                        <AiFillEye/>
                        <span className='text-sm'>View</span>
                      </button>
                    </td>
                  </tr>
                )
              }): (
                <tr>
                  <td className='text-center py-4' colSpan={5}>Table is currently empty</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>

      <ViewModal open={viewModal} onClose={close} content={char}/>
    </div>
  )
}

export default Logbook