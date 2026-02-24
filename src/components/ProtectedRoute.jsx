import { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { getSession, onAuthStateChange, supabase } from '../lib/supabase'

const DEMO_MODE = false // Set to false for production

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Si está en modo demo, permitir acceso directo
    if (DEMO_MODE || !supabase) {
      setAuthenticated(true)
      setLoading(false)
      return
    }

    // Check initial session
    const checkSession = async () => {
      const { data: { session } } = await getSession()
      setAuthenticated(!!session)
      setLoading(false)
    }
    
    checkSession()

    // Listen for auth changes
    const { data: { subscription } } = onAuthStateChange((event, session) => {
      setAuthenticated(!!session)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-orange-200 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-neutral-400">Verificando acceso...</p>
        </div>
      </div>
    )
  }

  if (!authenticated) {
    return <Navigate to="/admin" state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoute

