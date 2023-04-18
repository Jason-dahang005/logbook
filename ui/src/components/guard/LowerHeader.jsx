import React from 'react'
import CreateOrgBtn from './CreateOrgBtn'
import OrgNameFilter from './OrgNameFilter'

const LowerHeader = () => {
  return (
    <div className='w-full flex justify-end items-center space-x-3 pb-4'>
      {/* <input type="date" className='border'/> */}
      <OrgNameFilter/>
      <CreateOrgBtn/>
    </div>
  )
}

export default LowerHeader
