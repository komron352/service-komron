export default function StatCard({ title, value, sub }: { title:string, value:string, sub?:string }){
  return <div className="bg-[#111113] border border-[#1e1e20] rounded-2xl p-5"><div className="text-[11px] tracking-widest text-[#7a7a80] uppercase">{title}</div><div className="mt-2 text-[26px] font-semibold text-white">{value}</div>{sub && <div className="mt-1 text-[12px] text-[#8a8a8e]">{sub}</div>}</div>
}
