/**
 * Adviser navigation entry
 *
 * This link intentionally lives in the global layout
 * to reflect Adviser as a first-class operating role.
 *
 * Do not move without revisiting role-based navigation.
 */
export type NavItem = {
  label: string
  href: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', href: '/wealth/dashboard' },
  { label: 'Entities',   href: '/wealth/entities' },
  { label: 'Portfolios', href: '/wealth/portfolios' },
  { label: 'Reporting',  href: '/wealth/reporting' },
]

