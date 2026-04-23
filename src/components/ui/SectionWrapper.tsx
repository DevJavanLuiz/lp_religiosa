import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  bgColor?: 'white' | 'warmWhite' | 'lightBeige' | 'highlight'
}

const bgMap = {
  white: 'bg-white',
  warmWhite: 'bg-[#FCFAF7]',
  lightBeige: 'bg-[#F3EBDD]',
  highlight: 'bg-[#F8F3EB]',
}

export function SectionWrapper({
  children,
  className,
  id,
  bgColor = 'white',
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('py-20 md:py-28 px-4 sm:px-6 lg:px-8', bgMap[bgColor], className)}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}
