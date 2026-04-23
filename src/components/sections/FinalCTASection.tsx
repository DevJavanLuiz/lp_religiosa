import { CTAButton } from '@/components/ui/CTAButton'

export function FinalCTASection() {
  return (
    <section
      id="cta-final"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3EBDD] via-[#F8F3EB] to-[#FCFAF7] overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D8BE7A]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Decorative cross */}
        <div className="mb-8 flex justify-center" aria-hidden="true">
          <span className="text-4xl opacity-60">✝</span>
        </div>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E342A] leading-tight mb-6">
          A dor que você carrega não precisa definir quem você é
        </h2>

        <p className="text-lg md:text-xl text-[#6B5C4D] leading-relaxed mb-4 max-w-2xl mx-auto">
          Existe um caminho de restauração. Existe cura para feridas que pareciam
          impossíveis de tratar. Este ebook pode ser o primeiro passo de uma nova
          fase na sua vida com Deus.
        </p>

        <p className="text-base text-[#6B5C4D]/80 mb-10 max-w-xl mx-auto">
          Não espere a dor passar sozinha. Dê um passo intencional na direção da
          cura que Deus preparou para você.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <CTAButton id="final-cta-primary" size="large">
            Quero iniciar minha restauração
          </CTAButton>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#6B5C4D]">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#D8BE7A]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Ebook Digital
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#D8BE7A]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Acesso Imediato
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#D8BE7A]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Base Bíblica
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#D8BE7A]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Compra Segura
          </span>
        </div>
      </div>
    </section>
  )
}
