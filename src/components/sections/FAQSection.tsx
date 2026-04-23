'use client'

import { useState } from 'react'
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
              className="rounded-xl border border-[#E9DFD0] overflow-hidden transition-all duration-300 hover:border-[#D8BE7A]/40"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left bg-[#FCFAF7] hover:bg-[#F8F3EB] transition-colors cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="text-[#3E342A] font-medium text-[15px] leading-snug">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[#D8BE7A] flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              <div
                id={`faq-answer-${item.id}`}
                role="region"
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 pt-2 text-[#6B5C4D] text-[15px] leading-relaxed">
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
