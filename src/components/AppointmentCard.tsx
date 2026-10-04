import { Appointment } from '../types'
export default function AppointmentCard({ app }: { app: Appointment }) {
  return (
    <div className="bg-white p-4 rounded-xl border flex justify-between">
      <div>
        <div className="font-medium">{app.clients?.name || 'Миҷоз'}</div>
        <div className="text-sm text-slate-500">{app.date} • {app.time}</div>
      </div>
      <div className="text-sm px-2 py-1 bg-slate-100 rounded-full h-fit">{app.status}</div>
    </div>
  )
}
