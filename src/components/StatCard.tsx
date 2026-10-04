export default function StatCard({title, value, sub}:{title:string,value:string,sub?:string}){
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
      <div className="text-xs uppercase tracking-widest text-zinc-500">{title}</div>
      <div className="text-2xl font-bold mt-2 text-white">{value}</div>
      {sub && <div className="text-xs text-zinc-500 mt-1">{sub}</div>}
    </div>
  )
}
