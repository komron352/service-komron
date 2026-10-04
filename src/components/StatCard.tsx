type Props = { title:string, value:string|number, sub?:string, icon?:React.ReactNode }
export default function StatCard({title, value, sub, icon}:Props){
  return (
    <div className="rounded-2xl border border-zinc-800 bg-[#111113] p-5">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-zinc-500 text-xs uppercase tracking-widest">{title}</p>
          <p className="text-2xl font-bold mt-2 text-white">{value}</p>
          {sub && <p className="text-zinc-500 text-xs mt-1">{sub}</p>}
        </div>
        {icon && <div className="w-10 h-10 rounded-xl bg-[#d4a017]/10 text-[#d4a017] flex items-center justify-center">{icon}</div>}
      </div>
    </div>
  )
}
