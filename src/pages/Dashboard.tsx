import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import StatCard from '../components/StatCard'
import AppointmentCard from '../components/AppointmentCard'

export default function Dashboard() {
  const [stats, setStats] = useState({ clients: 0, apps: 0 })
  const [apps, setApps] = useState<any[]>([])

  if (!isSupabaseConfigured) {
    return (
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl">
        <h2 className="font-bold text-amber-900">Database танзим нашудааст</h2>
        <p className="text-sm text-amber-800 mt-2">.env файл созед: VITE_SUPABASE_URL ва VITE_SUPABASE_ANON_KEY</p>
        <div className="mt-4 text-xs font-mono bg-black text-white p-3 rounded-lg">
          VITE_SUPABASE_URL=https://xxx.supabase.co<br/>
          VITE_SUPABASE_ANON_KEY=eyJxxx...
        </div>
      </div>
    )
  }

  useEffect(() => {
    (async () => {
      const { count: c1 } = await supabase.from('clients').select('*', { count: 'exact', head: true })
      const { count: c2 } = await supabase.from('appointments').select('*', { count: 'exact', head: true })
      const { data } = await supabase.from('appointments').select('*, clients(*), services(*)').limit(10).order('date', {ascending: true})
      setStats({ clients: c1||0, apps: c2||0 })
      setApps(data||[])
    })()
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard - Хуш омадед!</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Миҷозон" value={stats.clients} sub="Ҳамагӣ" />
        <StatCard title="Сабтҳо" value={stats.apps} sub="Ин моҳ" />
        <StatCard title="Даромад" value="0 TJS" sub="Имрӯз" />
        <StatCard title="SMS" value="0" sub="Фиристода" />
      </div>
      <div className="grid gap-3">
        {apps.map((a,i) => <AppointmentCard key={i} app={a} />)}
        {apps.length===0 && <div className="text-center text-slate-400 py-10">Маълумот нест</div>}
      </div>
    </div>
  )
}
