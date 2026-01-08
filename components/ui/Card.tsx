export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className='rounded-lg border border-border bg-panel shadow-sm'>
      {children}
    </div>
  )
}
