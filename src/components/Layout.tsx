import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Users, Calendar, Settings, Wrench, MessageSquare } from 'lucide-react'

const nav = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/clients', label: 'Миҷозон', icon: Users },
  { path: '/calendar', label: 'Тақвим', icon: Calendar },
  { path: '/services', label: 'Хизматрасониҳо', icon: Wrench },
  { path: '/sms', label: 'SMS', icon: MessageSquare },
  { path: '/settings', label: 'Танзимот', icon: Settings },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const loc = useLocation()
  return (
    <div className="min-h-screen flex bg-slate-50">
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-6 font-bold text-xl">IMRAN SERVICE</div>
        <nav className="p-4 space-y-1">
          {nav.map(i => (
            <Link key={i.path} to={i.path} className={`flex items-center gap-3 px-3 py-2 rounded-lg ${loc.pathname===i.path?'bg-slate-900 text-white':'hover:bg-slate-100'}`}>
              <i.icon size={18} /> {i.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1">
        <div className="md:hidden p-4 bg-white border-b flex gap-2 overflow-x-auto">
          {nav.map(i => (
            <Link key={i.path} to={i.path} className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm ${loc.pathname===i.path?'bg-black text-white':'bg-slate-100'}`}>{i.label}</Link>
          ))}
        </div>
        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  )
}
