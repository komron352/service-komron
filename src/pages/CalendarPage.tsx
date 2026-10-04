export default function CalendarPage(){
  return <div><h1 className="text-[20px] text-white font-semibold">Тақвим</h1><div className="mt-6 grid grid-cols-7 gap-2">{Array.from({length:30}).map((_,i)=><div key={i} className="h-24 bg-[#111113] border border-[#1e1e20] rounded-xl p-2 text-[11px] text-[#6a6a70]">{i+1}</div>)}</div></div>
}
