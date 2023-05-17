import React, { useEffect } from 'react'
import axiosInstance from '../../api/axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const TableView = () => {
    const nav = useNavigate()
    const [org, setOrg] = useState([])
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getOrgList = setInterval(() => {
      axiosInstance.get(`org-list`)
      .then((res) => {
        setOrg(res.data.organization)
        setLoading(false)
      }).catch((error) => {
        console.log(error)
      })
    }, 1000)
    return () => clearInterval(getOrgList)
  }, [org])

  
  if(loading){
    return (
      <div className='flex justify-center items-center h-[200px]'>
        <div style={{borderTopColor: 'transparent'}} className="w-16 h-16 border-4 border-red-400 border-double rounded-full animate-spin" />
      </div>

    )
  }
    return (
        <div className="logbook-table">
                <table>
                    <thead>
                        <tr>
                            <th scope="col" className='w-5/12 -x'>Organization Name</th>
                            <th scope="col" className='w-5/12 -x'>Description</th>
                            <th scope="col" className='w-2/12 -x'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        org.length > 0 ? org.map((item) => {
                        return (
                        <tr key={item.id}>
                            <td>{ item.name }</td>
                            <td>{ item.description }</td>
                            <td><button onClick={() => nav('/organization', {state: {id: item.id }})}>View Organization</button></td>
                        </tr>
                        )
                        }):(
                                <tr>
                                <td colSpan={5}>
                                    <div className='flex flex-col justify-center items-center pt-4'>
                                    <ImFileEmpty size={30}/>
                                    <h1 className='font-bold text-sm text-slate-700 py-5'>Table is empty</h1>
                                    </div>
                                </td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
        </div>
    )
}

export default TableView;