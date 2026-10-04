import { supabase } from '../lib/supabase'

export type Client = { id:string, name:string, phone:string, car_model:string, created_at:string }
export type Appointment = { id:string, client_id:string, service:string, date:string, status:string, price:number }

export const api = {
  async getClients(): Promise<Client[]> {
    const { data, error } = await supabase.from('clients').select('*').order('created_at', { ascending:false })
    if(error) throw error
    return data || []
  },
  async createClient(payload: Partial<Client>){
    const { data, error } = await supabase.from('clients').insert(payload).select().single()
    if(error) throw error
    return data
  },
  async getAppointments(): Promise<Appointment[]>{
    const { data, error } = await supabase.from('appointments').select('*').order('date', { ascending:true })
    if(error) throw error
    return data || []
  },
  async getStats(){
    const [clients, appts] = await Promise.all([
      supabase.from('clients').select('id', { count:'exact', head:true }),
      supabase.from('appointments').select('id, price, status', { count:'exact' })
    ])
    return {
      totalClients: clients.count || 0,
      totalAppointments: appts.count || 0,
      revenue: (appts.data || []).reduce((s,a:any)=> s + (a.price||0), 0)
    }
  }
}
