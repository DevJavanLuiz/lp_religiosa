import {
  BookOpen,
  Church,
  Crown,
  Heart,
  KeyRound,
  Leaf,
  Link2,
  LockKeyholeOpen,
  Shield,
  Sparkles,
  type LucideIcon,
  type LucideProps,
} from 'lucide-react'
import type { EbookIconName } from '@/types'

const iconMap: Record<EbookIconName, LucideIcon> = {
  'book-open': BookOpen,
  church: Church,
  crown: Crown,
  heart: Heart,
  'key-round': KeyRound,
  leaf: Leaf,
  link: Link2,
  'lock-open': LockKeyholeOpen,
  shield: Shield,
  sparkles: Sparkles,
}

interface EbookIconProps extends LucideProps {
  name: EbookIconName
}

export function EbookIcon({ name, ...props }: EbookIconProps) {
  const Icon = iconMap[name]

  return <Icon aria-hidden="true" {...props} />
}
