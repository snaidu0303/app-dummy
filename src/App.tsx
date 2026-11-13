import { useState } from 'react'
import { ToastProvider } from './context/ToastContext'
import { ToastContainer } from './components/Toast'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { ArchitectureFlow } from './components/ArchitectureFlow'
import { Calculator } from './components/Calculator'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { AuthModal } from './components/AuthModal'
import { PricingPlan, BillingCycle } from './types'

function AppContent() {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signup')

  const handleOpenAuth = (mode: 'signin' | 'signup') => {
    setAuthMode(mode)
    setAuthModalOpen(true)
  }

  const handleSelectPlan = (_plan: PricingPlan, _cycle: BillingCycle) => {
    setAuthMode('signup')
    setAuthModalOpen(true)
  }

  return (
    <div className="page-wrapper">
      {/* Dynamic Ambient Background Glows */}
      <div className="glow-sphere glow-1" />
      <div className="glow-sphere glow-2" />
      <div className="glow-grid" />

      {/* Global Toast Container */}
      <ToastContainer />

      {/* Navigation */}
      <Navbar onOpenAuth={handleOpenAuth} />

      {/* Hero Section & Interactive Terminal */}
      <Hero onOpenAuth={handleOpenAuth} />

      {/* Core Platform Capabilities */}
      <Features />

      {/* Step-by-Step Architecture Pipeline */}
      <ArchitectureFlow />

      {/* Interactive Time & Cost Savings ROI Calculator */}
      <Calculator onOpenAuth={handleOpenAuth} />

      {/* Social Proof & Customer Reviews */}
      <Testimonials />

      {/* Interactive Pricing Grid */}
      <Pricing onSelectPlan={handleSelectPlan} />

      {/* Searchable FAQ Accordion */}
      <Faq />

      {/* Footer & Newsletter CTA */}
      <Footer />

      {/* Auth / Get Started Modal */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  )
}

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  )
}
