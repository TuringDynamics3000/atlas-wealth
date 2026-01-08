export function StatBlock({
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
      <div className='text-sm text-muted'>{label}</div>
      <div className='text-xl font-medium'>{value}</div>
      {subtext && (
        <div className='text-xs text-muted'>{subtext}</div>
      )}
    </div>
  )
}
