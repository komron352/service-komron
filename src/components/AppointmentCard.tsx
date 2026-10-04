export default function AppointmentCard({a}:{a:any}){
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4 flex justify-between">
      <div>
        <div className="font-medium text-white">{a.client_name || 'Мизоҷ'}</div>
        <div className="text-xs text-zinc-500">{a.service} • {a.time}</div>
      </div>
      <div className={`text-xs px-2 py-1 rounded-full h-fit ${a.status==='done'?'bg-green-500/20 text-green-400':'bg-[#d4a017]/20 text-[#d4a017]'}`}>{a.status}</div>
    </div>
  )
}
