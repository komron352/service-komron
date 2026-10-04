import React from 'react'
export function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`border rounded-xl p-4 bg-white shadow-sm ${className}`}>{children}</div>
}
