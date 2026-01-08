import { NAV_ITEMS } from './nav'
import { SidebarItem } from './SidebarItem'

export default function Sidebar() {
  return (
    <aside className='w-64 border-r border-border bg-panel'>
      <nav className='flex flex-col gap-1 p-4'>
        {NAV_ITEMS.map(item => (
          <SidebarItem
            key={item.href}
            label={item.label}
            href={item.href}
          />
        ))}
      </nav>
    </aside>
  )
}
