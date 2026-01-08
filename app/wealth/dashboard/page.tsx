import { Card } from '@/components/ui/Card'
import { StatBlock } from '@/components/ui/StatBlock'
import { Table } from '@/components/ui/Table'
import { EmptyState } from '@/components/ui/EmptyState'
import { EvidenceBadge } from '@/components/ui/EvidenceBadge'
import { Projections } from '@/lib/projections/adapters'

export default function DashboardPage() {
  const dashboard = Projections.dashboard()
  const kpi = dashboard.data

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-lg font-medium'>Dashboard</h1>
        <EvidenceBadge evidence={(dashboard as any).evidence} />
      </div>

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

      <EmptyState
        title='No alerts'
        description='There are no outstanding alerts requiring attention.'
      />
    </div>
  )
}
