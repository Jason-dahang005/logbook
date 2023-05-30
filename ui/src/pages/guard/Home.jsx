import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axios'
import user_img from '../../assets/img/user-img.png'
import empty_img from '../../assets/img/empty-img.png'
import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'

import CreateOrgBtn from '../../components/guard/CreateOrgBtn'
import OrgNameFilter from '../../components/guard/OrgNameFilter'
import SortBy from '../../components/guard/SortBy'

const Home = () => {

  const nav = useNavigate()
  const [org, setOrg] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchOrg, setSearchOrg] = useState('')

  useEffect(() => {
    getOrgList()
  }, [])

  const getOrgList = () => {
    axiosInstance.get(`org-list`)
    .then((res) => {
      setOrg(res.data.organization)
      setLoading(false)
    }).catch((error) => {
      console.log(error)
    })
  }

  const searchOrgFilter = org.filter((item) => {
    return item.name.toLowerCase().includes(searchOrg.toLowerCase())
  })

  return (
    <div className='flex flex-col space-y-3 p-3'>
      {/* <div className='flex justify-end items-center space-x-2 p-3 shadow-[1px_1px_6px_2px_#00000024] rounded-lg'>
        <div className='relative'>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BiSearch className='text-slate-400'/>
          </div>
          <input type="text" value={searchOrg} onChange={(e) => setSearchOrg(e.target.value)} className='border border-slate-400 pl-8 pr-2 py-1 outline-none rounded text-slate-700' placeholder='Search' />
          <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
            <GrFormClose size={20} onClick={() => setSearchOrg('')} className='text-slate-700 hover:cursor-pointer z-50 hover:bg-gray-200 rounded-full'/>
          </div>
        </div>
        <CreateOrgBtn getOrgList={getOrgList}/>
      </div> */}
      {
        loading ? (
          <div className='flex justify-center items-center h-[200px]'>
            <div style={{borderTopColor: 'transparent'}} className="w-16 h-16 border-4 border-red-400 border-double rounded-full animate-spin" />
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg: gap-5'>
            {
              org.length > 0 ? searchOrgFilter.map((item) => {
                return (
                  <div className="w-full border border-slate-300 rounded" key={item.id}>
                    <div className="flex items-center space-x-1 p-2 bg-slate-300">
                      <img src={user_img} alt="" className='w-16' />
                    </div>
                    <div className='px-3 py-3 text-center'>
                      <div className="border py-2 drop-shadow-md">
                        <h3 className='font-bold text-2xl text-slate-600'>{ item.name }</h3>
                      </div>
                    </div>
                    <div className="p-2">
                      <button onClick={() => nav('/organization', {state: {id: item.id }})} className='text-white text-sm bg-slate-500 w-full hover:bg-slate-700 rounded-sm'>View Organization</button>
                    </div>
                  </div>
                )
              }) : (
                <div className='col-span-4'>
                  <div className="flex flex-col justify-center items-center h-96">
                    <img src={empty_img} className='w-[100px]' alt="" />
                    <h1>No Organization Created</h1>
                  </div>
                </div>
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default Home
