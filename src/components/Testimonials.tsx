import React from 'react'
import { Star, Award } from 'lucide-react'
import { TESTIMONIALS_DATA } from '../data/content'
import { Testimonial } from '../types'

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="section-header">
        <div className="section-badge">Proven Results</div>
        <h2 className="section-title">Loved by High-Velocity Engineering Teams</h2>
        <p className="section-subtitle">
          From seed-stage startups to publicly traded enterprises, discover how modern dev teams build on Aurora.
        </p>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS_DATA.map((t: Testimonial, idx: number) => (
          <div key={idx} className="testimonial-card">
            <div>
              <div className="testimonial-top-row">
                <div className="stars-row">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                {t.stat && (
                  <span className="testimonial-stat-badge">
                    <Award className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                    {t.stat}
                  </span>
                )}
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>
            </div>

            <div className="testimonial-author">
              <img src={t.avatar} alt={t.author} className="author-avatar" loading="lazy" />
              <div>
                <div className="author-name">{t.author}</div>
                <div className="author-role">{t.role} • <span className="text-purple-300">{t.company}</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
