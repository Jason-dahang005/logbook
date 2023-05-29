import React from 'react'
import CreateOrgBtn from './CreateOrgBtn'
import OrgNameFilter from './OrgNameFilter'

const LowerHeader = () => {
  return (
    <div className='border flex items-center p-3 justify-end space-x-2'>
      <OrgNameFilter/>
      <CreateOrgBtn/>
    </div>
  )
}

export default LowerHeader
