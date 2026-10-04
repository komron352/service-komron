import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading, isConfigured } = useAuth()
  if (loading) return <div className="p-8">Боркунӣ...</div>
  if (!isConfigured) return <Navigate to="/login" replace />
  if (!user) return <Navigate to="/login" replace />
  return <>{children}</>
}
