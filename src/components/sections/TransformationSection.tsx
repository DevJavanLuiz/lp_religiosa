import { Check, X } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTAButton } from '@/components/ui/CTAButton'
import { transformations } from '@/data/ebook'

export function TransformationSection() {
  return (
    <SectionWrapper id="transformacao" bgColor="highlight">
      <SectionHeading
        badge="Transformação real"
        title="De onde você está para onde Deus quer te levar"
        subtitle="Este ebook não promete milagres instantâneos — ele oferece um caminho bíblico, claro e profundo para iniciar a sua restauração."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Before column */}
        <div className="space-y-4">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2A2118]/5 text-[#4D3F31] text-sm font-medium">
              <X className="h-4 w-4" aria-hidden="true" strokeWidth={2} />
              Antes
            </span>
          </div>
          {transformations.map((item, index) => (
            <div
              key={`before-${index}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/60 border border-[#C9B89F] text-[#4D3F31]"
            >
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#9F845F]" aria-hidden="true" />
              <span className="text-[17px]">{item.before}</span>
            </div>
          ))}
        </div>

        {/* After column */}
        <div className="space-y-4">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B8903F]/15 text-[#2A2118] text-sm font-medium">
              <Check className="h-4 w-4 text-[#B8903F]" aria-hidden="true" strokeWidth={2.5} />
              Depois
            </span>
          </div>
          {transformations.map((item, index) => (
            <div
              key={`after-${index}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#B8903F]/30 text-[#2A2118] shadow-sm"
            >
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#B8903F]" aria-hidden="true" />
              <span className="text-[17px] font-medium">{item.after}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 text-center">
        <CTAButton id="transformation-cta">
          Quero dar esse passo com Deus
        </CTAButton>
      </div>
    </SectionWrapper>
  )
}
