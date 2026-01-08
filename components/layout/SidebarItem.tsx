'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function SidebarItem({
  label,
  href,
}: {
  label: string
  href: string
}) {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Link
      href={href}
      className={[
        'block rounded-md px-3 py-2 text-sm transition-colors',
        active
          ? 'bg-border text-foreground font-medium'
          : 'text-muted hover:bg-border/50 hover:text-foreground',
      ].join(' ')}
    >
      {label}
    </Link>
  )
}
