import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { chapters } from '@/data/ebook'

export function ChaptersSection() {
  return (
    <SectionWrapper id="capitulos" bgColor="white">
      <SectionHeading
        badge="Os 5 Pilares"
        title="Os 5 passos para a restauração da sua alma"
        subtitle="Cada capítulo é um passo intencional na direção da cura, construído sobre fundamentos bíblicos e sabedoria espiritual."
      />

      <div className="space-y-6 max-w-4xl mx-auto">
        {chapters.map((chapter, index) => (
          <article
            key={chapter.id}
            className="group relative flex flex-col md:flex-row items-start gap-6 bg-[#FCFAF7] rounded-2xl p-7 md:p-8 border border-[#E9DFD0] hover:border-[#D8BE7A]/50 hover:shadow-lg transition-all duration-300"
          >
            {/* Step number */}
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D8BE7A]/20 to-[#E6CF96]/30 border border-[#D8BE7A]/20 group-hover:from-[#D8BE7A]/30 group-hover:to-[#E6CF96]/40 transition-all duration-300">
              <span className="text-[#3E342A] font-heading text-xl font-bold">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl" aria-hidden="true">
                  {chapter.icon}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-[#3E342A]">
                    {chapter.title}
                  </h3>
                  <p className="text-[#D8BE7A] text-sm font-medium">
                    {chapter.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-[#6B5C4D] leading-relaxed mt-3">
                {chapter.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
