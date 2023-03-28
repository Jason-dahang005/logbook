import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Organization from './pages/Organization'
import Layout from './Layout'
import Security from './pages/Security'
import Datepicker from './pages/Datepicker'


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

