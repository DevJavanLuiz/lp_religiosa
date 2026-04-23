import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { painPoints } from '@/data/ebook'

export function PainSection() {
  return (
    <SectionWrapper id="identificacao" bgColor="white">
      <SectionHeading
        badge="Você se identifica?"
        title="Talvez você reconheça algo aqui"
        subtitle="Se ao menos uma dessas frases toca o seu coração, este ebook foi pensado para você."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {painPoints.map((point) => (
          <div
            key={point.id}
            className="group flex items-start gap-4 p-5 rounded-xl bg-[#FCFAF7] border border-[#E9DFD0] hover:border-[#D8BE7A]/40 hover:shadow-md transition-all duration-300"
          >
            <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#D8BE7A]/15 flex items-center justify-center group-hover:bg-[#D8BE7A]/25 transition-colors">
              <svg
                className="w-3.5 h-3.5 text-[#D8BE7A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </span>
            <p className="text-[#3E342A] leading-relaxed text-[15px]">
              {point.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-2xl mx-auto text-center">
        <p className="text-[#6B5C4D] italic text-lg leading-relaxed">
          &ldquo;Essas dores não são o fim da sua história. São o ponto de
          partida para uma jornada de restauração profunda com Deus.&rdquo;
        </p>
      </div>
    </SectionWrapper>
  )
}
