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
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
