import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='text-center space-y-4'>
        <div className='text-lg font-medium'>Page not found</div>
        <div className='text-sm text-muted'>
          The page you are looking for does not exist.
        </div>
        <Link
          href='/wealth/dashboard'
          className='text-sm text-accent underline'
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  )
}
