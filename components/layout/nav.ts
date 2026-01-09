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
/* Adviser UX added */
<li>
  <a href="/adviser" className="hover:underline">Adviser Dashboard</a>
</li>
<li>
  <a href="/adviser/clients" className="hover:underline">Clients</a>
</li>
