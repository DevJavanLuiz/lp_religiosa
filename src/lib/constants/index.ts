export const SITE_URL = 'https://restauracaodaalma.warrantconnect.com'
export const SITE_NAME = 'Restauração da Alma'
export const SITE_DESCRIPTION =
  'Ebook cristão sobre cura emocional, restauração da alma e identidade em Deus. 5 passos espirituais para curar emoções, vencer traumas e restaurar sua identidade.'

export const EBOOK_TITLE = 'Restauração da Alma'
export const EBOOK_SUBTITLE =
  '5 Passos Espirituais para Curar Emoções, Vencer Traumas e Restaurar sua Identidade em Deus'
export const EBOOK_PRICE = 17.70
export const EBOOK_CURRENCY = 'BRL'

export const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL ||
  'https://pay.hotmart.com/I105707940W?checkoutMode=2'

export const COLORS = {
  white: '#FFFFFF',
  warmWhite: '#F1E7D8',
  lightBeige: '#DDCBB4',
  mediumBeige: '#C7AE8D',
  darkBeige: '#9F845F',
  lightGold: '#B8903F',
  softGold: '#C49D52',
  textPrimary: '#2A2118',
  textSecondary: '#4D3F31',
  borderSoft: '#C9B89F',
  bgHighlight: '#E8DAC8',
} as const
