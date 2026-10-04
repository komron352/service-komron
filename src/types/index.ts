export interface Service {
  id: string
  title: string
  customer: string
  status: 'pending' | 'in_progress' | 'completed'
  price: number
  created_at: string
}
export interface Customer {
  id: string
  name: string
  phone: string
}
