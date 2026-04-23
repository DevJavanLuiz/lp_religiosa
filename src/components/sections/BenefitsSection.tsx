import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTAButton } from '@/components/ui/CTAButton'
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
            className="group bg-white rounded-2xl p-7 border border-[#E9DFD0] hover:border-[#D8BE7A]/40 hover:shadow-lg hover:shadow-[#D8BE7A]/5 transition-all duration-300"
          >
            <span
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#D8BE7A]/10 text-2xl mb-5 group-hover:bg-[#D8BE7A]/20 group-hover:scale-110 transition-all duration-300"
              aria-hidden="true"
            >
              {benefit.icon}
            </span>
            <h3 className="font-heading text-lg font-semibold text-[#3E342A] mb-3 leading-snug">
              {benefit.title}
            </h3>
            <p className="text-[#6B5C4D] text-[15px] leading-relaxed">
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
