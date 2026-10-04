import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.tsx'
export default function Layout() {
  const { signOut } = useAuth()
  const nav = useNavigate()
  return (
    <div className="min-h-screen flex">
      <aside className="w-60 border-r bg-white p-4 space-y-4">
        <div className="font-bold">Imran Service</div>
        <nav className="grid gap-1">
          <NavLink to="/" className={({isActive})=> isActive ? 'bg-zinc-900 text-white px-3 py-2 rounded' : 'px-3 py-2 rounded hover:bg-zinc-100'}>Dashboard</NavLink>
          <NavLink to="/clients" className={({isActive})=> isActive ? 'bg-zinc-900 text-white px-3 py-2 rounded' : 'px-3 py-2 rounded hover:bg-zinc-100'}>Clients</NavLink>
          <NavLink to="/services" className={({isActive})=> isActive ? 'bg-zinc-900 text-white px-3 py-2 rounded' : 'px-3 py-2 rounded hover:bg-zinc-100'}>Services</NavLink>
          <NavLink to="/invoices" className={({isActive})=> isActive ? 'bg-zinc-900 text-white px-3 py-2 rounded' : 'px-3 py-2 rounded hover:bg-zinc-100'}>Invoices</NavLink>
          <NavLink to="/settings" className={({isActive})=> isActive ? 'bg-zinc-900 text-white px-3 py-2 rounded' : 'px-3 py-2 rounded hover:bg-zinc-100'}>Settings</NavLink>
        </nav>
        <button onClick={async()=>{ await signOut(); nav('/login') }} className="text-sm text-zinc-500">Sign out</button>
      </aside>
      <main className="flex-1 p-6 bg-zinc-50"><Outlet /></main>
    </div>
  )
}