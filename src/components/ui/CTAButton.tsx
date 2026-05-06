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
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B8903F] cursor-pointer'

  const variants = {
    primary:
      'bg-[#B8903F] text-[#2A2118] hover:bg-[#C49D52] hover:shadow-lg hover:shadow-[#B8903F]/20 hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-transparent text-[#2A2118] border-2 border-[#B8903F] hover:bg-[#B8903F]/10 hover:shadow-md',
  }

  const sizes = {
    default: 'px-8 py-3.5 text-base',
    large: 'px-10 py-4.5 text-lg',
  }

  const isExternal = href.startsWith('http')
  const isHotmartCheckout = href.includes('pay.hotmart.com')
  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    isHotmartCheckout && 'hotmart-fb hotmart__button-checkout',
    className
  )

  if (isExternal) {
    return (
      <a href={href} id={id} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} id={id} className={classes}>
      {children}
    </Link>
  )
}
