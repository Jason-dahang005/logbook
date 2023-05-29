import React from 'react'
import DataContext from '../../context/DataContext'
import OrganizationListTable from '../../components/admin/OrganizationListTable'
import { useState, useEffect } from 'react'
import axiosInstance from '../../api/axios'
import OrganizationSearchFilter from '../../components/admin/OrganizationSearchFilter'

const Organization = () => {

  const [organization, setOrganzation] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => { 
    fetchOrganization()
  }, [])

  const fetchOrganization = () => {
    axiosInstance.get(`admin-list-organization`)
    .then((res) => {
      setOrganzation(res.data.organization)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const filterData = organization.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <DataContext.Provider value={{ loading, organization, filterData, searchQuery, setSearchQuery }}>
      <div className="w-full mb-12 xl:mb-0 px-4 mx-auto py-2">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-lg p-3">
          <div className="rounded-t mb-0 py-3 border-0">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xl text-gray-600 font-sans">List of organizations</h3>
              </div>
              <OrganizationSearchFilter/>
            </div>
          </div>
          <OrganizationListTable/>
        </div>
      </div>
    </DataContext.Provider>
  )
}

export default Organization
