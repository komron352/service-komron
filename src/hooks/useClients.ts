import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
export function useClients() {
  const [clients, setClients] = useState<any[]>([])
  useEffect(()=>{ supabase.from('clients').select('*').then(r=>setClients(r.data||[])) }, [])
  return clients
}
