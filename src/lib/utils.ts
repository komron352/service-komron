export const formatPhone = (p:string)=>p
export const todayISO = ()=>new Date().toISOString().slice(0,10)
export const cn = (...c:(string|false|undefined)[])=>c.filter(Boolean).join(' ')
