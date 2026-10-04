import { useEffect, useState } from 'react'
import { supabase, ADMIN_USERNAME, ADMIN_EMAIL, isConfigured } from '../lib/supabase'
import type { Session, User } from '@supabase/supabase-js'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setUser(data.session?.user ?? null)
      setLoading(false)
    })
    const { data: listener } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess)
      setUser(sess?.user ?? null)
      setLoading(false)
    })
    return () => listener.subscription.unsubscribe()
  }, [])

  const signIn = async (username: string, password: string) => {
    if (!isConfigured) throw new Error('Supabase танзим нашудааст')
    if (username.trim().toUpperCase() !== ADMIN_USERNAME) {
      throw new Error('Ном нодуруст')
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email: ADMIN_EMAIL,
      password,
    })
    if (error) throw error
    return data
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return { user, session, loading, signIn, signOut, isConfigured }
}
