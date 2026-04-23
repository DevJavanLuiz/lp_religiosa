import Link from 'next/link'
import { EBOOK_TITLE, SITE_NAME } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#3E342A] text-[#E6D5BD]" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl text-[#D8BE7A]" aria-hidden="true">✝</span>
              <span className="font-heading text-lg font-semibold text-white">
                {EBOOK_TITLE}
              </span>
            </Link>
            <p className="text-sm text-[#CBB89D] leading-relaxed max-w-xs">
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
                className="text-sm text-[#CBB89D] hover:text-[#D8BE7A] transition-colors"
              >
                O que você vai encontrar
              </Link>
              <Link
                href="#capitulos"
                className="text-sm text-[#CBB89D] hover:text-[#D8BE7A] transition-colors"
              >
                Os 5 passos
              </Link>
              <Link
                href="#para-quem"
                className="text-sm text-[#CBB89D] hover:text-[#D8BE7A] transition-colors"
              >
                Para quem é
              </Link>
              <Link
                href="#faq"
                className="text-sm text-[#CBB89D] hover:text-[#D8BE7A] transition-colors"
              >
                Perguntas frequentes
              </Link>
              <Link
                href="#comprar"
                className="text-sm text-[#D8BE7A] hover:text-[#E6CF96] transition-colors font-medium"
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
            <div className="space-y-2 text-sm text-[#CBB89D]">
              <p>Formato: Ebook Digital (PDF)</p>
              <p>Acesso: Imediato após o pagamento</p>
              <p>Compatível com todos os dispositivos</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-[#6B5C4D]/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#CBB89D]/70">
              &copy; {currentYear} {SITE_NAME}. Todos os direitos reservados.
            </p>
            <p className="text-xs text-[#CBB89D]/50">
              Este produto é digital e não possui entrega física.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
