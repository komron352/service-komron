import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function CalendarPage() {
  const [apps, setApps] = useState<any[]>([])
  useEffect(()=>{
    supabase.from('appointments').select('*, clients(*), services(*)').order('date').then(r=>setApps(r.data||[]))
  }, [])
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Тақвим</h1>
      <div className="bg-white rounded-2xl border overflow-hidden">
        {apps.map((a,i)=>(
          <div key={i} className="p-4 border-b flex justify-between"><span>{a.date} {a.time}</span><span>{a.clients?.name}</span></div>
        ))}
        {apps.length===0 && <div className="p-10 text-center text-slate-400">Сабт нест</div>}
      </div>
    </div>
  )
}
