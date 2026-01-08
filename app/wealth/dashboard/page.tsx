import { Card } from '@/components/ui/Card'
import { StatBlock } from '@/components/ui/StatBlock'
import { Table } from '@/components/ui/Table'
import { EmptyState } from '@/components/ui/EmptyState'

export default function DashboardPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-lg font-medium'>
        Dashboard
      </h1>

      {/* KPI Row */}
      <div className='grid grid-cols-3 gap-6'>
        <Card>
          <div className='p-6'>
            <StatBlock
              label='Total Assets'
              value='.24B'
              subtext='Across all entities'
            />
          </div>
        </Card>

        <Card>
          <div className='p-6'>
            <StatBlock
              label='Active Portfolios'
              value='18'
            />
          </div>
        </Card>

        <Card>
          <div className='p-6'>
            <StatBlock
              label='Cash Allocation'
              value='12.4%'
            />
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <div className='p-6 space-y-4'>
          <div className='text-sm font-medium'>
            Recent Activity
          </div>

          <Table
            headers={['Date', 'Entity', 'Action', 'Status']}
            rows={[
              ['2026-01-08', 'Milne Family Trust', 'Rebalance Review', 'Pending'],
              ['2026-01-07', 'HoldCo Pty Ltd', 'Allocation Update', 'Approved'],
              ['2026-01-06', 'Personal', 'Portfolio Created', 'Completed'],
            ]}
          />
        </div>
      </Card>

      {/* Empty Section Placeholder */}
      <EmptyState
        title='No alerts'
        description='There are no outstanding alerts requiring attention.'
      />
    </div>
  )
}
