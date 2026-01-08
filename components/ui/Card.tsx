import { memo } from 'react'

export const Card = memo(function Card({
  children,
  padded = false,
}: {
  children: React.ReactNode
  padded?: boolean
}) {
  return (
    <div className='rounded-lg border border-border bg-panel shadow-sm'>
      <div className={padded ? 'p-6' : ''}>
        {children}
      </div>
    </div>
  )
})
