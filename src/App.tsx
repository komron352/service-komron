import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import CalendarPage from './pages/CalendarPage'
import ServicesPage from './pages/ServicesPage'
import SmsLogs from './pages/SmsLogs'
import SettingsPage from './pages/SettingsPage'
import Layout from './components/Layout'

function Protected({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  if (loading) return <div className="min-h-screen bg-[#08080a] flex items-center justify-center text-[#8a8a8e]">Боркунӣ...</div>
  if (!user) return <Navigate to="/login" replace />
  return <>{children}</>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Protected><Layout /></Protected>}>
          <Route index element={<Dashboard />} />
          <Route path="clients" element={<Clients />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="sms" element={<SmsLogs />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
