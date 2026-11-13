export type BillingCycle = 'monthly' | 'yearly'

export interface PricingPlan {
  id: string
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  popular?: boolean
  badge?: string
  ctaText: string
  features: string[]
  maxSeats: number
}

export interface FeatureItem {
  id: string
  category: 'performance' | 'security' | 'collaboration' | 'observability'
  title: string
  description: string
  icon: string
  badge: string
  metricLabel: string
  metricValue: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  rating: number
  stat?: string
}

export interface FaqItem {
  question: string
  answer: string
  category: 'general' | 'technical' | 'billing'
}

export interface ToastMessage {
  id: string
  title: string
  message?: string
  type: 'success' | 'info' | 'warning' | 'error'
}
