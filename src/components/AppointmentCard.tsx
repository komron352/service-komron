import { formatDate } from '../lib/utils'

type Props = { service:string, date:string, status:string, price:number, clientName?:string }

export default function AppointmentCard({service, date, status, price, clientName}:Props){
  const color = status==='done' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : status==='pending' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-zinc-800 text-zinc-300'
  return (
    <div className="rounded-xl border border-zinc-800 bg-[#111113] p-4 flex justify-between items-center">
      <div>
        <p className="font-medium text-white">{service}</p>
        <p className="text-zinc-500 text-xs mt-1">{clientName ? clientName+' • ' : ''}{formatDate(date)}</p>
      </div>
      <div className="text-right">
        <span className={`text-[10px] px-2 py-1 rounded-full border ${color}`}>{status}</span>
        <p className="text-sm font-semibold mt-1 text-[#d4a017]">{price} TJS</p>
      </div>
    </div>
  )
}
