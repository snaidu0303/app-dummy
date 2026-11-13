import React, { useState, useEffect } from 'react'
import { Zap, Menu, X, ArrowRight } from 'lucide-react'

interface NavbarProps {
  onOpenAuth: (mode: 'signin' | 'signup') => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="brand-logo" aria-label="Aurora Home">
          <div className="logo-icon">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="brand-name">
            Aurora<span className="brand-dot">.dev</span>
          </span>
          <span className="nav-version-tag">v1.2</span>
        </a>

        <nav className="nav-desktop">
          <a href="#features" className="nav-link">Features</a>
          <a href="#simulator" className="nav-link">CLI Sandbox</a>
          <a href="#calculator" className="nav-link">ROI Calculator</a>
          <a href="#architecture" className="nav-link">Architecture</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        <div className="nav-actions">
          <button
            onClick={() => onOpenAuth('signin')}
            className="btn-ghost"
          >
            Sign In
          </button>
          <button
            onClick={() => onOpenAuth('signup')}
            className="btn-primary"
          >
            <span>Start Free</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#simulator" onClick={() => setMobileMenuOpen(false)}>CLI Sandbox</a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)}>ROI Calculator</a>
          <a href="#architecture" onClick={() => setMobileMenuOpen(false)}>Architecture</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <div className="mobile-actions">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenAuth('signin')
              }}
              className="btn-ghost w-full text-center"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenAuth('signup')
              }}
              className="btn-primary w-full text-center"
            >
              Start Free
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
