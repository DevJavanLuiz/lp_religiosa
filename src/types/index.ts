export type EbookIconName =
  | 'book-open'
  | 'church'
  | 'crown'
  | 'heart'
  | 'key-round'
  | 'leaf'
  | 'link'
  | 'lock-open'
  | 'shield'
  | 'sparkles'

export interface Chapter {
  id: number
  title: string
  subtitle: string
  description: string
  icon: EbookIconName
}

export interface Benefit {
  id: number
  title: string
  description: string
  icon: EbookIconName
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
