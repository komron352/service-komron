import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'
import Layout from './components/Layout.tsx'
import Login from './components/Login.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Clients from './pages/Clients.tsx'
import Services from './pages/Services.tsx'
import Invoices from './pages/Invoices.tsx'
import Settings from './pages/Settings.tsx'
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="clients" element={<Clients />} />
            <Route path="services" element={<Services />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}