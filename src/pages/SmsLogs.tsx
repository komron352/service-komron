import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function SmsLogs() {
  const [logs, setLogs] = useState<any[]>([])
  useEffect(()=>{ supabase.from('sms_logs').select('*').order('created_at', {ascending:false}).then(r=>setLogs(r.data||[])) }, [])
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">SMS Лог</h1>
      <div className="bg-white rounded-2xl border">
        {logs.map((l,i)=><div key={i} className="p-4 border-b text-sm flex justify-between"><span>{l.phone}</span><span className="text-slate-500">{l.message?.slice(0,40)}</span></div>)}
        {logs.length===0 && <div className="p-10 text-center text-slate-400">Лог нест</div>}
      </div>
    </div>
  )
}
