import {
  SITE_URL,
  SITE_NAME,
  EBOOK_TITLE,
  EBOOK_SUBTITLE,
  EBOOK_PRICE,
  EBOOK_CURRENCY,
  CHECKOUT_URL,
} from '@/lib/constants'
import { faqItems } from '@/data/faq'

const offerUrl = CHECKOUT_URL.startsWith('http')
  ? CHECKOUT_URL
  : `${SITE_URL}/${CHECKOUT_URL}`

export function getWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Ebook cristão sobre cura emocional, restauração da alma, identidade em Deus, perdão e superação de traumas.',
  }
}

export function getBookJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: EBOOK_TITLE,
    description: EBOOK_SUBTITLE,
    bookFormat: 'https://schema.org/EBook',
    inLanguage: 'pt-BR',
    genre: ['Religião', 'Espiritualidade', 'Autoajuda Cristã'],
    about: [
      'Cura emocional',
      'Restauração espiritual',
      'Perdão',
      'Identidade em Deus',
      'Traumas',
      'Luto',
    ],
    offers: {
      '@type': 'Offer',
      price: EBOOK_PRICE.toFixed(2),
      priceCurrency: EBOOK_CURRENCY,
      availability: 'https://schema.org/InStock',
      url: offerUrl,
    },
  }
}

export function getProductJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${EBOOK_TITLE} — Ebook Digital`,
    description: EBOOK_SUBTITLE,
    image: `${SITE_URL}/images/ebook-cover.png`,
    brand: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    offers: {
      '@type': 'Offer',
      price: EBOOK_PRICE.toFixed(2),
      priceCurrency: EBOOK_CURRENCY,
      availability: 'https://schema.org/InStock',
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0],
      url: offerUrl,
    },
  }
}

export function getFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/ebook-cover.png`,
  }
}

export function getAllJsonLd() {
  return [
    getWebsiteJsonLd(),
    getBookJsonLd(),
    getProductJsonLd(),
    getFaqJsonLd(),
    getOrganizationJsonLd(),
  ]
}
