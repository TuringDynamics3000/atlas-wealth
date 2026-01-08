import { memo } from 'react'

export const EmptyState = memo(function EmptyState({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className='flex flex-col items-center justify-center rounded-lg border border-border bg-panel p-10 text-center'>
      <div className='text-base font-medium'>{title}</div>
      <div className='mt-2 text-sm text-muted'>
        {description}
      </div>
    </div>
  )
})
