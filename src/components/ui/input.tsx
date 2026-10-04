import React from 'react'
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2" {...props} />
}
