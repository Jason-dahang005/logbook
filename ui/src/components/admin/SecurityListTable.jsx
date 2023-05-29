import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axiosInstance from '../../api/axios'
import { AiFillEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import user_img from '../../assets/img/user-img.png'

const SecurityListTable = () => {

  const nav = useNavigate()
  const [guard, setGuard] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
      fetchGuard()
  }, [])

  const fetchGuard = () => {
    axiosInstance.get(`guard-list`)
    .then((res) => {
      setGuard(res.data.guards)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const filterData = guard.filter((item) => {
    return item.firstname.toLowerCase().includes(search.toLowerCase()) || item.lastname.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      <div className="w-full mb-12 xl:mb-0 px-4 mx-auto py-5">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-[1px_1px_5px_0px_#00000024] w-full mb-6 rounded-lg p-3">
          <div className="rounded-t mb-0 py-3 border-0">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xl text-gray-600 font-sans">List of Security guards</h3>
              </div>
              <div className='relative'>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <BiSearch className='text-slate-700'/>
                </div>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='border border-gray-400 rounded-lg pl-8 outline-none focus:border-gray-700 h-8 text-xs' placeholder='Search'/>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <GrFormClose size={20} onClick={() => setSearchQuery('')} className='text-slate-700 hover:cursor-pointer z-50 hover:bg-gray-200 rounded-full'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='block w-full overflow-x-auto'>
          <table className='items-center bg-transparent w-full border-collapse'>
            <thead>
              <tr>
                <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>First Name</th>
                <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>Last Name</th>



                <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                guard.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>{item.firstname}</td>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>{item.lastname}</td>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'></td>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                        <button onClick={() => nav('/profile', {state: {id: item.id }})} className='flex items-center space-x-1 bg-green-500 text-white py-1 px-2 rounded-sm'>
                          <AiFillEye size={20} />
                          <span className='text-sm'>View</span>
                        </button>
                      </td>
                    </tr>
                  ) : (
                    filterData.length > 0 ? filterData.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td className='border-t-0 px-6 py-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap'>
                            <img src={user_img} alt={user_img} className='max-h-10 max-w-10' srcSet="" />
                          </td>
                          <td>{item.firstname}</td>
                          <td>{item.lastname}</td>
                          <td>{item.email}</td>
                          <td>
                              {
                                item.organization ? (
                                  <span onClick={() => nav('/logbook', {state: {id: item.organization.id }})} className='underline hover:text-gray-700 hover:cursor-pointer'>
                                    {item.organization.name}
                                  </span>
                                ) : (
                                  'N/A'
                                )
                              }
                          </td>
                          <td>{new Date(item.created_at).toLocaleDateString()}</td>
                          <td>
                            <span className='badge-success'>Active</span>
                          </td>
                        </tr>
                      )
                    }) : (
                      <tr>
                        <td colSpan={6}>
                          <div className='text-gray-600 font-sans flex items-center justify-center text-sm py-5 border-b whitespace-nowrap h-32'>
                            <h1>No users found</h1>
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
    </>
  )
}

export default SecurityListTable
