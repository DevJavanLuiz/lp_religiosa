import { Check } from 'lucide-react'
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
            className="group flex items-start gap-4 p-5 rounded-xl bg-[#F1E7D8] border border-[#C9B89F] hover:border-[#B8903F]/40 hover:shadow-md transition-all duration-300"
          >
            <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#B8903F]/15 flex items-center justify-center group-hover:bg-[#B8903F]/25 transition-colors">
              <Check className="h-3.5 w-3.5 text-[#B8903F]" aria-hidden="true" strokeWidth={2.5} />
            </span>
            <p className="text-[#2A2118] leading-relaxed text-[17px]">
              {point.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-2xl mx-auto text-center">
        <p className="text-[#4D3F31] italic text-lg leading-relaxed">
          &ldquo;Essas dores não são o fim da sua história. São o ponto de
          partida para uma jornada de restauração profunda com Deus.&rdquo;
        </p>
      </div>
    </SectionWrapper>
  )
}
