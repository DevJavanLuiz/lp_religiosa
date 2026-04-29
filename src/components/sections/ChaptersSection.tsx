import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { EbookIcon } from '@/components/ui/EbookIcon'
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
            className="group relative flex flex-col md:flex-row items-start gap-6 bg-[#F1E7D8] rounded-2xl p-7 md:p-8 border border-[#C9B89F] hover:border-[#B8903F]/50 hover:shadow-lg transition-all duration-300"
          >
            {/* Step number */}
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B8903F]/20 to-[#C49D52]/30 border border-[#B8903F]/20 group-hover:from-[#B8903F]/30 group-hover:to-[#C49D52]/40 transition-all duration-300">
              <span className="text-[#2A2118] font-heading text-xl font-bold">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#B8903F]/10 text-[#B8903F]" aria-hidden="true">
                  <EbookIcon name={chapter.icon} className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-[#2A2118]">
                    {chapter.title}
                  </h3>
                  <p className="text-[#B8903F] text-sm font-medium">
                    {chapter.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-[#4D3F31] leading-relaxed mt-3">
                {chapter.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
