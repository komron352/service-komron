export default function AppointmentCard({ time, client, service }: { time:string, client:string, service:string }){
  return <div className="bg-[#111113] border border-[#1e1e20] rounded-2xl p-4 flex justify-between"><div><div className="text-white text-[13px] font-medium">{client}</div><div className="text-[#7a7a80] text-[12px] mt-1">{service}</div></div><div className="text-[#d4a017] text-[12px] font-mono">{time}</div></div>
}
