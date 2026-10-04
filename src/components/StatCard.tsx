export default function StatCard({ title, value, sub }: { title: string, value: string|number, sub?: string }) {
  return (
    <div className="bg-white p-5 rounded-2xl border shadow-sm">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
      {sub && <div className="text-xs text-slate-400 mt-1">{sub}</div>}
    </div>
  )
}
