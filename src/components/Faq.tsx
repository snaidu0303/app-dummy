import React, { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import { FAQS_DATA } from '../data/content'
import { FaqItem } from '../types'

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFaqs = FAQS_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="section-padding">
      <div className="section-header">
        <div className="section-badge">Help & Support</div>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Got questions about our architecture, edge nodes, security, or billing? We have answers.
        </p>

        {/* Live Search Filter */}
        <div className="faq-search-wrapper">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search FAQs (e.g., Docker, secrets, billing)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="faq-search-input"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="faq-container">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-8 text-slate-400">
            No matching questions found for "{searchQuery}". Reach out on our Discord or via support!
          </div>
        ) : (
          filteredFaqs.map((faq: FaqItem, idx: number) => {
            const isOpen = openIndex === idx
            return (
              <div key={idx} className={`faq-card ${isOpen ? 'faq-card-open' : ''}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-purple-400' : 'text-slate-400'
                    }`}
                  />
                </button>
                {isOpen && <div className="faq-answer-text">{faq.answer}</div>}
              </div>
            )
          })
        )}
      </div>
    </section>
  )
}
