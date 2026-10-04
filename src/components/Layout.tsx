import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/clients', label: 'Мизоҷон' },
  { to: '/calendar', label: 'Тақвим' },
  { to: '/services', label: 'Хизматрасониҳо' },
  { to: '/sms', label: 'SMS' },
  { to: '/settings', label: 'Танзимот' },
]

export default function Layout() {
  const { signOut } = useAuth()
  const nav = useNavigate()
  return (
    <div className="min-h-screen bg-[#08080a] flex">
      <aside className="w-[240px] bg-[#0e0e10] border-r border-[#1e1e20] p-4 flex flex-col">
        <div className="flex items-center gap-3 px-2 py-3">
          <div className="w-8 h-8 rounded-full bg-[#d4a017] text-black font-bold grid place-items-center">I</div>
          <div><div className="text-white text-sm font-semibold">IMRAN SERVICE</div><div className="text-[11px] text-[#6e6e73]">CRM v1</div></div>
        </div>
        <nav className="mt-6 space-y-1 flex-1">
          {links.map(l=>(
            <NavLink key={l.to} to={l.to} className={({isActive})=>`block px-3 py-2.5 rounded-xl text-[13px] ${isActive?'bg-[#1a1a1e] text-white':'text-[#9a9aa0] hover:bg-[#151518] hover:text-white'}`}>{l.label}</NavLink>
          ))}
        </nav>
        <button onClick={async()=>{await signOut(); nav('/login')}} className="mt-4 w-full h-10 rounded-xl bg-[#1a1a1e] text-[#9a9aa0] text-[13px] hover:text-white">Баромад</button>
      </aside>
      <main className="flex-1 p-6 overflow-auto"><Outlet /></main>
    </div>
  )
}
