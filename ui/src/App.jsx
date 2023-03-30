import { useState } from 'react'
import Dashboard from './pages/admin/Dashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Organization from './pages/admin/Organization'
import Layout from './Layout'
import Security from './pages/admin/Security'
import Datepicker from './pages/admin/Datepicker'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Dashboard/> } />
          <Route path="/organization" element={<Organization/> } />
          <Route path="/security" element={<Security/> } />
          <Route path="/datepicker" element={<Datepicker/>} />
        
        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
    
  )
}

export default App

