export default function ClientForm({ onClose }: any) {
  return (
    <div className="border rounded p-4 bg-white">
      <div className="font-medium mb-2">New Client</div>
      <input className="w-full border rounded px-3 py-2 mb-2" placeholder="Name" />
      <input className="w-full border rounded px-3 py-2 mb-2" placeholder="Phone" />
      <button onClick={onClose} className="bg-black text-white px-3 py-1 rounded text-sm">Save</button>
    </div>
  )
}