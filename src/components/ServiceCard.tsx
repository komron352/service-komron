export default function ServiceCard({ title }: any) {
  return <div className="border rounded p-4 bg-white"><div className="font-medium">{title || 'Service'}</div><div className="text-sm text-zinc-500">Description</div></div>
}