import Link from 'next/link'
import { EBOOK_TITLE } from '@/lib/constants'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E9DFD0]/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Página inicial"
          >
            <span className="text-xl text-[#D8BE7A]" aria-hidden="true">✝</span>
            <span className="font-heading text-lg font-semibold text-[#3E342A] group-hover:text-[#D8BE7A] transition-colors">
              {EBOOK_TITLE}
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            <Link
              href="#conteudo"
              className="text-sm text-[#6B5C4D] hover:text-[#3E342A] transition-colors"
            >
              Conteúdo
            </Link>
            <Link
              href="#capitulos"
              className="text-sm text-[#6B5C4D] hover:text-[#3E342A] transition-colors"
            >
              Capítulos
            </Link>
            <Link
              href="#faq"
              className="text-sm text-[#6B5C4D] hover:text-[#3E342A] transition-colors"
            >
              Dúvidas
            </Link>
            <Link
              href="#comprar"
              className="inline-flex items-center px-5 py-2 rounded-lg bg-[#D8BE7A] text-[#3E342A] text-sm font-semibold hover:bg-[#E6CF96] transition-all duration-300 hover:shadow-md"
            >
              Adquirir ebook
            </Link>
          </nav>

          {/* Mobile CTA */}
          <Link
            href="#comprar"
            className="md:hidden inline-flex items-center px-4 py-2 rounded-lg bg-[#D8BE7A] text-[#3E342A] text-sm font-semibold hover:bg-[#E6CF96] transition-colors"
          >
            Adquirir
          </Link>
        </div>
      </div>
    </header>
  )
}
