import React, { useEffect, useState }  from "react"
import user_img from '../../assets/img/user-img.png'
import axiosInstance from '../../api/axios'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'

const Profile = () => {

    const location = useLocation()
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchSingleUser()
    }, [])

    const fetchSingleUser = () => {
        axiosInstance.get(`guard-list/${location.state.id}`)
        .then((response) => {
            setUser(response.data.guard)
            setLoading(false)
            console.log(response.data.guard)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="p-3">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12">
                    <div className="bg-white flex items-center p-3 rounded-lg shadow-[1px_1px_6px_2px_#00000024]">
                        <Link to="/security-list" className="flex items-center rounded-full p-1 hover:bg-slate-100">
                            <IoIosArrowBack className='rounded-full fill-slate-600'size={20}/>
                        </Link>
                        <h1 className="font-semibold text-2xl ml-1">Profile</h1>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="bg-white p-6 rounded-lg shadow-[1px_1px_6px_2px_#00000024]">
                        <div className="flex flex-col items-center">
                            <img src={user_img} className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />
                        </div>
                        <hr className="my-6 border-t border-gray-300" />
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="text-sm font-semibold">Name</td>
                                        <td className="text-sm px-2"> : </td>
                                        <td className="text-sm">{user.firstname} {user.lastname}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-sm font-semibold">Email</td>
                                        <td className="text-sm px-2"> : </td>
                                        <td className="text-sm">{user.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-span-9">
                    <div className="bg-white rounded-lg p-3 shadow-[1px_1px_6px_2px_#00000024]">   
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="relative w-full px-2 max-w-full flex-grow flex-1">
                                <h3 className="font-bold text-xl text-blueGray-700">List of Organization</h3>
                            </div>
                        </div>
                        <div className='block w-full overflow-x-auto'>
                            <table className='items-center bg-transparent w-full border-collapse'>
                                <thead>
                                    <tr>
                                        <th className='px-6 align-middle border w-3/12 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-bold text-left'>Name</th>
                                        <th className='px-6 align-middle border w-7/12 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-bold text-left'>Description</th>
                                        <th className='px-6 align-middle border w-1/12 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-bold text-left'>Status</th>
                                        <th className='px-6 align-middle border w-1/12 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-bold text-left'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loading ? (
                                            <tr>
                                                <td colSpan={4} className="text-center py-5">Loading...</td>
                                            </tr>
                                        ) : (
                                            user.organization.length > 0 ? user.organization.map((item) => {
                                                return (
                                                    <tr key={item.id}>
                                                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4'>{item.name}</td>
                                                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4'>{item.description}</td>
                                                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4'></td>
                                                    </tr>
                                                )
                                            }) : (
                                                <tr>
                                                    <td colSpan={4} className="text-xs text-center py-5">No Organization Found</td>
                                                </tr>
                                            )
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile