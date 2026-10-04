import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const nav = useNavigate()

  const handle = async (e:React.FormEvent)=>{
    e.preventDefault()
    setLoading(true); setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if(error) setError(error.message)
    else nav('/')
  }

  return (
    <div className="min-h-screen bg-[#08080a] flex items-center justify-center p-4">
      <div className="w-full max-w-[400px] rounded-[24px] border border-zinc-800 bg-[#111113] p-8">
        <h1 className="text-2xl font-black text-[#d4a017]">IMRAN SERVICE</h1>
        <p className="text-zinc-500 text-sm mt-1">Воридшавӣ ба CRM</p>
        <form onSubmit={handle} className="mt-8 space-y-4">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full bg-[#08080a] border border-zinc-800 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#d4a017] text-white" required />
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Парол" className="w-full bg-[#08080a] border border-zinc-800 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#d4a017] text-white" required />
          {error && <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 p-2 rounded-lg">{error}</p>}
          <button disabled={loading} className="w-full bg-[#d4a017] text-black font-semibold py-3 rounded-xl text-sm disabled:opacity-50">{loading ? 'Санҷиш...' : 'Ворид шудан'}</button>
        </form>
      </div>
    </div>
  )
}
