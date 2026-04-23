import Image from 'next/image'
import { CTAButton } from '@/components/ui/CTAButton'
import { EBOOK_TITLE, EBOOK_SUBTITLE } from '@/lib/constants'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-[#FCFAF7] via-[#F8F3EB] to-[#F3EBDD]"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#D8BE7A]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#E6CF96]/8 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D8BE7A]/15 border border-[#D8BE7A]/30 text-sm font-medium text-[#3E342A] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D8BE7A] animate-pulse" />
              Ebook Digital · Acesso Imediato
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#3E342A] leading-[1.1] mb-4">
              {EBOOK_TITLE}
            </h1>

            <p className="text-lg md:text-xl text-[#6B5C4D] font-medium leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              {EBOOK_SUBTITLE}
            </p>

            <p className="text-base text-[#6B5C4D]/80 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Se você carrega feridas que ninguém vê, se sente presa a dores que
              não consegue explicar — existe um caminho. Existe cura para o que
              você sente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <CTAButton id="hero-cta-primary" size="large">
                Quero iniciar minha restauração
              </CTAButton>
              <CTAButton
                id="hero-cta-secondary"
                variant="secondary"
                href="#conteudo"
              >
                Conhecer o conteúdo
              </CTAButton>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-[#6B5C4D]">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#D8BE7A]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                PDF de alta qualidade
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#D8BE7A]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Acesso imediato
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#D8BE7A]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Base bíblica
              </span>
            </div>
          </div>

          {/* Ebook Cover */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div
                className="absolute inset-0 bg-[#D8BE7A]/20 blur-3xl rounded-full scale-110"
                aria-hidden="true"
              />
              <div className="relative drop-shadow-2xl">
                <Image
                  src="/images/ebook-cover.png"
                  alt="Capa do ebook Restauração da Alma — 5 passos espirituais para cura emocional e identidade em Deus"
                  width={420}
                  height={560}
                  preload
                  className="rounded-lg w-[280px] sm:w-[340px] md:w-[400px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
          <path
            d="M0 60V30C360 0 720 0 1080 30C1260 45 1350 52.5 1440 60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
