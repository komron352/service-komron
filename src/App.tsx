import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import Layout from './components/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import CalendarPage from './pages/CalendarPage'
import ServicesPage from './pages/ServicesPage'
import SmsLogs from './pages/SmsLogs'
import SettingsPage from './pages/SettingsPage'

export default function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Layout/>}>
            <Route index element={<Dashboard/>} />
            <Route path="clients" element={<Clients/>} />
            <Route path="calendar" element={<CalendarPage/>} />
            <Route path="services" element={<ServicesPage/>} />
            <Route path="sms" element={<SmsLogs/>} />
            <Route path="settings" element={<SettingsPage/>} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
