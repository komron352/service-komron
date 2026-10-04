import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const { signIn, isConfigured } = useAuth()
  const nav = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const { error: err } = await signIn(email, password)
    setLoading(false)
    if (err) setError(err)
    else nav('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Komron CRM - Воридшавӣ</h1>

        {!isConfigured && (
          <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm">
            ⚠️ Supabase танзим нашудааст! <br />
            Дар Vercel: Settings → Environment Variables → VITE_SUPABASE_URL ва VITE_SUPABASE_ANON_KEY-ро санҷед, сипас Redeploy кунед.
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error.includes('Пайвастшавӣ') ? (
              <>
                <div className="font-bold mb-1">Load failed / Пайвастшавӣ нашуд</div>
                <div>{error}</div>
                <div className="mt-2 text-xs opacity-80">
                  1. Vercel Env тафтиш кунед<br />
                  2. Redeploy кунед<br />
                  3. Supabase URL дуруст аст?
                </div>
              </>
            ) : error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} type="email" required />
          <Input placeholder="Парол" value={password} onChange={e => setPassword(e.target.value)} type="password" required />
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Боркунӣ...' : 'Ворид шудан'}
          </Button>
        </form>
      </Card>
    </div>
  )
}
