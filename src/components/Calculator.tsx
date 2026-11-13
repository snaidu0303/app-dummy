import React, { useState } from 'react'
import { Clock, DollarSign, Zap, Sparkles } from 'lucide-react'

interface CalculatorProps {
  onOpenAuth: (mode: 'signup') => void
}

export const Calculator: React.FC<CalculatorProps> = ({ onOpenAuth }) => {
  const [engineers, setEngineers] = useState<number>(10)
  const [buildsPerDay, setBuildsPerDay] = useState<number>(30)

  // Calculations
  // Standard CI takes ~12 mins, Aurora takes ~2.5 mins = ~9.5 mins saved per build
  const minutesSavedPerBuild = 9.5
  const workingDaysPerMonth = 22
  const totalBuildsPerMonth = engineers * (buildsPerDay / 10) * workingDaysPerMonth
  const hoursSavedPerMonth = Math.round((totalBuildsPerMonth * minutesSavedPerBuild) / 60)
  const averageHourlyCost = 85 // Average software engineer hourly rate in USD
  const monthlyCostSavings = Math.round(hoursSavedPerMonth * averageHourlyCost)
  const annualSavings = monthlyCostSavings * 12

  return (
    <section id="calculator" className="section-padding">
      <div className="section-header">
        <div className="section-badge">ROI & Efficiency Estimator</div>
        <h2 className="section-title">Calculate Your Team's Time & Cost Savings</h2>
        <p className="section-subtitle">
          See how moving from legacy container builders to Aurora's instant edge environments
          impacts your bottom line and engineering velocity.
        </p>
      </div>

      <div className="calculator-card">
        <div className="calc-controls">
          <div className="calc-group">
            <div className="calc-label-row">
              <label htmlFor="engineers-range" className="calc-label">
                Engineering Team Size:
              </label>
              <span className="calc-value-badge">{engineers} Developers</span>
            </div>
            <input
              id="engineers-range"
              type="range"
              min="1"
              max="50"
              value={engineers}
              onChange={(e) => setEngineers(Number(e.target.value))}
              className="calc-slider"
            />
            <div className="calc-range-ticks">
              <span>1</span>
              <span>10</span>
              <span>25</span>
              <span>50+</span>
            </div>
          </div>

          <div className="calc-group">
            <div className="calc-label-row">
              <label htmlFor="builds-range" className="calc-label">
                Deployments & Previews per Day:
              </label>
              <span className="calc-value-badge">{buildsPerDay} Builds/Day</span>
            </div>
            <input
              id="builds-range"
              type="range"
              min="5"
              max="100"
              step="5"
              value={buildsPerDay}
              onChange={(e) => setBuildsPerDay(Number(e.target.value))}
              className="calc-slider"
            />
            <div className="calc-range-ticks">
              <span>5</span>
              <span>30</span>
              <span>60</span>
              <span>100+</span>
            </div>
          </div>

          <div className="calc-note">
            <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Based on benchmark comparison: Aurora 2.1s build vs traditional container 12.4m build.</span>
          </div>
        </div>

        <div className="calc-results">
          <div className="result-metric-box">
            <div className="result-metric-header">
              <Clock className="w-5 h-5 text-purple-400" />
              <span>Dev Time Recovered</span>
            </div>
            <div className="result-metric-value text-purple-400 font-mono">
              {hoursSavedPerMonth.toLocaleString()} hrs
            </div>
            <div className="result-metric-sub">
              saved per month across the engineering organization
            </div>
          </div>

          <div className="result-metric-box result-metric-box-highlight">
            <div className="result-metric-header">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              <span>Estimated Annual Savings</span>
            </div>
            <div className="result-metric-value text-emerald-400 font-mono">
              ${annualSavings.toLocaleString()}
            </div>
            <div className="result-metric-sub">
              ~${monthlyCostSavings.toLocaleString()}/month in reclaimed developer output
            </div>
          </div>

          <div className="result-metric-box">
            <div className="result-metric-header">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span>Average PR Cycle Acceleration</span>
            </div>
            <div className="result-metric-value text-cyan-400 font-mono">
              4.6x Faster
            </div>
            <div className="result-metric-sub">
              from code review to edge deployment
            </div>
          </div>

          <button
            onClick={() => onOpenAuth('signup')}
            className="btn-primary w-full mt-2"
          >
            Start Reclaiming Engineering Hours Free
          </button>
        </div>
      </div>
    </section>
  )
}
