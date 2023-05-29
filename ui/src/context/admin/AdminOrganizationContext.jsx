import { useState, createContext, useEffect } from "react"
import axiosInstance from '../../api/axios'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const AdminOrganizationContext = createContext()

const AdminOrganizationProvider = ({ children }) => {

  const [organization, setOrganization] = useState([])
  const [loading, setLoading] = useState(true)
  const [guard, setGuard] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [name, setName] = useState('')
  const [user_id, setUser_id] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    fetchAttendance()
  }, [])

  useEffect(() => {
    fetchGuard()
  }, [])

  const fetchAttendance = async () => {
    
    try {
      const responseAttendace = await axiosInstance.get(`admin-list-organization`)
      setLoading(false)
      setOrganization(responseAttendace.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchGuard = async () => {
    try {
      const responseGuard = await axiosInstance.get(`assigned-guard-list`)
      setGuard(responseGuard.data.guard)
    } catch (error) {
      console.log(error)
    }
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setName('')
    setDescription('')
  }

  const handleCreateOrganization = async (e) => {
    e.preventDefault()

    try {
      const createOrganizationResponse = await axiosInstance.post(`admin-create-organization`, {
        name, user_id, description
      })
      console.log(createOrganizationResponse.data)
      setIsModalOpen(false)
      toast.success('Organization created!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      setName('')
      setDescription('')
      fetchAttendance()

    } catch (error) {
      toast.error('Something went wrong!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      console.log(error)
    }
  }

  return (
    <AdminOrganizationContext.Provider
    value={{ organization, loading, closeModal, openModal, isModalOpen, guard, name, setName, user_id, setUser_id, description, setDescription, handleCreateOrganization }}>
      {children}
    </AdminOrganizationContext.Provider>
  )
}

export default AdminOrganizationProvider
