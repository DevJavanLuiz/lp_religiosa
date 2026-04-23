import { SectionWrapper } from '@/components/ui/SectionWrapper'

export function AuthorSection() {
  return (
    <SectionWrapper id="autora" bgColor="highlight">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl border border-[#E9DFD0] p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Author avatar placeholder */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#E6D5BD] to-[#D8BE7A]/30 flex items-center justify-center border-2 border-[#D8BE7A]/20">
                <svg
                  className="w-12 h-12 text-[#CBB89D]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
            </div>

            {/* Author info */}
            <div className="text-center md:text-left flex-1">
              <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-[#D8BE7A]/15 text-[#3E342A] text-xs font-medium uppercase tracking-wider">
                Sobre a autora
              </span>
              <h2 className="font-heading text-2xl font-semibold text-[#3E342A] mb-4">
                Uma mensagem escrita com o coração
              </h2>
              <div className="space-y-4 text-[#6B5C4D] leading-relaxed">
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
                <p className="italic text-[#D8BE7A] font-medium">
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
