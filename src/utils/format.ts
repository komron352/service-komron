export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('tg-TJ', { style: 'currency', currency: 'TJS' }).format(price)
}
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('tg-TJ')
}
export const formatPhone = (phone: string) => phone
