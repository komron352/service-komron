import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function ClientForm({ onDone }: { onDone: ()=>void }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const save = async () => {
    const { error } = await supabase.from('clients').insert({ name, phone })
    if (!error) { setName(''); setPhone(''); onDone() }
  }
  return (
    <div className="bg-white p-4 rounded-xl border space-y-3">
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Ном" className="w-full border rounded-lg px-3 py-2" />
      <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Телефон" className="w-full border rounded-lg px-3 py-2" />
      <button onClick={save} className="w-full bg-black text-white py-2 rounded-lg">Сабт</button>
    </div>
  )
}
