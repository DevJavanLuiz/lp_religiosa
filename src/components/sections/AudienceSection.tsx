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
              className="flex items-start gap-4 p-5 rounded-xl bg-[#FCFAF7] border border-[#E9DFD0]"
            >
              <span className="mt-0.5 flex-shrink-0">
                <svg
                  className="w-5 h-5 text-[#D8BE7A]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p className="text-[#3E342A] text-[15px] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
