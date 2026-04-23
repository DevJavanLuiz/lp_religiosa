import Link from 'next/link'
import { cn } from '@/lib/utils'
import { CHECKOUT_URL } from '@/lib/constants'

interface CTAButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'large'
  className?: string
  id?: string
  href?: string
}

export function CTAButton({
  children,
  variant = 'primary',
  size = 'default',
  className,
  id,
  href = CHECKOUT_URL,
}: CTAButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D8BE7A] cursor-pointer'

  const variants = {
    primary:
      'bg-[#D8BE7A] text-[#3E342A] hover:bg-[#E6CF96] hover:shadow-lg hover:shadow-[#D8BE7A]/20 hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-transparent text-[#3E342A] border-2 border-[#D8BE7A] hover:bg-[#D8BE7A]/10 hover:shadow-md',
  }

  const sizes = {
    default: 'px-8 py-3.5 text-base',
    large: 'px-10 py-4.5 text-lg',
  }

  return (
    <Link
      href={href}
      id={id}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  )
}
