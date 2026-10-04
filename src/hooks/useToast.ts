import { useState } from 'react'
export function useToast() {
  const [msg, setMsg] = useState<string | null>(null)
  const toast = (m: string) => { setMsg(m); setTimeout(() => setMsg(null), 3000) }
  return { msg, toast }
}
