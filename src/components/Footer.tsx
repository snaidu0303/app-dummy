import React, { useState } from 'react'
import { Zap, Github, Twitter, Linkedin } from 'lucide-react'
import { useToast } from '../context/ToastContext'

export const Footer: React.FC = () => {
  const { addToast } = useToast()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      addToast({
        title: "Subscribed to Aurora updates!",
        message: "You'll receive our monthly changelog and performance digests.",
        type: "success"
      })
      setTimeout(() => {
        setSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <footer className="footer">
      <div className="footer-top-banner">
        <div className="cta-banner-content">
          <h2 className="cta-banner-title">
            Ready to Supercharge Your Developer Velocity?
          </h2>
          <p className="cta-banner-desc">
            Deploy your first TypeScript React app to 320+ edge regions in minutes.
            No credit card required.
          </p>

          <form onSubmit={handleSubscribe} className="cta-form">
            <input
              type="email"
              placeholder="Enter your work email for changelog & updates..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="cta-input"
            />
            <button type="submit" className="btn-primary cta-submit">
              {submitted ? "Subscribed! 🎉" : "Stay Updated"}
            </button>
          </form>
          <div className="cta-guarantee">
            Free 14-day Pro trial • No credit card required • Cancel anytime
          </div>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-brand">
          <div className="brand-logo mb-3">
            <div className="logo-icon">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="brand-name">Aurora<span className="brand-dot">.dev</span></span>
          </div>
          <p className="footer-tagline">
            Next-generation ephemeral cloud environments, zero-friction CI/CD, and edge-native deployments.
          </p>
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <div className="footer-col-title">Platform</div>
            <a href="#features">Features</a>
            <a href="#simulator">CLI Sandbox</a>
            <a href="#calculator">ROI Calculator</a>
            <a href="#architecture">Architecture</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Resources</div>
            <a href="#docs">Documentation</a>
            <a href="#api">API Reference</a>
            <a href="#examples">Templates & Starters</a>
            <a href="#community">Community Discord</a>
            <a href="#changelog">Release Notes</a>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Company</div>
            <a href="#about">About Aurora</a>
            <a href="#careers">Careers (We're Hiring!)</a>
            <a href="#security">Security & Trust</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© {new Date().getFullYear()} Aurora Cloud Platform, Inc. All rights reserved.</div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            All Systems Operational (99.99%)
          </span>
        </div>
      </div>
    </footer>
  )
}
