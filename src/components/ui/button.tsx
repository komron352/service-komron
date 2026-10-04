import React from 'react'
export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`px-4 py-2 bg-black text-white rounded-lg disabled:opacity-50 ${className}`} {...props} />
}
