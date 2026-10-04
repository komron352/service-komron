export default function ServicesPage(){
  return <div><h1 className="text-[20px] text-white font-semibold">Хизматрасониҳо</h1><div className="mt-6 grid grid-cols-3 gap-4">{['Таъмир','Насб','Тозакунӣ'].map(s=><div key={s} className="bg-[#111113] border border-[#1e1e20] rounded-2xl p-5 text-white">{s}</div>)}</div></div>
}
