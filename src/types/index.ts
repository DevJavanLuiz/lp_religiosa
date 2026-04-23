export interface Chapter {
  id: number
  title: string
  subtitle: string
  description: string
  icon: string
}

export interface Benefit {
  id: number
  title: string
  description: string
  icon: string
}

export interface FAQItem {
  id: number
  question: string
  answer: string
}

export interface PainPoint {
  id: number
  text: string
}

export interface TransformationItem {
  before: string
  after: string
}

export interface AudienceItem {
  id: number
  text: string
}
