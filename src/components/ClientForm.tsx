import { useState } from 'react'

export default function ClientForm({ onSubmit, onCancel }:{ onSubmit:(d:any)=>void, onCancel:()=>void }){
  const [form, setForm] = useState({ name:'', phone:'', car_model:'', note:'' })
  return (
    <form onSubmit={e=>{e.preventDefault(); onSubmit(form)}} className="space-y-4 bg-[#111113] border border-zinc-800 p-5 rounded-2xl">
      <h3 className="font-semibold text-white">Мизоҷи нав</h3>
      <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Ном" className="w-full bg-[#0a0a0c] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-[#d4a017]" required />
      <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="+992 ..." className="w-full bg-[#0a0a0c] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-[#d4a017]" required />
      <input value={form.car_model} onChange={e=>setForm({...form, car_model:e.target.value})} placeholder="Модели мошин" className="w-full bg-[#0a0a0c] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-[#d4a017]" />
      <textarea value={form.note} onChange={e=>setForm({...form, note:e.target.value})} placeholder="Эзоҳ" className="w-full bg-[#0a0a0c] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-[#d4a017] min-h-[80px]" />
      <div className="flex gap-2 justify-end">
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-sm">Бекор</button>
        <button type="submit" className="px-4 py-2 rounded-xl bg-[#d4a017] text-black font-semibold text-sm">Сабт</button>
      </div>
    </form>
  )
}
