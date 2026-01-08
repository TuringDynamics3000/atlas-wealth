import { Card } from '@/components/ui/Card'
import { Table } from '@/components/ui/Table'
import { StatBlock } from '@/components/ui/StatBlock'
import { EmptyState } from '@/components/ui/EmptyState'
import { Projections } from '@/lib/projections/adapters'

export default function PortfoliosPage() {
  const projection = Projections.portfolios()
  const rows = projection.data.map(p => [
    p.name,
    p.entity,
    p.strategy,
    p.value,
    p.status,
  ])

  return (
    <div className='space-y-6'>
      <h1 className='text-lg font-medium'>Portfolios</h1>

      <div className='grid grid-cols-3 gap-6'>
        <Card><div className='p-6'>
          <StatBlock label='Total Portfolios' value={String(rows.length)} />
        </div></Card>

        <Card><div className='p-6'>
          <StatBlock label='Assets Under Management' value='' />
        </div></Card>

        <Card><div className='p-6'>
          <StatBlock label='Strategies' value='4' />
        </div></Card>
      </div>

      <Card>
        <div className='p-6 space-y-4'>
          <div className='text-sm font-medium'>Portfolio Overview</div>

          {rows.length > 0 ? (
            <Table
              headers={[
                'Portfolio Name',
                'Entity',
                'Strategy',
                'Value',
                'Status',
              ]}
              rows={rows}
            />
          ) : (
            <EmptyState
              title='No portfolios'
              description='No portfolios have been created yet.'
            />
          )}
        </div>
      </Card>
    </div>
  )
}
