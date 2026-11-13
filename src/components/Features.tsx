import React, { useState } from 'react'
import { Zap, Globe, Sparkles, Users, ShieldCheck, Activity } from 'lucide-react'
import { FEATURES_DATA } from '../data/content'
import { FeatureItem } from '../types'

export const Features: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'performance', label: 'Performance & Edge' },
    { id: 'security', label: 'Security & Vault' },
    { id: 'collaboration', label: 'Team Collaboration' },
    { id: 'observability', label: 'Telemetry & AI' }
  ]

  const filteredFeatures = selectedCategory === 'all'
    ? FEATURES_DATA
    : FEATURES_DATA.filter((f) => f.category === selectedCategory)

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-6 h-6 text-amber-400" />
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-purple-400" />
      case 'Users': return <Users className="w-6 h-6 text-emerald-400" />
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-rose-400" />
      case 'Activity': return <Activity className="w-6 h-6 text-blue-400" />
      default: return <Zap className="w-6 h-6 text-indigo-400" />
    }
  }

  return (
    <section id="features" className="section-padding">
      <div className="section-header">
        <div className="section-badge">Platform Architecture</div>
        <h2 className="section-title">Engineered for Uncompromising Velocity</h2>
        <p className="section-subtitle">
          Everything your engineering team needs to write TypeScript code, test in parallel,
          and deploy globally without maintaining continuous integration clusters.
        </p>

        {/* Category Pill Filters */}
        <div className="feature-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`filter-btn ${selectedCategory === cat.id ? 'filter-btn-active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="features-grid">
        {filteredFeatures.map((feat: FeatureItem) => (
          <div key={feat.id} className="feature-card">
            <div className="feature-top">
              <div className="feature-icon-wrapper">{renderIcon(feat.icon)}</div>
              <span className="feature-pill">{feat.badge}</span>
            </div>
            <h3 className="feature-title">{feat.title}</h3>
            <p className="feature-desc">{feat.description}</p>
            <div className="feature-metric-row">
              <span className="text-xs text-slate-400">{feat.metricLabel}:</span>
              <span className="text-xs font-mono font-bold text-cyan-400">{feat.metricValue}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
