export default function SettingsPage(){
  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-bold text-white">Танзимот</h2>
      <div className="rounded-2xl border border-zinc-800 bg-[#111113] p-6 space-y-6">
        <div>
          <label className="text-zinc-400 text-xs">Номи ширкат</label>
          <input defaultValue="IMRAN SERVICE" className="mt-2 w-full bg-[#08080a] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white outline-none" />
        </div>
        <div>
          <label className="text-zinc-400 text-xs">Телефон</label>
          <input defaultValue="+992 900 123 456" className="mt-2 w-full bg-[#08080a] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white outline-none" />
        </div>
        <div>
          <label className="text-zinc-400 text-xs">Суроға</label>
          <input defaultValue="Душанбе, н. Фирдавсӣ" className="mt-2 w-full bg-[#08080a] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white outline-none" />
        </div>
        <button className="bg-[#d4a017] text-black font-semibold px-5 py-2.5 rounded-xl text-sm">Захира кардан</button>
      </div>
    </div>
  )
}
