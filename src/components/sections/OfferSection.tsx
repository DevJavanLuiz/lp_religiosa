import Image from 'next/image'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTAButton } from '@/components/ui/CTAButton'
import { EBOOK_PRICE, EBOOK_ORIGINAL_PRICE } from '@/lib/constants'
import { formatCurrency } from '@/lib/utils'

export function OfferSection() {
  const discount = Math.round(
    ((EBOOK_ORIGINAL_PRICE - EBOOK_PRICE) / EBOOK_ORIGINAL_PRICE) * 100
  )

  return (
    <SectionWrapper id="comprar" bgColor="warmWhite">
      <SectionHeading
        badge="Oferta especial"
        title="Invista na restauração da sua alma"
        subtitle="Um material profundo, acessível e transformador por um valor que cabe no seu coração."
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl border border-[#E9DFD0] shadow-xl shadow-[#D8BE7A]/5 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Ebook mockup */}
            <div className="flex items-center justify-center p-8 md:p-12 bg-gradient-to-br from-[#F8F3EB] to-[#F3EBDD]">
              <div className="relative">
                <div
                  className="absolute inset-0 bg-[#D8BE7A]/15 blur-2xl rounded-full"
                  aria-hidden="true"
                />
                <Image
                  src="/images/ebook-cover.png"
                  alt="Ebook Restauração da Alma — formato digital de acesso imediato"
                  width={300}
                  height={400}
                  className="relative drop-shadow-xl rounded-lg w-[220px] sm:w-[260px] h-auto"
                />
              </div>
            </div>

            {/* Offer details */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="space-y-6">
                {/* Product info */}
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#3E342A] mb-2">
                    Restauração da Alma
                  </h3>
                  <p className="text-[#6B5C4D] text-sm">
                    Ebook Digital · PDF de Alta Qualidade · Acesso Imediato
                  </p>
                </div>

                {/* Value items */}
                <div className="space-y-3">
                  {[
                    '5 capítulos profundos e transformadores',
                    'Abordagem bíblica e acolhedora',
                    'Leitura prática para momentos difíceis',
                    'Material estruturado para reflexão pessoal',
                    'Conteúdo sobre perdão, traumas, luto e identidade',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg
                        className="w-4 h-4 text-[#D8BE7A] flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#3E342A] text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="pt-4 border-t border-[#E9DFD0]">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-sm text-[#6B5C4D] line-through">
                      {formatCurrency(EBOOK_ORIGINAL_PRICE)}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#D8BE7A]/15 text-[#3E342A] text-xs font-semibold">
                      -{discount}%
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[#3E342A] font-heading">
                      {formatCurrency(EBOOK_PRICE)}
                    </span>
                  </div>
                  <p className="text-[#6B5C4D] text-xs mt-1">
                    Pagamento único · Sem mensalidade
                  </p>
                </div>

                {/* CTA */}
                <CTAButton
                  id="offer-cta"
                  size="large"
                  className="w-full text-center"
                >
                  Quero começar minha cura emocional
                </CTAButton>

                {/* Badges */}
                <div className="flex items-center justify-center gap-4 text-xs text-[#6B5C4D] pt-2">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    Compra segura
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download imediato
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
