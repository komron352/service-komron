import { useState } from 'react'
import ClientForm from '../components/ClientForm'
export default function Clients(){
  const [open,setOpen]=useState(false)
  return <div><div className="flex justify-between items-center"><h1 className="text-[20px] text-white font-semibold">Мизоҷон</h1><button onClick={()=>setOpen(true)} className="h-9 px-4 rounded-xl bg-[#d4a017] text-black text-[13px] font-semibold">+ Нав</button></div><div className="mt-6 bg-[#111113] border border-[#1e1e20] rounded-2xl divide-y divide-[#1e1e20]">{[1,2,3].map(i=><div key={i} className="p-4 flex justify-between text-[13px] text-white"><span>Мизоҷ {i}</span><span className="text-[#7a7a80]">+992 90 000 00{i}</span></div>)}</div>{open && <ClientForm onClose={()=>setOpen(false)} />}</div>
}
