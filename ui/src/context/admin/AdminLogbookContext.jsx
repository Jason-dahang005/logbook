import { createContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import axiosInstance from "../../api/axios"

export const AdminLogbookContext = createContext()

const AdminLogbookProvider = ({ children }) => {

  const [org, setOrg] = useState([])
  const [attendance, setAttendance] = useState([])
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [loading, setLoading] = useState(true)

  const location = useLocation()
  const formattedDate = selectedDate.toISOString().slice(0,10)

  const handleChange = (e) => {
    setSelectedDate(e);
  }

  useEffect(() => {
    setLoading(true)
    fetchAttendanceLogbook()
  }, [selectedDate])

  const fetchAttendanceLogbook = () => {
    axiosInstance.get(`admin-list-attendance/${location.state.id}/${formattedDate}`)
    .then((response) => {
      console.log(response.data.attendance)
      setAttendance(response.data.attendance)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    setLoading(true)
    fetchNoteLogbook()
  }, [selectedDate])

  const fetchNoteLogbook = () => {
    axiosInstance.get(`note-logbook/${location.state.id}/${formattedDate}`)
    .then((response) => {
      setLoading(false)
      console.log(response.data.note)
      setNotes(response.data.note)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    orgName()
  }, [])

  const orgName = () => {
    axiosInstance.get(`admin-org/${location.state.id}`)
    .then((response) => {
      console.log(response.data.org)
      setOrg(response.data.org)
    })
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const clearSearch = () => {
    setSearch('')
  }

  const attendanceSearch = attendance.filter((item) => {
    return item.firstname.toLowerCase().includes(search.toLowerCase()) || item.lastname.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase())
  })

  const noteSearch = notes.filter((item) => {
    return item.description.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <AdminLogbookContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        handleChange,
        attendance,
        loading,
        notes,
        attendanceSearch,
        noteSearch,
        search,
        handleSearch,
        clearSearch,
        org
      }}>
      { children }
    </AdminLogbookContext.Provider>
  )
}

export default AdminLogbookProvider