import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSession, signIn } from '../../lib/supabase'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    // If already logged in, redirect to dashboard
    const checkAuth = async () => {
      const { data: { session } } = await getSession()
      if (session) {
        navigate('/admin/dashboard')
      }
    }
    checkAuth()
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { data, error: authError } = await signIn(email, password)
      
      if (authError) {
        setError(authError.message === 'Invalid login credentials' 
          ? 'Invalid email or password' 
          : authError.message)
        setLoading(false)
        return
      }

      if (data.session) {
        navigate('/admin/dashboard')
      }
    } catch (err) {
      setError('Error de conexión. Intenta de nuevo.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-200/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-200/10 mb-4">
            <Lock className="w-8 h-8 text-orange-200" />
          </div>
          <h1 className="text-3xl font-light text-neutral-100 uppercase tracking-wider">
            Admin Panel
          </h1>
          <p className="text-neutral-500 mt-2">Excel Aesthetics</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="bg-neutral-900 border border-neutral-800 p-8">
          <h2 className="text-xl font-normal text-neutral-100 mb-6 uppercase tracking-wide">
            Sign In
          </h2>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-xs font-medium mb-2 uppercase tracking-wide text-neutral-400">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                  className="w-full bg-neutral-950 border border-neutral-800 pl-12 pr-4 py-3 text-neutral-100 placeholder-neutral-600 focus:border-orange-200 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium mb-2 uppercase tracking-wide text-neutral-400">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-neutral-950 border border-neutral-800 pl-12 pr-12 py-3 text-neutral-100 placeholder-neutral-600 focus:border-orange-200 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 bg-orange-200 text-neutral-950 hover:bg-orange-300 disabled:bg-neutral-700 disabled:text-neutral-500 uppercase tracking-wider text-xs font-semibold py-4 transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin"></div>
                Verifying...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Back to site */}
        <div className="text-center mt-6">
          <a 
            href="/" 
            className="text-neutral-500 hover:text-orange-200 text-sm transition-colors"
          >
            ← Back to site
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login

