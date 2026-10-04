import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Services() {
  const [list, setList] = useState<any[]>([])
  useEffect(()=>{ supabase.from('services').select('*').then(r=>setList(r.data||[])) }, [])
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Хизматрасониҳо</h1>
      <div className="grid md:grid-cols-3 gap-3">
        {list.map(s=>(
          <div key={s.id} className="bg-white p-5 rounded-xl border"><div className="font-medium">{s.name}</div><div className="text-slate-500 text-sm mt-1">{s.price} TJS • {s.duration} дақ</div></div>
        ))}
      </div>
      {list.length===0 && <div className="text-slate-400">Хизматрасони нест - аз Supabase илова кунед</div>}
    </div>
  )
}
