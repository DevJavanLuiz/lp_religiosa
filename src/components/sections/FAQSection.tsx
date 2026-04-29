'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { faqItems } from '@/data/faq'

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <SectionWrapper id="faq" bgColor="white">
      <SectionHeading
        badge="Perguntas frequentes"
        title="Tire suas dúvidas"
        subtitle="Respostas para as perguntas mais comuns sobre o ebook Restauração da Alma."
      />

      <div className="max-w-3xl mx-auto space-y-3">
        {faqItems.map((item) => {
          const isOpen = openId === item.id
          return (
            <div
              key={item.id}
              className="rounded-xl border border-[#C9B89F] overflow-hidden transition-all duration-300 hover:border-[#B8903F]/40"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left bg-[#F1E7D8] hover:bg-[#E8DAC8] transition-colors cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="text-[#2A2118] font-medium text-[17px] leading-snug">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-[#B8903F] flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </button>

              <div
                id={`faq-answer-${item.id}`}
                role="region"
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 pt-2 text-[#4D3F31] text-[17px] leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
