import { useEffect, useState } from 'react'
import { api } from '../services/api'
import AppointmentCard from '../components/AppointmentCard'

export default function CalendarPage(){
  const [appts, setAppts] = useState<any[]>([])
  useEffect(()=>{ api.getAppointments().then(setAppts).catch(()=>{}) },[])
  const grouped: Record<string, any[]> = {}
  appts.forEach(a=>{ const d = new Date(a.date).toDateString(); if(!grouped[d]) grouped[d]=[]; grouped[d].push(a) })

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Тақвим</h2>
      <div className="space-y-6">
        {Object.entries(grouped).map(([date, list])=>(
          <div key={date}>
            <p className="text-[#d4a017] text-sm font-semibold mb-3">{date}</p>
            <div className="grid gap-3">{list.map((a:any)=><AppointmentCard key={a.id} service={a.service} date={a.date} status={a.status} price={a.price} />)}</div>
          </div>
        ))}
        {appts.length===0 && <p className="text-zinc-500">Ҳеҷ сабт нест</p>}
      </div>
    </div>
  )
}
