import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
const Ctx = createContext<any>(null)
export function AuthProvider({children}:{children:any}){
  const [user,setUser]=useState<any>(null)
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    supabase.auth.getSession().then(({data}:any)=>{ setUser(data.session?.user||null); setLoading(false)})
    const {data:listener}=supabase.auth.onAuthStateChange((_e:any,s:any)=>setUser(s?.user||null))
    return ()=>listener.subscription.unsubscribe()
  },[])
  const signIn = async (email:string,password:string)=> supabase.auth.signInWithPassword({email,password})
  const signOut = async ()=> supabase.auth.signOut()
  return <Ctx.Provider value={{user,loading,signIn,signOut}}>{children}</Ctx.Provider>
}
export const useAuth = ()=> useContext(Ctx)
