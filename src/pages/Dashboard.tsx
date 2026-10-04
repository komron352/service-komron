import StatCard from '../components/StatCard'
import AppointmentCard from '../components/AppointmentCard'
export default function Dashboard(){
  return <div className="space-y-6"><h1 className="text-[22px] font-semibold text-white">Dashboard</h1><div className="grid grid-cols-3 gap-4"><StatCard title="Мизоҷон" value="128" sub="+12 ин ҳафта"/><StatCard title="Сабтҳо" value="34" sub="имрӯз"/><StatCard title="Даромад" value="4 200 TJS" sub="ин моҳ"/></div><div className="grid grid-cols-2 gap-4"><AppointmentCard time="10:00" client="Алишер" service="Таъмири телефон"/><AppointmentCard time="11:30" client="Мадина" service="Насби шиша"/></div></div>
}
