import { useEffect, useState } from 'react'
import { api } from '../services/api'
import ClientForm from '../components/ClientForm'
import { Search, Plus } from 'lucide-react'

export default function Clients(){
  const [clients, setClients] = useState<any[]>([])
  const [showForm, setShowForm] = useState(false)
  const [q, setQ] = useState('')

  const load = ()=> api.getClients().then(setClients).catch(()=>{})
  useEffect(()=>{ load() },[])

  const filtered = clients.filter(c=> c.name.toLowerCase().includes(q.toLowerCase()) || c.phone.includes(q))

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Мизоҷон</h2>
        <button onClick={()=>setShowForm(true)} className="flex items-center gap-2 bg-[#d4a017] text-black px-4 py-2 rounded-xl text-sm font-semibold"><Plus size={16}/> Нав</button>
      </div>
      <div className="relative">
        <Search size={16} className="absolute left-3 top-3 text-zinc-500" />
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ҷустуҷӯи мизоҷ..." className="w-full bg-[#111113] border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white outline-none focus:border-[#d4a017]" />
      </div>
      {showForm && <ClientForm onSubmit={async (d)=>{ await api.createClient(d); setShowForm(false); load() }} onCancel={()=>setShowForm(false)} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(c=>(
          <div key={c.id} className="rounded-2xl border border-zinc-800 bg-[#111113] p-5">
            <p className="font-semibold text-white">{c.name}</p>
            <p className="text-zinc-500 text-sm mt-1">{c.phone}</p>
            <p className="text-zinc-400 text-xs mt-2">{c.car_model || 'Мошин номаълум'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
