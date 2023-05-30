import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './pages/guard/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/guard/Register'
import Home from './pages/guard/Home'
import Layout from './components/guard/Layout'
import Unauthenticated from './api/unauthenticated'
import Authenticated from './api/authenticated'
import Organization from './pages/guard/Organization'
import LogHistory from './pages/guard/LogHistory'
import LogSearch from './components/guard/LogSearch'
import Master from './components/admin/Master'
import Dashboard from './pages/admin/Dashboard'
import Auth from './api/adminAuth'

import SecurityList from './pages/admin/SecurityList'
import NewOrganization from './pages/guard/NewOrganization'
import Profile from './components/admin/Profile'
import OrgTable from './components/admin/OrgTable'
import Welcome from './components/guard/Welcome'
import AdminOrganization from './pages/admin/AdminOrganization'
import Logbook from './pages/admin/Logbook'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Unauthenticated/>}>
          <Route element={<Welcome/>}>
            <Route exact path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Route>
        </Route>
        <Route element={<Authenticated/>}>
          <Route element={<Layout/>}>
            <Route path="/home" element={<Home/>} />
            <Route path="/organization" element={<Organization/>} />
            <Route path="/log-history" element={<LogHistory/>}/>
            <Route path="/search" element={<LogSearch/>} />
            <Route path="/history" element={<LogHistory/>} />
            <Route path='/new-organization' element={<NewOrganization/>} />
            
          </Route>
        </Route>
        <Route element={<Auth/>}>
          <Route element={<Master/>}>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/organizations' element={<AdminOrganization/>} />
            <Route path='/security-list' element={<SecurityList/>} />
            <Route path='/orgtable' element={<OrgTable/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/logbook' element={<Logbook/> } />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
