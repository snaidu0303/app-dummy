import React, { useState } from 'react'
import { GitCommit, Cpu, Network, Globe2, CheckCircle2 } from 'lucide-react'

export const ArchitectureFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0)

  const steps = [
    {
      stepNumber: '01',
      title: 'Git Commit & Push',
      icon: <GitCommit className="w-5 h-5" />,
      time: '0.1s',
      headline: 'Instant Webhook Handshake',
      details: 'Push to GitHub, GitLab, or Bitbucket. Aurora verifies cryptographic webhook signatures and initializes an isolated cloud worker in 120ms.',
      tech: ['Git Webhook', 'SHA-256 Auth', 'Ephemeral Runner']
    },
    {
      stepNumber: '02',
      title: 'Parallel Edge Build',
      icon: <Cpu className="w-5 h-5" />,
      time: '0.8s',
      headline: 'Oxc AST Compiler & Tree-shaking',
      details: 'TypeScript code is parsed using native Rust-based AST transpilers. Assets are Brotli compressed with automated dead-code elimination.',
      tech: ['Rust AST', 'Brotli 11', 'Zero-config Bundler']
    },
    {
      stepNumber: '03',
      title: 'Anycast Sync',
      icon: <Network className="w-5 h-5" />,
      time: '0.4s',
      headline: '320+ Edge Nodes Broadcast',
      details: 'Compiled isolate workers and static chunks are synchronized across Anycast BGP edge routers worldwide. DNS propagation is instantaneous.',
      tech: ['Anycast BGP', 'HTTP/3 Quic', 'Global KV Sync']
    },
    {
      stepNumber: '04',
      title: 'Live Global Preview',
      icon: <Globe2 className="w-5 h-5" />,
      time: '< 20ms',
      headline: 'Atomic Zero-Downtime Serving',
      details: 'Every preview URL is backed by TLS 1.3 certificates, DDoS rate limiting, and multiplayer DOM comment sync for real-time collaboration.',
      tech: ['TLS 1.3', 'Sub-20ms TTFB', 'Live DOM Annotations']
    }
  ]

  return (
    <section id="architecture" className="section-padding">
      <div className="section-header">
        <div className="section-badge">How It Works</div>
        <h2 className="section-title">The High-Velocity Pipeline</h2>
        <p className="section-subtitle">
          See the journey from local source code to sub-20ms global execution in under 2 seconds.
        </p>
      </div>

      <div className="arch-flow-container">
        {/* Step Navigation Bar */}
        <div className="arch-steps-nav">
          {steps.map((st, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`arch-step-btn ${activeStep === idx ? 'arch-step-btn-active' : ''}`}
            >
              <div className="arch-step-number">{st.stepNumber}</div>
              <div className="arch-step-info">
                <div className="arch-step-title">{st.title}</div>
                <div className="arch-step-time">{st.time}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div className="arch-showcase-panel">
          <div className="arch-panel-top">
            <div className="flex items-center gap-2">
              <span className="arch-panel-icon">{steps[activeStep].icon}</span>
              <span className="arch-panel-time text-emerald-400 font-mono font-bold">
                Latency: {steps[activeStep].time}
              </span>
            </div>
            <div className="arch-panel-badge">Step {steps[activeStep].stepNumber} of 04</div>
          </div>

          <h3 className="arch-panel-headline">{steps[activeStep].headline}</h3>
          <p className="arch-panel-desc">{steps[activeStep].details}</p>

          <div className="arch-panel-tags">
            <span className="text-xs text-slate-400 mr-2 font-medium">Core Stack:</span>
            {steps[activeStep].tech.map((item, tIdx) => (
              <span key={tIdx} className="tech-badge">
                <CheckCircle2 className="w-3 h-3 text-cyan-400 mr-1" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
