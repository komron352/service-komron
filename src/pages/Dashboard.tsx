import { useEffect, useState } from 'react'
import StatCard from '../components/StatCard'
import AppointmentCard from '../components/AppointmentCard'
import { api } from '../services/api'
import { Users, CalendarDays, Banknote, Wrench } from 'lucide-react'

export default function Dashboard(){
  const [stats, setStats] = useState({ totalClients:0, totalAppointments:0, revenue:0 })
  const [appts, setAppts] = useState<any[]>([])

  useEffect(()=>{
    api.getStats().then(setStats).catch(()=>{})
    api.getAppointments().then(setAppts).catch(()=>{})
  },[])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        <p className="text-zinc-500 text-sm mt-1">Хуш омадед ба IMRAN SERVICE CRM</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Мизоҷон" value={stats.totalClients} sub="Ҳамаи мизоҷон" icon={<Users size={20}/>} />
        <StatCard title="Сабтҳо" value={stats.totalAppointments} sub="Ин моҳ" icon={<CalendarDays size={20}/>} />
        <StatCard title="Даромад" value={stats.revenue + ' TJS'} sub="Умуми" icon={<Banknote size={20}/>} />
        <StatCard title="Хизматрасониҳо" value="12" sub="Фаъол" icon={<Wrench size={20}/>} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-3">
          <h3 className="font-semibold text-white">Қабулҳои наздик</h3>
          {appts.slice(0,5).map((a:any)=><AppointmentCard key={a.id} service={a.service} date={a.date} status={a.status} price={a.price} />)}
          {appts.length===0 && <p className="text-zinc-500 text-sm">Маълумот нест</p>}
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-[#111113] p-5">
          <h3 className="font-semibold text-white">Фаъолияти имрӯз</h3>
          <div className="mt-4 space-y-3 text-sm text-zinc-400">
            <p>• 3 мизоҷи нав илова шуд</p>
            <p>• 2 SMS фиристода шуд</p>
            <p>• 1 таъмир анҷом ёфт</p>
          </div>
        </div>
      </div>
    </div>
  )
}
