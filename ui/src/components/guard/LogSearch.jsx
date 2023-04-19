import React, { useEffect, useState } from 'react'
import axiosInstance from '../../api/axios'

const LogSearch = () => {

  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const r = await axiosInstance.get(`search-log?search=${search}`)
      console.log(r.data)
      setResult(r.data)
    }
    fetchData()
  }, [search])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <input type="text" name='search' className='outline-none border border-red-800' value={search} onChange={handleSearchChange} />

      <ul>
        {
          result.firstname
        }
      </ul>
    </div>
  )
}

export default LogSearch
