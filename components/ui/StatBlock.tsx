import { memo } from 'react'

export const StatBlock = memo(function StatBlock({
  label,
  value,
  subtext,
}: {
  label: string
  value: string
  subtext?: string
}) {
  return (
    <div className='space-y-1'>
      <div className='text-xs uppercase tracking-wide text-muted'>
        {label}
      </div>
      <div className='text-xl font-medium leading-tight'>
        {value}
      </div>
      {subtext && (
        <div className='text-xs text-muted'>
          {subtext}
        </div>
      )}
    </div>
  )
})
