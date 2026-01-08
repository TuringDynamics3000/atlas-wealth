import { Card } from '@/components/ui/Card'
import { Table } from '@/components/ui/Table'
import { EmptyState } from '@/components/ui/EmptyState'

export default function ReportingPage() {
  const reports = [
    ['Quarterly Performance', 'All Entities', '2025 Q4', 'Available'],
    ['Asset Allocation', 'Demo Family Trust', 'Dec 2025', 'Available'],
    ['Risk Summary', 'Demo Holdings Pty Ltd', 'Dec 2025', 'Available'],
  ]

  return (
    <div className='space-y-6'>
      <h1 className='text-lg font-medium'>Reporting</h1>

      <Card>
        <div className='p-6 space-y-4'>
          <div className='text-sm font-medium'>Available Reports</div>

          {reports.length > 0 ? (
            <Table
              headers={['Report', 'Entity', 'Period', 'Status']}
              rows={reports}
            />
          ) : (
            <EmptyState
              title='No reports'
              description='No reports are currently available.'
            />
          )}
        </div>
      </Card>
    </div>
  )
}
