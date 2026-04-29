import { CircleCheck } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { audienceItems } from '@/data/ebook'

export function AudienceSection() {
  return (
    <SectionWrapper id="para-quem" bgColor="white">
      <SectionHeading
        badge="Para quem é"
        title="Este ebook é para você que..."
        subtitle="Material pensado para quem busca um encontro verdadeiro com a cura que vem de Deus."
      />

      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {audienceItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 p-5 rounded-xl bg-[#F1E7D8] border border-[#C9B89F]"
            >
              <span className="mt-0.5 flex-shrink-0">
                <CircleCheck className="h-5 w-5 text-[#B8903F]" aria-hidden="true" strokeWidth={2} />
              </span>
              <p className="text-[#2A2118] text-[17px] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
