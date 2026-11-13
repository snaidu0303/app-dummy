import React, { useState } from 'react'
import { Sparkles, ArrowRight, Play, Copy, CheckCircle2 } from 'lucide-react'
import { InteractiveTerminal } from './InteractiveTerminal'
import { useToast } from '../context/ToastContext'

interface HeroProps {
  onOpenAuth: (mode: 'signup') => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuth }) => {
  const { addToast } = useToast()
  const [copied, setCopied] = useState(false)

  const copyCommand = () => {
    navigator.clipboard.writeText('npm create aurora-app@latest')
    setCopied(true)
    addToast({
      title: "Command copied!",
      message: "'npm create aurora-app@latest' copied to clipboard.",
      type: "success"
    })
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="hero-section">
      <div className="hero-badge-wrapper">
        <div className="hero-badge">
          <Sparkles className="w-4 h-4 text-amber-400 mr-2" />
          <span>Aurora 2.4 Released</span>
          <span className="badge-separator">•</span>
          <span className="badge-highlight">Rust-Powered AST Compiler</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1 opacity-70" />
        </div>
      </div>

      <h1 className="hero-title">
        Build, Ship & Scale <br />
        <span className="gradient-text">Without Infrastructure Friction</span>
      </h1>

      <p className="hero-description">
        The complete developer platform offering ephemeral cloud workspaces, automated zero-config
        CI/CD, and global edge hosting. Purpose-built for modern React and TypeScript teams.
      </p>

      <div className="hero-cta-group">
        <button
          onClick={() => onOpenAuth('signup')}
          className="btn-primary btn-large"
        >
          <span>Start Building Free</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        <a href="#simulator" className="btn-secondary btn-large">
          <Play className="w-4 h-4 text-purple-400 fill-purple-400" />
          <span>Try Interactive CLI</span>
        </a>
      </div>

      {/* Quick CLI copy banner */}
      <div className="cli-box">
        <div className="cli-prompt">
          <span className="cli-symbol">$</span>
          <code>npm create aurora-app@latest</code>
        </div>
        <button
          onClick={copyCommand}
          className="cli-copy-btn"
          title="Copy command to clipboard"
          aria-label="Copy CLI install command"
        >
          {copied ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-medium text-xs">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span className="text-xs">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Interactive Terminal Sandbox */}
      <div className="hero-preview-container">
        <InteractiveTerminal />
      </div>

      {/* Social Proof Strip */}
      <div className="social-proof">
        <p className="social-proof-heading">TRUSTED BY OVER 45,000 BUILDERS AT INNOVATIVE COMPANIES</p>
        <div className="logos-row">
          <span className="company-logo">VERTEX.IO</span>
          <span className="company-logo">NEXUSTECH</span>
          <span className="company-logo">PULSECLOUD</span>
          <span className="company-logo">QUANTUMLAB</span>
          <span className="company-logo">HYPERSCALE</span>
        </div>
      </div>
    </section>
  )
}
