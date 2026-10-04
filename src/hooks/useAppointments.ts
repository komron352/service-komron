import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
export function useAppointments() {
  const [data, setData] = useState<any[]>([])
  useEffect(()=>{ supabase.from('appointments').select('*, clients(*), services(*)').then(r=>setData(r.data||[])) }, [])
  return data
}
