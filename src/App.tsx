import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './hooks/useAuth'
import Layout from './components/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import CalendarPage from './pages/CalendarPage'
import ServicesPage from './pages/ServicesPage'
import SmsLogs from './pages/SmsLogs'
import SettingsPage from './pages/SettingsPage'

function Protected({children}:{children:React.ReactNode}){
  const {user, loading} = useAuth()
  if(loading) return <div className="min-h-screen bg-[#08080a] flex items-center justify-center text-zinc-500">Бор карда истодааст...</div>
  if(!user) return <Navigate to="/login" />
  return <Layout>{children}</Layout>
}

export default function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Protected><Dashboard/></Protected>} />
          <Route path="/clients" element={<Protected><Clients/></Protected>} />
          <Route path="/calendar" element={<Protected><CalendarPage/></Protected>} />
          <Route path="/services" element={<Protected><ServicesPage/></Protected>} />
          <Route path="/sms" element={<Protected><SmsLogs/></Protected>} />
          <Route path="/settings" element={<Protected><SettingsPage/></Protected>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
