import React, { useState } from 'react'
import { Check, Users } from 'lucide-react'
import { PRICING_PLANS } from '../data/content'
import { BillingCycle, PricingPlan } from '../types'

interface PricingProps {
  onSelectPlan: (plan: PricingPlan, cycle: BillingCycle) => void
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('yearly')
  const [teamSeats, setTeamSeats] = useState<number>(5)

  return (
    <section id="pricing" className="section-padding">
      <div className="section-header">
        <div className="section-badge">Predictable Pricing</div>
        <h2 className="section-title">Transparent Plans Built for Teams of Any Size</h2>
        <p className="section-subtitle">
          Start building for free with no credit card required. Upgrade as your team grows.
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

        {/* Team Seat Slider for Pro estimation */}
        <div className="seats-slider-box">
          <div className="seats-slider-header">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-slate-200">Team Size Calculator:</span>
            </div>
            <span className="seats-counter text-purple-300 font-mono font-bold">
              {teamSeats} Team Member{teamSeats > 1 ? 's' : ''}
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={teamSeats}
            onChange={(e) => setTeamSeats(Number(e.target.value))}
            className="calc-slider"
          />
        </div>
      </div>

      <div className="pricing-grid">
        {PRICING_PLANS.map((plan: PricingPlan) => {
          const basePrice = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice
          const totalPrice = plan.id === 'pro' ? basePrice * teamSeats : basePrice

          return (
            <div
              key={plan.id}
              className={`pricing-card ${plan.popular ? 'pricing-card-highlighted' : ''}`}
            >
              {plan.badge && <div className="card-top-badge">{plan.badge}</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-desc">{plan.description}</p>

              <div className="plan-price-box">
                <span className="price-amount font-mono">
                  {plan.id === 'enterprise' ? '$79' : `$${totalPrice}`}
                </span>
                <span className="price-period">
                  {plan.id === 'starter'
                    ? 'forever free'
                    : plan.id === 'pro'
                    ? `/ month for ${teamSeats} seats`
                    : '/ user / month'}
                </span>
              </div>

              <button
                onClick={() => onSelectPlan(plan, billingCycle)}
                className={`plan-btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
              >
                {plan.ctaText}
              </button>

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
          )
        })}
      </div>
    </section>
  )
}
