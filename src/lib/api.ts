import { supabase } from './supabase'

export const api = {
  async getClients() {
    const { data, error } = await supabase.from('clients').select('*').order('created_at', {ascending: false})
    if (error) throw error
    return data
  },
  async getAppointments() {
    const { data, error } = await supabase.from('appointments').select('*, clients(*), services(*)').order('date', {ascending: true})
    if (error) throw error
    return data
  },
  async getServices() {
    const { data, error } = await supabase.from('services').select('*')
    if (error) throw error
    return data
  }
}
