import { FeatureItem, PricingPlan, Testimonial, FaqItem } from '../types'

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'instant-spinup',
    category: 'performance',
    title: 'Instant Ephemeral Workspaces',
    description: 'Spin up production-identical dev environments in under 3.2 seconds. Full support for Vite, Next.js, Go, Python, and Rust with zero local container overhead.',
    icon: 'Zap',
    badge: '3.2s Boot',
    metricLabel: 'Boot Time',
    metricValue: '3.2s'
  },
  {
    id: 'global-edge',
    category: 'performance',
    title: '320+ Global Edge Nodes',
    description: 'Deploy serverless functions and frontend bundles across Anycast distributed edge locations with intelligent geo-routing and sub-35ms TTFB worldwide.',
    icon: 'Globe',
    badge: '320+ PoPs',
    metricLabel: 'Edge TTFB',
    metricValue: '< 35ms'
  },
  {
    id: 'ai-diagnostics',
    category: 'observability',
    title: 'AI Root-Cause Diagnostics',
    description: 'Automated AST scanning and runtime crash analysis that Pinpoints TypeScript compile bugs, missing environment secrets, and memory leaks before merge.',
    icon: 'Sparkles',
    badge: 'Smart Assist',
    metricLabel: 'Fix Accuracy',
    metricValue: '94.8%'
  },
  {
    id: 'realtime-multiplayer',
    category: 'collaboration',
    title: 'Multiplayer Live Previews',
    description: 'Share live preview URLs with teammates and stakeholders. Annotate DOM elements directly, review PRs interactively, and pair-program in real-time.',
    icon: 'Users',
    badge: 'Live Sync',
    metricLabel: 'Sync Lag',
    metricValue: '< 15ms'
  },
  {
    id: 'zero-trust',
    category: 'security',
    title: 'Zero-Trust Security & Vault',
    description: 'Hardware-backed secret encryption (AES-256-GCM), automatic credential rotation, automated SBOM vulnerability scanning, and SOC2 Type II compliance.',
    icon: 'ShieldCheck',
    badge: 'SOC2 Type II',
    metricLabel: 'Encryption',
    metricValue: 'AES-256'
  },
  {
    id: 'deep-telemetry',
    category: 'observability',
    title: 'Real-Time Edge Telemetry',
    description: 'Zero-instrumentation distributed tracing, live streaming build logs, memory profiling, and instant anomaly alerts synced directly to Slack and PagerDuty.',
    icon: 'Activity',
    badge: 'Zero Overhead',
    metricLabel: 'Trace Resolution',
    metricValue: '1μs'
  }
]

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Ideal for independent developers, open-source projects, and small experiments.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    ctaText: 'Get Started Free',
    maxSeats: 1,
    features: [
      'Up to 3 active cloud workspaces',
      'Automatic HTTPS & custom subdomains',
      'Community Discord & Forum access',
      '5 GB fast NVMe cloud workspace storage',
      '120 build minutes / month',
      'Community template library'
    ]
  },
  {
    id: 'pro',
    name: 'Pro Team',
    description: 'For growing development teams shipping modern full-stack web applications.',
    monthlyPrice: 29,
    yearlyPrice: 24,
    popular: true,
    badge: 'Most Popular',
    ctaText: 'Start 14-Day Free Trial',
    maxSeats: 25,
    features: [
      'Unlimited ephemeral cloud workspaces',
      'Deploy to 320+ Global Edge points of presence',
      'AI error diagnostics & automated fix suggestions',
      'Multiplayer team previews & live collaboration',
      '50 GB NVMe storage & high-speed build queues',
      'Custom environment variables vault & secret sync',
      'Priority 24/7 Slack & Email support'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Dedicated infrastructure, custom SLAs, advanced compliance, and VPC peering.',
    monthlyPrice: 99,
    yearlyPrice: 79,
    ctaText: 'Contact Sales',
    maxSeats: 500,
    features: [
      'Dedicated single-tenant VPC / on-premise runner',
      'SAML 2.0, Okta & Google Workspace SSO',
      '99.99% uptime SLA with financial guarantees',
      'Custom retention policies & audit log exports',
      'SOC2 Type II & HIPAA compliance assistance',
      'Dedicated Technical Account Manager & custom onboarding'
    ]
  }
]

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote: "Aurora eliminated our multi-hour onboarding slog completely. New developers can deploy to our staging environment within 15 minutes of joining the team.",
    author: "Elena Rostova",
    role: "VP of Engineering",
    company: "CloudScale Analytics",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=140&h=140&q=80",
    rating: 5,
    stat: "4x Faster Onboarding"
  },
  {
    quote: "The interactive multiplayer previews and edge compiler dropped our PR cycle times from 2 days down to 4 hours. It's the biggest developer experience leap we've had.",
    author: "Marcus Chen",
    role: "Principal Infrastructure Architect",
    company: "Pulse Dynamics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=140&h=140&q=80",
    rating: 5,
    stat: "65% Shorter Review Cycles"
  },
  {
    quote: "Running our micro-frontends on Aurora's edge network slashed our p99 response times across Asia-Pacific and Europe from 180ms to 28ms. Mind-blowing.",
    author: "Sarah Lindqvist",
    role: "Chief Technology Officer",
    company: "HyperVoxel Systems",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=140&h=140&q=80",
    rating: 5,
    stat: "28ms Global p99"
  }
]

export const FAQS_DATA: FaqItem[] = [
  {
    category: 'general',
    question: 'How is Aurora different from traditional container setups like Docker?',
    answer: 'Aurora boots lightweight, isolated micro-VMs in milliseconds directly in the cloud. You avoid Docker daemon battery drain, slow compilation on local hardware, and the frustrating "works on my machine" discrepancy across your engineering team.'
  },
  {
    category: 'general',
    question: 'Can I connect my existing GitHub, GitLab, or Bitbucket repositories?',
    answer: 'Yes! Connect any Git repository in two clicks. Aurora automatically infers your framework, configures package dependencies, provisions environment variables, and launches live preview URLs for every pull request.'
  },
  {
    category: 'technical',
    question: 'What frameworks and runtimes are supported out of the box?',
    answer: 'Aurora natively supports Vite (React, Vue, Svelte), Next.js, Remix, Astro, Node.js, Bun, Deno, Go, Rust, and Python. We provide optimized caching layers for npm, pnpm, yarn, and cargo.'
  },
  {
    category: 'technical',
    question: 'How does Aurora handle secrets and environment variables?',
    answer: 'Secrets are encrypted using hardware-backed AES-256-GCM envelope encryption and injected only at runtime into isolated isolates. Secrets are never stored in git or exposed in build artifacts.'
  },
  {
    category: 'billing',
    question: 'Can I change or cancel my plan at any time?',
    answer: 'Yes. You can upgrade, downgrade, or cancel your subscription at any time with a single click in your dashboard. Unused time is prorated, and annual plans come with a 30-day money-back guarantee.'
  },
  {
    category: 'billing',
    question: 'Do you offer educational or open-source sponsorships?',
    answer: 'Yes! We proudly sponsor non-profit open-source initiatives and verified student developers with complimentary Pro workspaces. Contact our community team for quick verification.'
  }
]
