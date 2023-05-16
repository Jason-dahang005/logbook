import React, { useEffect, useState }  from "react"
import user_img from '../../assets/img/user-img.png'
import axiosInstance from '../../api/axios'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Sprofile= () => {
  const [showModal, setShowModal] = React.useState(false);
    const [user, setUser] = useState([])
    const [org, setOrg] = useState([])

useEffect(() => {
  axiosInstance.get('auth-user').then((response) => {
    setUser(response.data.user)
  })
}, [])
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
return (
        <> 
            <div class="bg-gray-100 ">
            <h1 className="text-5xl font-bold mb-4 pl-5 pt-5 flex flex-row"><Link to="/home"><AiOutlineArrowLeft className='rounded-full hover:bg-slate-300 p-1 mt-3'size={30}/></Link>Profile</h1>
                <div class="container mx-auto py-8">
                    <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div class="col-span-4 sm:col-span-3">
                            <div class="bg-white shadow rounded-lg p-6">
                                <div class="flex flex-col items-center">
                                    <img src={user_img} class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />      
                                </div>
                                <hr class="my-6 border-t border-gray-300" />
                                <div class="flex flex-col">
                                    <ul>
                                        <li class="mb-2">Name :  <span>{ user.name }</span></li>
                                       
                                            <button
    className="flex items-center justify-center hover:bg-slate-600 bg-slate-700 w-full py-2 text-white rounded-[5px] space-x-1"
    type="button"
    onClick={() => setShowModal(true)}
  >
    Reset Password
  </button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-4 sm:col-span-9">
                            <div class="bg-white shadow rounded-lg p-6">
                                <h2 class="text-xl font-bold mb-4">Organization List</h2>
                                <table class="table-auto border-separate border-spacing-2">
                                    <thead > 
                                        <tr>
                                            <th>Organization Name</th>
                                            <th></th>
                                            <th>description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            org.length > 0 ? org.map((item) => {
                                                
                                            return (
                                                <tr key={item.id} className='even:bg-slate-200'>
                                                    <td className='text-sm p-3'>{item.name}</td>
                                                    <th></th>
                                                    <td className='text-sm p-3'>{item.description}</td>
                                                </tr>
                                            )
                                            }) : (
                                            <tr>
                                                <td className='text-center py-4' colSpan={5}>No Organization Created</td>
                                            </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{showModal ? (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
              Reset Password
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
          
              
              <section class="bg-gray-50 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
          
            <div class=" p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
                        <input type="text" name="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter old Password" required=""/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter new password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  
                    </div>
                    <div>
                        <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm new Password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                    
                    
                 <h1 className="invisible">\learn at fligno  powsdadadeiwqepowqpieqpeiq</h1>
         
                </form>
            </div>
        </div>
      </section>
              
        
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null}
        </>
    )
}

export default Sprofile

