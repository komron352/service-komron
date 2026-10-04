import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import ClientForm from '../components/ClientForm'

export default function Clients() {
  const [list, setList] = useState<any[]>([])
  const load = async () => {
    const { data } = await supabase.from('clients').select('*').order('created_at', {ascending: false})
    setList(data||[])
  }
  useEffect(()=>{ load() }, [])
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-bold">Миҷозон</h1>
      <ClientForm onDone={load} />
      <div className="space-y-2">
        {list.map(c => (
          <div key={c.id} className="bg-white p-4 rounded-xl border flex justify-between">
            <span className="font-medium">{c.name}</span><span className="text-slate-500">{c.phone}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
