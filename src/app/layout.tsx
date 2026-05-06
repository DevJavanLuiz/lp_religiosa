import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import Script from 'next/script'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getAllJsonLd } from '@/lib/seo/json-ld'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant-garamond',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Ebook Cristão sobre Cura Emocional e Identidade em Deus`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'ebook cristão',
    'cura emocional',
    'restauração da alma',
    'identidade em Deus',
    'cura interior bíblica',
    'perdão cristão',
    'traumas e fé',
    'luto e esperança',
    'libertação emocional cristã',
    'ebook sobre perdão',
    'paternidade de Deus',
    'genograma familiar cristão',
    'restauração espiritual',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Restauração da Alma — 5 Passos para Curar Emoções e Restaurar sua Identidade em Deus',
    description:
      'Ebook cristão com abordagem bíblica e acolhedora sobre cura emocional, perdão, traumas, luto e identidade em Deus. Acesso imediato.',
    images: [
      {
        url: '/images/ebook-cover.png',
        width: 1200,
        height: 630,
        alt: 'Capa do ebook Restauração da Alma — cura emocional e identidade em Deus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restauração da Alma — Ebook Cristão sobre Cura Emocional',
    description:
      '5 passos espirituais para curar emoções, vencer traumas e restaurar sua identidade em Deus.',
    images: ['/images/ebook-cover.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLdItems = getAllJsonLd()

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        {jsonLdItems.map((item, index) => (
          <script
            key={`json-ld-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <Script
          src="https://static.hotmart.com/checkout/widget.min.js"
          strategy="afterInteractive"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
