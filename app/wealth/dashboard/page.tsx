import { Card } from '@/components/ui/Card'
import { StatBlock } from '@/components/ui/StatBlock'
import { Table } from '@/components/ui/Table'
import { EmptyState } from '@/components/ui/EmptyState'
import { Projections } from '@/lib/projections/adapters'

export default function DashboardPage() {
  const dashboard = Projections.dashboard()
  const kpi = dashboard.data

  const activityRows = [
    ['2026-01-08', 'Demo Family Trust', 'Rebalance Review', 'Pending'],
    ['2026-01-07', 'Demo Holdings Pty Ltd', 'Allocation Update', 'Approved'],
    ['2026-01-06', 'Demo Individual', 'Portfolio Created', 'Completed'],
  ]

  return (
    <div className='space-y-6'>
      <h1 className='text-lg font-medium'>Dashboard</h1>

      <div className='grid grid-cols-3 gap-6'>
        <Card><div className='p-6'>
          <StatBlock label='Total Assets' value={kpi.totalAssets} />
        </div></Card>

        <Card><div className='p-6'>
          <StatBlock label='Active Portfolios' value={String(kpi.activePortfolios)} />
        </div></Card>

        <Card><div className='p-6'>
          <StatBlock label='Cash Allocation' value={kpi.cashAllocation} />
        </div></Card>
      </div>

      <Card>
        <div className='p-6 space-y-4'>
          <div className='text-sm font-medium'>Recent Activity</div>
          <Table
            headers={['Date', 'Entity', 'Action', 'Status']}
            rows={activityRows}
          />
        </div>
      </Card>

      <EmptyState
        title='No alerts'
        description='There are no outstanding alerts requiring attention.'
      />
    </div>
  )
}
