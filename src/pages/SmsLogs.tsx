const logs = [
  { id:1, phone:'+992 900 123 456', text:'Салом! Мошини шумо омода аст.', status:'sent', date:'2024-05-10' },
  { id:2, phone:'+992 900 654 321', text:'Пагоҳ соати 10:00 қабул доред.', status:'sent', date:'2024-05-09' },
  { id:3, phone:'+992 900 111 222', text:'Ташаккур барои интихоби мо!', status:'failed', date:'2024-05-08' },
]

export default function SmsLogs(){
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">SMS Логҳо</h2>
      <div className="rounded-2xl border border-zinc-800 bg-[#111113] overflow-hidden">
        <div className="divide-y divide-zinc-800">
          {logs.map(l=>(
            <div key={l.id} className="p-4 flex justify-between items-center">
              <div>
                <p className="text-white text-sm font-medium">{l.phone}</p>
                <p className="text-zinc-500 text-xs mt-1">{l.text}</p>
              </div>
              <div className="text-right">
                <span className={`text-[10px] px-2 py-1 rounded-full ${l.status==='sent' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>{l.status}</span>
                <p className="text-zinc-600 text-[11px] mt-1">{l.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
