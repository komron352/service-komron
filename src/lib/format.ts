export const formatSomoni = (n: number) => 
  new Intl.NumberFormat('tg-TJ', { style: 'currency', currency: 'TJS' }).format(n)

export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString('tg-TJ')
