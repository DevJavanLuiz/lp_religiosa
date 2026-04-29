import Image from 'next/image'
import { Check, Download, ShieldCheck } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTAButton } from '@/components/ui/CTAButton'
import { EBOOK_PRICE } from '@/lib/constants'
import { formatCurrency } from '@/lib/utils'

export function OfferSection() {
  return (
    <SectionWrapper id="comprar" bgColor="warmWhite">
      <SectionHeading
        badge="Oferta especial"
        title="Invista na restauração da sua alma"
        subtitle="Um material profundo, acessível e transformador por um valor que cabe no seu coração."
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl border border-[#C9B89F] shadow-xl shadow-[#B8903F]/5 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Ebook mockup */}
            <div className="flex items-center justify-center p-8 md:p-12 bg-gradient-to-br from-[#E8DAC8] to-[#DDCBB4]">
              <div className="relative">
                <div
                  className="absolute inset-0 bg-[#B8903F]/15 blur-2xl rounded-full"
                  aria-hidden="true"
                />
                <Image
                  src="/images/ebook-cover.png"
                  alt="Ebook Restauração da Alma, formato digital de acesso imediato"
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
                  <h3 className="font-heading text-2xl font-bold text-[#2A2118] mb-2">
                    Restauração da Alma
                  </h3>
                  <p className="text-[#4D3F31] text-sm">
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
                      <Check className="h-4 w-4 flex-shrink-0 text-[#B8903F]" aria-hidden="true" strokeWidth={2.5} />
                      <span className="text-[#2A2118] text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="pt-4 border-t border-[#C9B89F]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[#2A2118] font-heading">
                      {formatCurrency(EBOOK_PRICE)}
                    </span>
                  </div>
                  <p className="text-[#4D3F31] text-xs mt-1">
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
                <div className="flex items-center justify-center gap-4 text-xs text-[#4D3F31] pt-2">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" strokeWidth={1.5} />
                    Compra segura
                  </span>
                  <span className="flex items-center gap-1">
                    <Download className="h-4 w-4" aria-hidden="true" strokeWidth={1.5} />
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
