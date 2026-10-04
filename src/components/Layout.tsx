import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Users, Calendar, Wrench, MessageSquare, Settings, LogOut } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'

const nav = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/clients', icon: Users, label: 'Мизоҷон' },
  { to: '/calendar', icon: Calendar, label: 'Таъинот' },
  { to: '/services', icon: Wrench, label: 'Хизматрасониҳо' },
  { to: '/sms', icon: MessageSquare, label: 'SMS' },
  { to: '/settings', icon: Settings, label: 'Танзимот' },
]

export default function Layout(){
  const { pathname } = useLocation()
  const { signOut } = useAuth()
  const nav2 = useNavigate()
  return (
    <div className="min-h-screen flex bg-[#08080a]">
      <aside className="w-64 border-r border-zinc-800 p-4 flex flex-col">
        <div className="text-xl font-bold text-[#d4a017] mb-8">IMRAN SERVICE</div>
        <div className="space-y-1 flex-1">
          {nav.map(n=>{
            const active = pathname===n.to
            return <Link key={n.to} to={n.to} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${active?'bg-[#d4a017] text-black':'text-zinc-400 hover:text-white hover:bg-zinc-900'}`}><n.icon size={18}/>{n.label}</Link>
          })}
        </div>
        <button onClick={async()=>{ await signOut(); nav2('/login')}} className="flex items-center gap-2 text-zinc-500 hover:text-white px-3 py-2"><LogOut size={18}/> Баромад</button>
      </aside>
      <main className="flex-1 p-6 overflow-auto"><Outlet/></main>
    </div>
  )
}
