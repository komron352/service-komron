import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
export function useServices() {
  const [services, setServices] = useState<any[]>([])
  useEffect(()=>{ supabase.from('services').select('*').then(r=>setServices(r.data||[])) }, [])
  return services
}
