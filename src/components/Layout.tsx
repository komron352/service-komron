import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { LayoutDashboard, Users, Calendar, Wrench, MessageSquare, Settings, LogOut } from 'lucide-react'

const nav = [
  { path:'/', label:'Dashboard', icon: LayoutDashboard },
  { path:'/clients', label:'Мизоҷон', icon: Users },
  { path:'/calendar', label:'Тақвим', icon: Calendar },
  { path:'/services', label:'Хизматрасониҳо', icon: Wrench },
  { path:'/sms', label:'SMS', icon: MessageSquare },
  { path:'/settings', label:'Танзимот', icon: Settings },
]

export default function Layout({children}:{children:React.ReactNode}){
  const loc = useLocation()
  const { signOut } = useAuth()
  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 flex">
      <aside className="w-[260px] border-r border-zinc-800/80 bg-[#0f0f11] hidden md:flex flex-col">
        <div className="p-6 border-b border-zinc-800">
          <h1 className="text-[#d4a017] font-black text-xl tracking-tight">IMRAN SERVICE</h1>
          <p className="text-zinc-500 text-xs mt-1">CRM • Production</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {nav.map(i=>{
            const active = loc.pathname===i.path
            return <Link key={i.path} to={i.path} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${active ? 'bg-[#d4a017] text-black font-semibold' : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100'}`}><i.icon size={18}/>{i.label}</Link>
          })}
        </nav>
        <div className="p-3 border-t border-zinc-800">
          <button onClick={signOut} className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm px-3 py-2"><LogOut size={16}/> Баромад</button>
        </div>
      </aside>
      <main className="flex-1 min-w-0">
        <div className="md:hidden p-4 border-b border-zinc-800 flex justify-between items-center bg-[#0f0f11]"><span className="text-[#d4a017] font-bold">IMRAN SERVICE</span><button onClick={signOut} className="text-zinc-400"><LogOut size={18}/></button></div>
        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  )
}
