import { useState } from 'react'
import { supabase } from '../lib/supabase.ts'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const nav = useNavigate()
  const submit = async (e: any) => {
    e.preventDefault()
    setErr('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setErr(error.message)
    else nav('/')
  }
  return (
    <div className="min-h-screen grid place-items-center p-4">
      <form onSubmit={submit} className="w-full max-w-sm bg-white p-6 rounded-xl border shadow-sm space-y-4">
        <h1 className="text-xl font-semibold">Login</h1>
        {err && <div className="text-sm text-red-600 bg-red-50 p-2 rounded">{err}</div>}
        <input className="w-full border rounded px-3 py-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full bg-black text-white rounded py-2">Sign in</button>
      </form>
    </div>
  )
}