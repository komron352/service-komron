export interface Client {
  id: string
  name: string
  phone: string
  created_at: string
}
export interface Service {
  id: string
  name: string
  price: number
  duration: number
}
export interface Appointment {
  id: string
  client_id: string
  service_id: string
  date: string
  time: string
  status: 'pending' | 'confirmed' | 'done'
  clients?: Client
  services?: Service
}