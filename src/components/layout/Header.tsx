import Link from 'next/link'
import { Cross } from 'lucide-react'
import { CHECKOUT_URL, EBOOK_TITLE } from '@/lib/constants'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#C9B89F]/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Página inicial"
          >
            <Cross className="h-5 w-5 text-[#B8903F]" aria-hidden="true" strokeWidth={2} />
            <span className="font-heading text-lg font-semibold text-[#2A2118] group-hover:text-[#B8903F] transition-colors">
              {EBOOK_TITLE}
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            <Link
              href="#conteudo"
              className="text-sm text-[#4D3F31] hover:text-[#2A2118] transition-colors"
            >
              Conteúdo
            </Link>
            <Link
              href="#capitulos"
              className="text-sm text-[#4D3F31] hover:text-[#2A2118] transition-colors"
            >
              Capítulos
            </Link>
            <Link
              href="#faq"
              className="text-sm text-[#4D3F31] hover:text-[#2A2118] transition-colors"
            >
              Dúvidas
            </Link>
            <Link
              href={CHECKOUT_URL}
              className="hotmart-fb hotmart__button-checkout inline-flex items-center px-5 py-2 rounded-lg bg-[#B8903F] text-[#2A2118] text-sm font-semibold hover:bg-[#C49D52] transition-all duration-300 hover:shadow-md"
            >
              Adquirir ebook
            </Link>
          </nav>

          {/* Mobile CTA */}
          <Link
            href={CHECKOUT_URL}
            className="hotmart-fb hotmart__button-checkout md:hidden inline-flex items-center px-4 py-2 rounded-lg bg-[#B8903F] text-[#2A2118] text-sm font-semibold hover:bg-[#C49D52] transition-colors"
          >
            Adquirir
          </Link>
        </div>
      </div>
    </header>
  )
}
