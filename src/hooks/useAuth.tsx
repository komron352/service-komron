import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase, isConfigured } from '../lib/supabase'
import type { Session, User } from '@supabase/supabase-js'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  isConfigured: boolean
  signIn: (email: string, password: string) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isConfigured) {
      setLoading(false)
      return
    }
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setUser(data.session?.user ?? null)
      setLoading(false)
    }).catch(() => setLoading(false))

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, sess) => {
      setSession(sess)
      setUser(sess?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    if (!isConfigured) {
      return { error: 'Пайвастшавӣ ба Supabase нашуд. Vercel Env Variables-ро санҷед ва аз нав Deploy кунед.' }
    }
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        if (error.message.includes('Failed to fetch') || error.message.includes('Load failed')) {
          return { error: 'Пайвастшавӣ ба Supabase нашуд. Vercel Env Variables-ро санҷед ва аз нав Deploy кунед.' }
        }
        return { error: error.message }
      }
      return { error: null }
    } catch (e: any) {
      const msg = e?.message || ''
      if (msg.includes('Load failed') || msg.includes('Failed to fetch') || msg.includes('NetworkError')) {
        return { error: 'Пайвастшавӣ ба Supabase нашуд. Vercel Env Variables-ро санҷед ва аз нав Deploy кунед.' }
      }
      return { error: 'Хатогии номаълум: ' + msg }
    }
  }

  const signOut = async () => {
    if (isConfigured) await supabase.auth.signOut()
    setUser(null)
    setSession(null)
  }

  return (
    <AuthContext.Provider value={{ user, session, loading, isConfigured, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth бояд дар AuthProvider бошад')
  return ctx
}
