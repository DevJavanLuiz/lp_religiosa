import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTAButton } from '@/components/ui/CTAButton'
import { EbookIcon } from '@/components/ui/EbookIcon'
import { benefits } from '@/data/ebook'

export function BenefitsSection() {
  return (
    <SectionWrapper id="conteudo" bgColor="highlight">
      <SectionHeading
        badge="O que você vai encontrar"
        title="Um caminho claro para a restauração"
        subtitle="Cada página deste ebook foi escrita com o propósito de trazer luz, clareza e direção para sua jornada de cura."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit) => (
          <article
            key={benefit.id}
            className="group bg-white rounded-2xl p-7 border border-[#C9B89F] hover:border-[#B8903F]/40 hover:shadow-lg hover:shadow-[#B8903F]/5 transition-all duration-300"
          >
            <span
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#B8903F]/10 mb-5 text-[#B8903F] group-hover:bg-[#B8903F]/20 group-hover:scale-110 transition-all duration-300"
              aria-hidden="true"
            >
              <EbookIcon name={benefit.icon} className="h-6 w-6" strokeWidth={2} />
            </span>
            <h3 className="font-heading text-lg font-semibold text-[#2A2118] mb-3 leading-snug">
              {benefit.title}
            </h3>
            <p className="text-[#4D3F31] text-[17px] leading-relaxed">
              {benefit.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-14 text-center">
        <CTAButton id="benefits-cta">
          Quero acessar o ebook agora
        </CTAButton>
      </div>
    </SectionWrapper>
  )
}
