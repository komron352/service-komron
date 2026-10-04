import { useState } from 'react'
export default function ClientForm({onSave}:{onSave:(d:any)=>void}){
  const [form,setForm]=useState({name:'',phone:'',car:''})
  return (
    <div className="space-y-3 p-4 border border-zinc-800 rounded-xl bg-zinc-900">
      <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Ном" className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white"/>
      <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Телефон" className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white"/>
      <input value={form.car} onChange={e=>setForm({...form,car:e.target.value})} placeholder="Мошин" className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white"/>
      <button onClick={()=>onSave(form)} className="w-full bg-[#d4a017] text-black py-2 rounded font-medium">Сабт</button>
    </div>
  )
}
