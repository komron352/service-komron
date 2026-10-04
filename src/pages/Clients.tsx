import { useState } from 'react'
import ClientForm from '../components/ClientForm.tsx'
export default function Clients() {
  const [open, setOpen] = useState(false)
  return <div><div className="flex justify-between"><h1 className="text-xl font-semibold">Clients</h1><button onClick={()=>setOpen(!open)} className="bg-black text-white px-3 py-1 rounded text-sm">Add</button></div>{open && <div className="mt-4"><ClientForm onClose={()=>setOpen(false)} /></div>}</div>
}