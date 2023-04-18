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
import OrganizationList from './pages/admin/OrganizationList'
import SecurityList from './pages/admin/SecurityList'
import NewOrganization from './pages/guard/NewOrganization'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Unauthenticated/>}>
          <Route exact path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
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
            <Route path='/organization-list' element={<OrganizationList/>}/>
            <Route path='/security-list' element={<SecurityList/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
