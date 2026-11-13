import React, { useState } from 'react'
import {
  Zap,
  Globe,
  ShieldCheck,
  Users,
  Activity,
  Check,
  ArrowRight,
  Play,
  Sparkles,
  Layers,
  Menu,
  X,
  ChevronDown,
  Star,
  Copy,
  CheckCircle2,
  Terminal,
  Github,
  Twitter,
  Linkedin,
  Server
} from 'lucide-react'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly')
  const [activeTab, setActiveTab] = useState<'cli' | 'config' | 'metrics'>('cli')
  const [copied, setCopied] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  const copyInstallCommand = () => {
    navigator.clipboard.writeText('npm create aurora-app@latest')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true)
      setTimeout(() => setNewsletterSubmitted(false), 3000)
      setNewsletterEmail('')
    }
  }

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "Instant Spin-Up",
      description: "Ephemeral cloud environments booted in under 3 seconds. Pre-configured runtimes for React, Node, Python, and Go.",
      badge: "3.2s Avg Boot"
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      title: "Global Edge Network",
      description: "Deploy micro-frontends and full-stack APIs automatically across 320+ edge regions for sub-40ms latency.",
      badge: "320+ Edge PoPs"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: "AI-Powered Diagnostics",
      description: "Automatic root-cause detection and suggested code fixes directly in your preview deployment terminals.",
      badge: "Smart Assist"
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      title: "Multiplayer Collaboration",
      description: "Share live preview environments, debug together in real-time, and leave contextual comments right on UI elements.",
      badge: "Real-time Sync"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-rose-400" />,
      title: "Zero-Trust Security",
      description: "Encrypted environment variables, automated secret rotation, SOC2 Type II compliance, and strict RBAC controls.",
      badge: "SOC2 Certified"
    },
    {
      icon: <Activity className="w-6 h-6 text-blue-400" />,
      title: "Unified Observability",
      description: "Continuous telemetry, distributed request tracing, and live streaming console logs without installing third-party agents.",
      badge: "Zero-overhead"
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      description: "Ideal for individual developers and hobby projects.",
      price: billingCycle === 'yearly' ? '$0' : '$0',
      period: 'forever',
      highlighted: false,
      ctaText: "Get Started Free",
      features: [
        "Up to 3 active cloud workspaces",
        "Community support & Discord access",
        "Automatic HTTPS & custom subdomains",
        "5GB fast NVMe workspace storage",
        "100 deployment minutes / month"
      ]
    },
    {
      name: "Pro Team",
      description: "For fast-moving startups and product teams needing scale.",
      price: billingCycle === 'yearly' ? '$24' : '$29',
      period: 'per user / month',
      badge: "Most Popular",
      highlighted: true,
      ctaText: "Start 14-Day Free Trial",
      features: [
        "Unlimited cloud workspaces",
        "Global edge routing & CDN caching",
        "AI code debugger & trace assistant",
        "Team multiplayer & live session sharing",
        "50GB NVMe storage & priority pipelines",
        "Priority 24/7 Slack & email support"
      ]
    },
    {
      name: "Enterprise",
      description: "Dedicated infrastructure, compliance, and custom SLAs.",
      price: billingCycle === 'yearly' ? '$89' : '$99',
      period: 'per user / month',
      highlighted: false,
      ctaText: "Talk to Sales",
      features: [
        "Custom dedicated VPC deployment",
        "SSO / SAML 2.0 & Okta integration",
        "99.99% uptime SLA guarantee",
        "Unlimited team seats & audit logs",
        "Custom compliance reports & SOC2",
        "Dedicated technical account manager"
      ]
    }
  ]

  const faqs = [
    {
      q: "How does Aurora differ from local development or Docker?",
      a: "Aurora provides instant, identical cloud dev environments accessible from any browser or IDE. No more 'works on my machine' bugs, endless dependency conflicts, or battery-draining local container overhead."
    },
    {
      q: "Can I connect my existing GitHub or GitLab repositories?",
      a: "Yes! Connect your GitHub, GitLab, or Bitbucket account with one click. Aurora automatically detects your project stack, installs packages, and launches preview builds upon each push or pull request."
    },
    {
      q: "Does Aurora support full-stack TypeScript applications?",
      a: "Absolutely. Aurora natively supports Vite, Next.js, Remix, Astro, Express, Fastify, and NestJS with full TypeScript compilation, hot module reloading, and instant type checking."
    },
    {
      q: "Can I cancel or switch my plan at any time?",
      a: "Yes, you can upgrade, downgrade, or cancel your subscription at any time directly in your account dashboard. Yearly plans also come with a 30-day money-back guarantee."
    }
  ]

  const testimonials = [
    {
      quote: "Aurora reduced our team's environment onboarding time from two days to literally under 60 seconds. Our engineers are shipping 40% faster.",
      author: "Elena Rostova",
      role: "VP of Engineering at CloudScale",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      quote: "The instant preview URLs and integrated AI debugger have fundamentally transformed our PR review workflow. We can't imagine building without it.",
      author: "Marcus Chen",
      role: "Lead Architect at FinTech Pulse",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      quote: "Our global latency dropped by 65% when we moved our micro-frontends to Aurora's Edge infrastructure. Truly an extraordinary developer experience.",
      author: "Sarah Lindqvist",
      role: "CTO at HyperVoxel",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
    }
  ]

  return (
    <div className="page-wrapper">
      {/* Background glow effects */}
      <div className="glow-sphere glow-1" />
      <div className="glow-sphere glow-2" />
      <div className="glow-grid" />

      {/* Header / Navigation */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#" className="brand-logo">
            <div className="logo-icon">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="brand-name">Aurora<span className="brand-dot">.dev</span></span>
          </a>

          <nav className="nav-desktop">
            <a href="#features" className="nav-link">Features</a>
            <a href="#showcase" className="nav-link">Architecture</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </nav>

          <div className="nav-actions">
            <a href="#signin" className="btn-ghost">Sign In</a>
            <a href="#pricing" className="btn-primary">
              <span>Start Free</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#showcase" onClick={() => setMobileMenuOpen(false)}>Architecture</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <div className="mobile-actions">
              <a href="#signin" className="btn-ghost w-full text-center">Sign In</a>
              <a href="#pricing" className="btn-primary w-full text-center">Start Free</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge-wrapper">
          <div className="hero-badge">
            <Sparkles className="w-4 h-4 text-amber-400 mr-2" />
            <span>Aurora 2.0 is now live</span>
            <span className="badge-separator">•</span>
            <span className="badge-highlight">Explore what's new</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 opacity-70" />
          </div>
        </div>

        <h1 className="hero-title">
          Build, Ship & Scale <br />
          <span className="gradient-text">Without Infrastructure Friction</span>
        </h1>

        <p className="hero-description">
          The all-in-one developer workspace with instant cloud environments, edge-native deployments,
          and automated CI/CD. Designed for modern React and TypeScript teams.
        </p>

        <div className="hero-cta-group">
          <a href="#pricing" className="btn-primary btn-large">
            <span>Start Building Free</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#showcase" className="btn-secondary btn-large">
            <Play className="w-4 h-4 text-purple-400 fill-purple-400" />
            <span>Interactive Demo</span>
          </a>
        </div>

        {/* Quick CLI copy banner */}
        <div className="cli-box">
          <div className="cli-prompt">
            <span className="cli-symbol">$</span>
            <code>npm create aurora-app@latest</code>
          </div>
          <button
            onClick={copyInstallCommand}
            className="cli-copy-btn"
            title="Copy command to clipboard"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-medium text-xs">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="text-xs">Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Hero Interactive Terminal / Dashboard Mockup */}
        <div className="hero-preview-container">
          <div className="mockup-window">
            <div className="mockup-header">
              <div className="traffic-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="window-title">aurora-workspace // edge-region-iad01</div>
              <div className="header-tabs">
                <button
                  className={`tab-btn ${activeTab === 'cli' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('cli')}
                >
                  <Terminal className="w-3.5 h-3.5 mr-1" />
                  Terminal
                </button>
                <button
                  className={`tab-btn ${activeTab === 'config' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('config')}
                >
                  <Layers className="w-3.5 h-3.5 mr-1" />
                  aurora.config.ts
                </button>
                <button
                  className={`tab-btn ${activeTab === 'metrics' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('metrics')}
                >
                  <Activity className="w-3.5 h-3.5 mr-1" />
                  Live Metrics
                </button>
              </div>
            </div>

            <div className="mockup-body">
              {activeTab === 'cli' && (
                <div className="code-block font-mono">
                  <div className="code-line text-slate-400">
                    <span className="text-cyan-400">aurora</span> deploy --environment=production --region=global
                  </div>
                  <div className="code-line text-emerald-400">
                    ✔ Validating TypeScript AST & dependencies... [0.42s]
                  </div>
                  <div className="code-line text-emerald-400">
                    ✔ Building optimized client bundle (React 18 + Vite)... [1.18s]
                  </div>
                  <div className="code-line text-emerald-400">
                    ✔ Syncing edge workers across 320 nodes worldwide... [0.89s]
                  </div>
                  <div className="code-line text-purple-300">
                    ⚡ Deployment active at: <a href="https://aurora-demo.dev" className="underline text-purple-400">https://aurora-demo.dev</a>
                  </div>
                  <div className="code-line text-slate-400 pt-2 border-t border-slate-800">
                    <span className="text-amber-400">HTTP/2 200 OK</span> • Latency: <span className="text-emerald-400 font-bold">18ms</span> • SSL: <span className="text-emerald-400">TLS v1.3 Valid</span>
                  </div>
                </div>
              )}

              {activeTab === 'config' && (
                <div className="code-block font-mono text-xs text-slate-300">
                  <span className="text-purple-400">import</span> &#123; defineConfig &#125; <span className="text-purple-400">from</span> <span className="text-amber-300">'@aurora/core'</span><br />
                  <br />
                  <span className="text-purple-400">export default</span> defineConfig(&#123;<br />
                  &nbsp;&nbsp;project: <span className="text-amber-300">'react-enterprise-app'</span>,<br />
                  &nbsp;&nbsp;runtime: <span className="text-cyan-300">'edge-fastly'</span>,<br />
                  &nbsp;&nbsp;build: &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;framework: <span className="text-amber-300">'vite-react-ts'</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;strictTypeCheck: <span className="text-purple-400">true</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;minify: <span className="text-amber-300">'oxc'</span><br />
                  &nbsp;&nbsp;&#125;,<br />
                  &nbsp;&nbsp;monitoring: &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;aiDiagnostics: <span className="text-purple-400">true</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;alertSlackChannel: <span className="text-amber-300">'#deployments'</span><br />
                  &nbsp;&nbsp;&#125;<br />
                  &#125;)
                </div>
              )}

              {activeTab === 'metrics' && (
                <div className="metrics-grid">
                  <div className="metric-card">
                    <div className="metric-label">Avg Edge Latency</div>
                    <div className="metric-value text-emerald-400">18.4 ms</div>
                    <div className="metric-sub">Across all regions</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-label">Cache Hit Ratio</div>
                    <div className="metric-value text-cyan-400">99.82%</div>
                    <div className="metric-sub">+0.4% from last week</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-label">Active Instances</div>
                    <div className="metric-value text-purple-400">324</div>
                    <div className="metric-sub">Autoscaling ready</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-label">CPU Utilization</div>
                    <div className="metric-value text-amber-400">14.2%</div>
                    <div className="metric-sub">Optimal health</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Social Proof Strip */}
        <div className="social-proof">
          <p className="social-proof-heading">TRUSTED BY ENGINEERING LEADERS AT INNOVATIVE COMPANIES</p>
          <div className="logos-row">
            <span className="company-logo">VERTEX.IO</span>
            <span className="company-logo">NEXUSTECH</span>
            <span className="company-logo">PULSECLOUD</span>
            <span className="company-logo">QUANTUMLAB</span>
            <span className="company-logo">ACME DYNAMICS</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding">
        <div className="section-header">
          <div className="section-badge">Supercharged Capabilities</div>
          <h2 className="section-title">Engineered for Developer Velocity</h2>
          <p className="section-subtitle">
            Every feature in Aurora is crafted to remove friction, automate routine tasks,
            and allow you to focus on building features your users love.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feat, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-top">
                <div className="feature-icon-wrapper">{feat.icon}</div>
                <span className="feature-pill">{feat.badge}</span>
              </div>
              <h3 className="feature-title">{feat.title}</h3>
              <p className="feature-desc">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase / Architecture Section */}
      <section id="showcase" className="section-padding showcase-section">
        <div className="showcase-card">
          <div className="showcase-content">
            <div className="section-badge">Architecture Highlights</div>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
              From Local Git Push to Global Edge in Milliseconds
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Aurora integrates directly into your existing Git workflows. Every commit triggers instant parallel containerized builds with smart asset caching, cryptographic validation, and automated rollback triggers.
            </p>

            <ul className="showcase-list">
              <li className="showcase-item">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Zero-downtime atomic deployments with instant rollbacks</span>
              </li>
              <li className="showcase-item">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Built-in DDoS protection, automated SSL, and smart TLS handshakes</span>
              </li>
              <li className="showcase-item">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Automatic TypeScript bundle optimization with Brotli compression</span>
              </li>
            </ul>

            <div className="mt-8">
              <a href="#pricing" className="btn-primary">
                Deploy Your First Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          <div className="showcase-visual">
            <div className="visual-card">
              <div className="visual-item">
                <Server className="w-6 h-6 text-purple-400" />
                <div>
                  <div className="font-semibold text-white">Edge Node Pipeline</div>
                  <div className="text-xs text-slate-400">320 locations synchronized</div>
                </div>
                <span className="status-indicator">Active</span>
              </div>
              <div className="visual-divider" />
              <div className="visual-item">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <div>
                  <div className="font-semibold text-white">End-to-End Encryption</div>
                  <div className="text-xs text-slate-400">AES-256-GCM hardware keys</div>
                </div>
                <span className="status-indicator">Secured</span>
              </div>
              <div className="visual-divider" />
              <div className="visual-item">
                <Zap className="w-6 h-6 text-amber-400" />
                <div>
                  <div className="font-semibold text-white">Instant Cold Start</div>
                  <div className="text-xs text-slate-400">Under 5ms via V8 isolates</div>
                </div>
                <span className="status-indicator">Optimal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding">
        <div className="section-header">
          <div className="section-badge">Community & Testimonials</div>
          <h2 className="section-title">Loved by Thousands of Engineers</h2>
          <p className="section-subtitle">
            See how forward-thinking development teams are scaling with Aurora.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <img src={t.avatar} alt={t.author} className="author-avatar" />
                <div>
                  <div className="author-name">{t.author}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding">
        <div className="section-header">
          <div className="section-badge">Predictable Pricing</div>
          <h2 className="section-title">Transparent Plans That Scale With You</h2>
          <p className="section-subtitle">
            Start for free. No credit card required. Upgrade as your team grows.
          </p>

          {/* Billing Switcher */}
          <div className="billing-switch-container">
            <span className={billingCycle === 'monthly' ? 'text-white font-medium' : 'text-slate-400'}>
              Monthly
            </span>
            <button
              className="toggle-pill"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              aria-label="Toggle billing duration"
            >
              <span className={`toggle-dot ${billingCycle === 'yearly' ? 'toggle-dot-right' : ''}`} />
            </button>
            <span className={billingCycle === 'yearly' ? 'text-white font-medium flex items-center' : 'text-slate-400 flex items-center'}>
              Yearly
              <span className="discount-badge">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`pricing-card ${plan.highlighted ? 'pricing-card-highlighted' : ''}`}
            >
              {plan.badge && <div className="card-top-badge">{plan.badge}</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-desc">{plan.description}</p>
              <div className="plan-price-box">
                <span className="price-amount">{plan.price}</span>
                <span className="price-period">/ {plan.period}</span>
              </div>

              <a
                href="#signup"
                className={`plan-btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}
              >
                {plan.ctaText}
              </a>

              <div className="plan-features-list">
                <div className="plan-features-title">What's included:</div>
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="plan-feature-row">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding">
        <div className="section-header">
          <div className="section-badge">Frequently Asked Questions</div>
          <h2 className="section-title">Everything You Need to Know</h2>
          <p className="section-subtitle">Have questions? We're here to help.</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx
            return (
              <div key={idx} className={`faq-card ${isOpen ? 'faq-card-open' : ''}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && <div className="faq-answer-text">{faq.a}</div>}
              </div>
            )
          })}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="cta-banner-section">
        <div className="cta-banner-card">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">
              Ready to Accelerate Your Development Workflow?
            </h2>
            <p className="cta-banner-desc">
              Join over 45,000 developers building better apps faster with Aurora.
              Get started completely free today.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="cta-form">
              <input
                type="email"
                placeholder="Enter your work email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="cta-input"
              />
              <button type="submit" className="btn-primary cta-submit">
                {newsletterSubmitted ? "You're on the list! 🎉" : "Get Early Access"}
              </button>
            </form>
            <div className="cta-guarantee">
              Free 14-day Pro trial • No credit card required • Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="brand-logo mb-3">
              <div className="logo-icon">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="brand-name">Aurora<span className="brand-dot">.dev</span></span>
            </div>
            <p className="footer-tagline">
              Modern cloud developer environments, edge runtimes, and real-time collaboration.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Github"><Github className="w-4 h-4" /></a>
              <a href="#" className="social-icon" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <div className="footer-col-title">Product</div>
              <a href="#features">Features</a>
              <a href="#showcase">Architecture</a>
              <a href="#pricing">Pricing</a>
              <a href="#">CLI Reference</a>
              <a href="#">Changelog</a>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Resources</div>
              <a href="#">Documentation</a>
              <a href="#">API Guides</a>
              <a href="#">Community Hub</a>
              <a href="#">Status Page</a>
              <a href="#">Integrations</a>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Company</div>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Security</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Aurora Cloud Inc. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-200">System Operational (99.99%)</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
