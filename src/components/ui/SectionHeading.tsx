import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered ? 'text-center' : '', 'mb-14', className)}>
      {badge && (
        <span className="inline-block mb-4 px-5 py-2 rounded-full bg-[#B8903F]/15 text-[#2A2118] text-sm font-medium tracking-wide uppercase border border-[#B8903F]/30">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-[44.4px] leading-tight text-[#2A2118] font-semibold">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-[#4D3F31] max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex justify-center">
        <span className="block w-16 h-0.5 bg-gradient-to-r from-transparent via-[#B8903F] to-transparent" />
      </div>
    </div>
  )
}
