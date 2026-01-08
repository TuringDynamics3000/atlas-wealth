'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='text-center space-y-4 max-w-md'>
        <div className='text-lg font-medium'>Something went wrong</div>
        <div className='text-sm text-muted'>
          An unexpected error occurred while loading this view.
        </div>

        <div className='flex justify-center gap-4'>
          <button
            onClick={() => reset()}
            className='rounded-md border border-border px-4 py-2 text-sm'
          >
            Retry
          </button>

          <Link
            href='/wealth/dashboard'
            className='rounded-md bg-border px-4 py-2 text-sm'
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
