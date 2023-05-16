import React from 'react'
import CreateOrgBtn from '../../components/guard/CreateOrgBtn'
import LowerHeader from '../../components/guard/LowerHeader'
import OrgList from '../../components/guard/OrgList'

const Home = () => {

  return (
    <div className='px-8 py-4 '>
      <LowerHeader/>
      <OrgList/>
    </div>
  )
}

export default Home
