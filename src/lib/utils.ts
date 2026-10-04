import { clsx } from 'clsx'

export function cn(...classes: (string | boolean | undefined)[]) {
  return clsx(classes)
}

export function formatTJS(amount: number){
  return new Intl.NumberFormat('tg-TJ', { style: 'currency', currency: 'TJS', minimumFractionDigits: 0 }).format(amount)
}

export function formatDate(d: string | Date){
  return new Date(d).toLocaleDateString('tg-TJ', { day:'2-digit', month:'short', year:'numeric' })
}
