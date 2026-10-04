import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

type User = { id:string, email:string } | null

const AuthContext = createContext<{user:User, loading:boolean, signOut:()=>void}>({user:null, loading:true, signOut:()=>{}})

export function AuthProvider({children}:{children:React.ReactNode}){
  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    supabase.auth.getSession().then(({data})=>{
      setUser(data.session?.user ? { id: data.session.user.id, email: data.session.user.email || '' } : null)
      setLoading(false)
    })
    const {data: listener} = supabase.auth.onAuthStateChange((_e, session)=>{
      setUser(session?.user ? { id: session.user.id, email: session.user.email || '' } : null)
    })
    return ()=> listener.subscription.unsubscribe()
  },[])

  const signOut = async ()=> { await supabase.auth.signOut(); setUser(null) }

  return <AuthContext.Provider value={{user, loading, signOut}}>{children}</AuthContext.Provider>
}

export const useAuth = ()=> useContext(AuthContext)
