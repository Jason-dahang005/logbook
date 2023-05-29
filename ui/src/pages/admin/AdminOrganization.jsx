import React from 'react'
import AdminOrganizationTable from '../../components/admin/organizations/AdminOrganizationTable'
import AdminOrganizationProvider from '../../context/admin/AdminOrganizationContext'
import AdminCreateOrganizationButton from '../../components/admin/organizations/AdminCreateOrganizationButton'
import AdminCreateOrganizationModal from '../../components/admin/organizations/AdminCreateOrganizationModal'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const AdminOrganization = () => {


  return (
    <AdminOrganizationProvider>
      <div className="w-full mb-12 xl:mb-0 px-4 mx-auto py-5">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-[0px_0px_5px_0px_#00000024] w-full mb-6 rounded-lg p-3">
          <div className="rounded-t mb-0 border-0">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xl text-gray-600 font-sans">Organizations</h3>
              </div>
              <div className='flex items-center'>
                <AdminCreateOrganizationButton/>
                <AdminCreateOrganizationModal/>
                <ToastContainer />
              </div>
            </div>
            <div className='py-3'>
              <AdminOrganizationTable/>
            </div>
          </div>
        </div>
      </div>
    </AdminOrganizationProvider>
  )
}

export default AdminOrganization
