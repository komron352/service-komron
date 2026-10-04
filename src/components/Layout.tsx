import { Outlet, Link, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Layout() {
  const { signOut } = useAuth()
  const loc = useLocation()
  const active = (p: string) => loc.pathname === p ? 'font-bold' : ''
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex gap-6 p-4 border-b bg-white">
        <Link to="/" className={active('/')}>Dashboard</Link>
        <Link to="/services" className={active('/services')}>Services</Link>
        <Link to="/customers" className={active('/customers')}>Customers</Link>
        <Link to="/settings" className={active('/settings')}>Settings</Link>
        <button onClick={signOut} className="ml-auto">Logout</button>
      </nav>
      <main className="p-6"><Outlet /></main>
    </div>
  )
}
