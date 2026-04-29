import { UserRound } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

export function AuthorSection() {
  return (
    <SectionWrapper id="autora" bgColor="highlight">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl border border-[#C9B89F] p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Author avatar placeholder */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#C7AE8D] to-[#B8903F]/30 flex items-center justify-center border-2 border-[#B8903F]/20">
                <UserRound className="h-12 w-12 text-[#9F845F]" aria-hidden="true" strokeWidth={1.5} />
              </div>
            </div>

            {/* Author info */}
            <div className="text-center md:text-left flex-1">
              <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-[#B8903F]/15 text-[#2A2118] text-xs font-medium uppercase tracking-wider">
                Sobre a autora
              </span>
              <h2 className="font-heading text-2xl font-semibold text-[#2A2118] mb-4">
                Uma mensagem escrita com o coração
              </h2>
              <div className="space-y-4 text-[#4D3F31] leading-relaxed">
                <p>
                  Este ebook nasceu de um profundo desejo de ajudar pessoas que
                  carregam dores emocionais e espirituais, muitas vezes em
                  silêncio. Foi escrito com base bíblica, sensibilidade e
                  respeito por cada história.
                </p>
                <p>
                  O conteúdo reflete anos de estudo bíblico, experiência
                  ministerial e um olhar atento para as feridas que afetam a
                  alma humana. Cada capítulo foi pensado como um passo
                  intencional em direção à restauração que Deus oferece.
                </p>
                <p className="italic text-[#B8903F] font-medium">
                  &ldquo;Meu maior desejo é que este material seja usado por
                  Deus para alcançar, acolher e restaurar vidas.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
