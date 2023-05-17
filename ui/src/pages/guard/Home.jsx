import React from 'react'
import CreateOrgBtn from '../../components/guard/CreateOrgBtn'
import LowerHeader from '../../components/guard/LowerHeader'
import OrgList from '../../components/guard/OrgList'
import { useState } from 'react'
import TableView from '../../components/guard/TableView'




const Home = () => {
  const [tab, setTab] = useState(1)

  const action = (index) => {
    setTab(index)
  }

  
  return (
    

    <div className='p-4'>
    <div className="flex flex-col">
     
    
      <div className='p-2 flex justify-between items-center rounded-lg shadow-[1px_1px_6px_2px_#00000024] '>
      <LowerHeader/>
      
        
      
        <div className="flex space-x-2">
          <button onClick={() => action(1)} className={`${tab === 1 ? 'bg-slate-700 text-white px-4 rounded-full text-sm font-semibold' : 'text-slate-700 bg-white border border-slate-700 px-4 rounded-full text-sm font-semibold'}`}>Card View</button>
          <button onClick={() => action(2)} className={`${tab === 2 ? 'bg-slate-700 text-white px-4 rounded-full text-sm font-semibold' : 'text-slate-700 bg-white border border-slate-700 px-4 rounded-full text-sm font-semibold'}`}>Table View</button>
        </div>
      </div>

      <div>
        <div className="mt-4">
          <div className={`${tab === 1 ? 'block' : 'hidden'}`}>
             <OrgList/>
          </div>
          <div className={`${tab === 2 ? 'block' : 'hidden'}`}>
            <TableView/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home
