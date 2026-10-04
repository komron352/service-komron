const services = [
  { name:'Ташхиси компютерӣ', price:150, time:'30 дақ' },
  { name:'Ивази равған', price:120, time:'45 дақ' },
  { name:'Таъмири муҳаррик', price:800, time:'4 соат' },
  { name:'Ходовой', price:350, time:'2 соат' },
  { name:'Электрик', price:200, time:'1 соат' },
  { name:'Шустушӯй', price:80, time:'30 дақ' },
]

export default function ServicesPage(){
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Хизматрасониҳо</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(s=>(
          <div key={s.name} className="rounded-2xl border border-zinc-800 bg-[#111113] p-5">
            <p className="font-semibold text-white">{s.name}</p>
            <p className="text-zinc-500 text-xs mt-1">{s.time}</p>
            <p className="text-[#d4a017] font-bold mt-3">{s.price} TJS</p>
          </div>
        ))}
      </div>
    </div>
  )
}
