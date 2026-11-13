import React, { useState, useEffect } from 'react'
import { X, Github, Mail, Lock, User, ArrowRight, ShieldCheck } from 'lucide-react'
import { useToast } from '../context/ToastContext'

interface AuthModalProps {
  isOpen: boolean
  initialMode: 'signin' | 'signup'
  onClose: () => void
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, initialMode, onClose }) => {
  const { addToast } = useToast()
  const [mode, setMode] = useState<'signin' | 'signup' | 'demo'>(initialMode)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setMode(initialMode)
  }, [initialMode, isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      if (mode === 'signin') {
        addToast({
          title: "Welcome back!",
          message: `Signed in as ${email}. Loading workspace...`,
          type: "success"
        })
      } else if (mode === 'signup') {
        addToast({
          title: "Account created!",
          message: "Welcome to Aurora! Your 14-day Pro trial is active.",
          type: "success"
        })
      } else {
        addToast({
          title: "Demo requested!",
          message: "An enterprise solutions architect will contact you within 2 business hours.",
          type: "info"
        })
      }
      onClose()
    }, 700)
  }

  const handleSocialAuth = (provider: string) => {
    addToast({
      title: `Connecting to ${provider}...`,
      message: "Authenticating via OAuth 2.0 handshake.",
      type: "info"
    })
    setTimeout(() => {
      addToast({
        title: "Authenticated!",
        message: `Successfully connected with ${provider}.`,
        type: "success"
      })
      onClose()
    }, 800)
  }

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          <X className="w-5 h-5" />
        </button>

        <div className="modal-header">
          <div className="modal-tabs">
            <button
              className={`modal-tab ${mode === 'signin' ? 'modal-tab-active' : ''}`}
              onClick={() => setMode('signin')}
            >
              Sign In
            </button>
            <button
              className={`modal-tab ${mode === 'signup' ? 'modal-tab-active' : ''}`}
              onClick={() => setMode('signup')}
            >
              Create Account
            </button>
            <button
              className={`modal-tab ${mode === 'demo' ? 'modal-tab-active' : ''}`}
              onClick={() => setMode('demo')}
            >
              Request Demo
            </button>
          </div>
          <h2 className="modal-title">
            {mode === 'signin' && "Welcome Back to Aurora"}
            {mode === 'signup' && "Start Building with Aurora"}
            {mode === 'demo' && "Schedule an Architecture Walkthrough"}
          </h2>
          <p className="modal-subtitle">
            {mode === 'signin' && "Access your cloud environments and edge deployments."}
            {mode === 'signup' && "Get instant access to 3 cloud workspaces and edge routing."}
            {mode === 'demo' && "Custom SLA, dedicated VPC peering, and volume enterprise pricing."}
          </p>
        </div>

        {mode !== 'demo' && (
          <div className="social-login-group">
            <button
              onClick={() => handleSocialAuth('GitHub')}
              className="social-auth-btn"
              type="button"
            >
              <Github className="w-4 h-4 mr-2" />
              Continue with GitHub
            </button>
          </div>
        )}

        {mode !== 'demo' && (
          <div className="modal-divider">
            <span>or with email</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="modal-form">
          {mode === 'signup' && (
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <div className="input-with-icon">
                <User className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="Ada Lovelace"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="modal-input"
                />
              </div>
            </div>
          )}

          {mode === 'demo' && (
            <>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <div className="input-with-icon">
                  <User className="w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="Ada Lovelace"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="modal-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  required
                  placeholder="Acme Global Inc."
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="modal-input no-left-icon"
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label className="form-label">Work Email</label>
            <div className="input-with-icon">
              <Mail className="w-4 h-4 text-slate-400" />
              <input
                type="email"
                required
                placeholder="developer@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="modal-input"
              />
            </div>
          </div>

          {mode !== 'demo' && (
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-with-icon">
                <Lock className="w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="modal-input"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full mt-4"
          >
            {loading ? (
              <span>Processing...</span>
            ) : (
              <>
                <span>
                  {mode === 'signin' && "Sign In to Workspace"}
                  {mode === 'signup' && "Create Free Account"}
                  {mode === 'demo' && "Submit Demo Request"}
                </span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </button>
        </form>

        <div className="modal-footer-note">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-1" />
          <span>SOC2 Type II compliant • 256-bit TLS encrypted</span>
        </div>
      </div>
    </div>
  )
}
