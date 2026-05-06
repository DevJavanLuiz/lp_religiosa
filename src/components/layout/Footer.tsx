import Link from 'next/link'
import { Cross } from 'lucide-react'
import { CHECKOUT_URL, EBOOK_TITLE, SITE_NAME } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#2A2118] text-[#C7AE8D]" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Cross className="h-5 w-5 text-[#B8903F]" aria-hidden="true" strokeWidth={2} />
              <span className="font-heading text-lg font-semibold text-white">
                {EBOOK_TITLE}
              </span>
            </Link>
            <p className="text-sm text-[#9F845F] leading-relaxed max-w-xs">
              Um ebook cristão sobre cura emocional, restauração da alma e
              identidade em Deus. Conteúdo profundo, bíblico e acolhedor.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navegação
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Links do rodapé">
              <Link
                href="#conteudo"
                className="text-sm text-[#9F845F] hover:text-[#B8903F] transition-colors"
              >
                O que você vai encontrar
              </Link>
              <Link
                href="#capitulos"
                className="text-sm text-[#9F845F] hover:text-[#B8903F] transition-colors"
              >
                Os 5 passos
              </Link>
              <Link
                href="#para-quem"
                className="text-sm text-[#9F845F] hover:text-[#B8903F] transition-colors"
              >
                Para quem é
              </Link>
              <Link
                href="#faq"
                className="text-sm text-[#9F845F] hover:text-[#B8903F] transition-colors"
              >
                Perguntas frequentes
              </Link>
              <Link
                href={CHECKOUT_URL}
                className="hotmart-fb hotmart__button-checkout text-sm text-[#B8903F] hover:text-[#C49D52] transition-colors font-medium"
              >
                Adquirir o ebook
              </Link>
            </nav>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Informações
            </h3>
            <div className="space-y-2 text-sm text-[#9F845F]">
              <p>Formato: Ebook Digital (PDF)</p>
              <p>Acesso: Imediato após o pagamento</p>
              <p>Compatível com todos os dispositivos</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-[#4D3F31]/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#9F845F]/70">
              &copy; {currentYear} {SITE_NAME}. Todos os direitos reservados.
            </p>
            <p className="text-xs text-[#9F845F]/50">
              Este produto é digital e não possui entrega física.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
