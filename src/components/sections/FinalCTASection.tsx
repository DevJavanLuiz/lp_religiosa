import { Check, Cross } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton'

export function FinalCTASection() {
  return (
    <section
      id="cta-final"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#DDCBB4] via-[#E8DAC8] to-[#F1E7D8] overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#B8903F]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Decorative cross */}
        <div className="mb-8 flex justify-center" aria-hidden="true">
          <Cross className="h-10 w-10 text-[#B8903F] opacity-60" strokeWidth={1.75} />
        </div>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A2118] leading-tight mb-6">
          A dor que você carrega não precisa definir quem você é
        </h2>

        <p className="text-lg md:text-xl text-[#4D3F31] leading-relaxed mb-4 max-w-2xl mx-auto">
          Existe um caminho de restauração. Existe cura para feridas que pareciam
          impossíveis de tratar. Este ebook pode ser o primeiro passo de uma nova
          fase na sua vida com Deus.
        </p>

        <p className="text-base text-[#4D3F31]/80 mb-10 max-w-xl mx-auto">
          Não espere a dor passar sozinha. Dê um passo intencional na direção da
          cura que Deus preparou para você.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <CTAButton id="final-cta-primary" size="large">
            Quero iniciar minha restauração
          </CTAButton>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#4D3F31]">
          <span className="flex items-center gap-2">
            <Check className="h-5 w-5 text-[#B8903F]" aria-hidden="true" strokeWidth={2.5} />
            Ebook Digital
          </span>
          <span className="flex items-center gap-2">
            <Check className="h-5 w-5 text-[#B8903F]" aria-hidden="true" strokeWidth={2.5} />
            Acesso Imediato
          </span>
          <span className="flex items-center gap-2">
            <Check className="h-5 w-5 text-[#B8903F]" aria-hidden="true" strokeWidth={2.5} />
            Base Bíblica
          </span>
          <span className="flex items-center gap-2">
            <Check className="h-5 w-5 text-[#B8903F]" aria-hidden="true" strokeWidth={2.5} />
            Compra Segura
          </span>
        </div>
      </div>
    </section>
  )
}
