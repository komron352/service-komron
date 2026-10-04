import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import CalendarPage from './pages/Calendar'
import Services from './pages/Services'
import SmsLogs from './pages/SmsLogs'
import Settings from './pages/Settings'
import { isSupabaseConfigured } from './lib/supabase'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        {!isSupabaseConfigured && (
          <div className="mb-4 p-3 bg-amber-100 border border-amber-300 rounded-xl text-sm text-amber-900">
            ⚠️ Supabase танзим нашудааст - танҳо барои намоиш
          </div>
        )}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sms" element={<SmsLogs />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
