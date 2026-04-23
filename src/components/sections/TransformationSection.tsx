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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3E342A]/5 text-[#6B5C4D] text-sm font-medium">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Antes
            </span>
          </div>
          {transformations.map((item, index) => (
            <div
              key={`before-${index}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/60 border border-[#E9DFD0] text-[#6B5C4D]"
            >
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#CBB89D]" aria-hidden="true" />
              <span className="text-[15px]">{item.before}</span>
            </div>
          ))}
        </div>

        {/* After column */}
        <div className="space-y-4">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D8BE7A]/15 text-[#3E342A] text-sm font-medium">
              <svg className="w-4 h-4 text-[#D8BE7A]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Depois
            </span>
          </div>
          {transformations.map((item, index) => (
            <div
              key={`after-${index}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#D8BE7A]/30 text-[#3E342A] shadow-sm"
            >
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#D8BE7A]" aria-hidden="true" />
              <span className="text-[15px] font-medium">{item.after}</span>
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
