import React, { useEffect, useState }  from "react"
import user_img from '../../assets/img/user-img.png'
import axiosInstance from '../../api/axios'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'




const Profile = () => {

    const location = useLocation()
    const [guard, setGuard] = useState([])
    const [loading, setLoading] = useState(true)


  useEffect(() => {
    const getGuardData = setInterval(() => {
      axiosInstance.get(`guard-list`)
      .then((res) => {
        setGuard(res.data.guards)
        setLoading(false)
        console.log(res.data.guards)
      })
      .catch((error) => {
        console.log(error)
      })
    }, 1000)
    return () => clearInterval(getGuardData)
  }, [guard])

  if(loading){
    return (
      <div className="flex items-center justify-center h-60">
        <div style={{borderTopColor: 'transparent'}} className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin" />
        <p className="ml-2">Loading...</p>
      </div>
    )
  }
    

    return (
        <> 
            <div className="bg-gray-100">
            <h1 className="text-5xl font-bold mb-4 pl-5 pt-5 flex flex-row"><Link to="/security-list"><AiOutlineArrowLeft className='rounded-full hover:bg-slate-300 p-1 mt-3'size={30}/></Link>Profile</h1>
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-white shadow rounded-lg p-6">
                                <div className="flex flex-col items-center">
                                    <img src={user_img} className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />
                                </div>
                                <hr className="my-6 border-t border-gray-300" />

                                <div className="flex flex-col">
                                {
                                    guard.map((item) => {
                                    return (
                                    <ul key={item.id}> 
                                        <li className="mb-2">Name :<span>{item.firstname}</span></li>
                                    </ul>
                                    )
                                    })
                                }
                                    {
                                        location.state.id
                                    }
                               
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-xl font-bold mb-4">Organization List</h2>
                                <table className="table-auto border-separate border-spacing-2">
                                    <thead > 
                                        <tr>
                                        <th className='text-left p-3 '>Name</th>
                                        <th className='text-left p-3 '>Description</th>
                                        <th className='text-left p-3 '>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile