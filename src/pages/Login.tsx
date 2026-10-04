import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

export default function Login() {
  const { signIn } = useAuth()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!name.trim() || !password.trim()) {
      setError('Лутфан ҳамаи майдонҳоро пур кунед')
      return
    }
    setLoading(true)
    try {
      await signIn(name, password)
    } catch (err: any) {
      const msg = err?.message || ''
      if (msg.toLowerCase().includes('invalid login') || msg.toLowerCase().includes('invalid')) setError('Парол нодуруст')
      else if (msg.includes('Ном нодуруст')) setError('Ном нодуруст - танҳо IMRAN')
      else setError(msg || 'Хатогӣ дар вуруд')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#08080a] px-4">
      <div className="w-full max-w-[380px] bg-[#111113] border border-[#1e1e20] rounded-[20px] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.6)]">
        <div className="mb-8 text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-[#d4a017]/10 flex items-center justify-center text-[#d4a017] font-bold text-lg">I</div>
          <h1 className="mt-4 text-[22px] font-semibold text-white tracking-tight">IMRAN SERVICE</h1>
          <p className="mt-1 text-[13px] text-[#8a8a8e]">Воридшавӣ ба CRM</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-[12px] text-[#a1a1a6] mb-1.5 block">Ном</label>
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="IMRAN" className="w-full h-11 bg-[#08080a] border border-[#232326] rounded-xl px-4 text-white text-[14px] placeholder:text-[#4a4a4e] focus:outline-none focus:border-[#d4a017]/50 focus:ring-1 focus:ring-[#d4a017]/30" />
          </div>
          <div>
            <label className="text-[12px] text-[#a1a1a6] mb-1.5 block">Парол</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" className="w-full h-11 bg-[#08080a] border border-[#232326] rounded-xl px-4 text-white text-[14px] placeholder:text-[#4a4a4e] focus:outline-none focus:border-[#d4a017]/50 focus:ring-1 focus:ring-[#d4a017]/30" />
          </div>
          {error && <div className="text-[12px] text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{error}</div>}
          <button disabled={loading} className="w-full h-11 rounded-xl bg-[#d4a017] text-black font-semibold text-[14px] hover:bg-[#e0b12a] disabled:opacity-60 transition-colors">{loading ? 'Санҷиш...' : 'Ворид шудан'}</button>
        </form>
      </div>
    </div>
  )
}
