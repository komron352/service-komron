import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase.ts'
type AuthCtx = { user: any; loading: boolean; signOut: () => Promise<void> }
const Ctx = createContext<AuthCtx>({ user: null, loading: true, signOut: async () => {} })
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    supabase.auth.getSession().then(({ data }: any) => { setUser(data.session?.user ?? null); setLoading(false) })
    const { data: sub } = supabase.auth.onAuthStateChange((_e: any, sess: any) => setUser(sess?.user ?? null))
    return () => sub.subscription.unsubscribe()
  }, [])
  const signOut = async () => { await supabase.auth.signOut() }
  return <Ctx.Provider value={{ user, loading, signOut }}>{children}</Ctx.Provider>
}
export const useAuth = () => useContext(Ctx)