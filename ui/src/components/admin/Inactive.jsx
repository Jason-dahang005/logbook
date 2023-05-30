import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axiosInstance from '../../api/axios'
import { AiFillEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Inactive = () => {

  const [org, setOrg] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getOrgData = setInterval(() => {
      axiosInstance.get(`admin-org-list`)
      .then((res) => {
        //console.log(res.data.organization)
        setOrg(res.data.organization)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
    }, 1000);
    return () => clearInterval(getOrgData)
  }, [org])

  if(loading){
    return (
      <div className="flex items-center justify-center h-60">
        <div style={{borderTopColor: 'transparent'}} className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin" />
        <p className="ml-2">Loading...</p>
      </div>
    )
  }

  return (
    <div className="w-full px-4 mx-auto py-5">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full drop-shadow-xl rounded">
        <div className="rounded-t px-2 py-3 border-0">
          <div className="relative w-full px-1 max-w-full flex-grow flex-1">
            <h3 className="font-bold text-xl text-blueGray-700">List of Organization</h3>
          </div>
        </div>
        <input 
    type="search"
    class="relative m-0 block w-40 min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
    id="exampleSeh"
    placeholder="search"/>
  <br/>
  <div className='justy flex col-auto space-x-3'>
    
  <Link to="/status"  class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-40">
  In-Active
</Link> 

<Link to="/organization-list"  class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded w-40">
  Active
</Link> 
</div> <br/>  
        <div className='w-full h-[500px] overflow-y-auto'>
          <table className=''>
            <thead className='bg-slate-300 sticky top-0'>
              <tr>
                <th className='text-left p-3 w-2/12'>Organization Name</th>
                <th className='text-left p-3 w-9/12'>Description</th>
                <th className='text-left p-3 w-9/12'>Guard</th>
                <th className='text-center p-3 w-1/12'>Action</th>
                <th className='text-center p-3 w-1/12'>status</th>
              </tr>
            </thead>
            <tbody>
              {
                org.length > 0 ? org.map((item) => {  
                  return (
                    <tr key={item.id} className='even:bg-slate-200'>
                      <td className='text-sm p-3'>{item.name}</td>
                      <td className='text-sm p-3'>{item.description}</td>
                      <td className='text-sm p-3'>ople</td>
                      <td className='text-sm p-3'>
                        <Link to="/log" className='flex items-center space-x-1 bg-green-500 text-white py-1 px-2 rounded-sm'>
                          <AiFillEye size={20} />
                          <span className='text-sm'>View</span>
                        </Link>
                      </td>
                      <td><label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
	
	<span className="relative">
		<input id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-blue-400"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
	</span>
	
</label>
</td>

                    </tr>
                  )
                }) : (
                  <tr>
                    <td className='text-center py-4' colSpan={5}>Table is currently empty</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Inactive
