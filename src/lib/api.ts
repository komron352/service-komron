import { supabase } from './supabase'
export const getClients = async()=>{ const {data}=await supabase.from('clients').select('*').limit(50); return data||[] }
export const getAppointments = async()=>{ const {data}=await supabase.from('appointments').select('*').limit(50); return data||[] }
