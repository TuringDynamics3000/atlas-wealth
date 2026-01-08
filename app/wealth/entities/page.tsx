import { Card } from '@/components/ui/Card'
import { Table } from '@/components/ui/Table'
import { EmptyState } from '@/components/ui/EmptyState'
import { Projections } from '@/lib/projections/adapters'

export default function EntitiesPage() {
  const projection = Projections.entities()
  const rows = projection.data.map(e => [
    e.name,
    e.type,
    e.status,
    e.portfolios + ' Portfolios',
  ])

  return (
    <div className='space-y-6'>
      <h1 className='text-lg font-medium'>Entities</h1>

      <Card>
        <div className='p-6 space-y-4'>
          <div className='text-sm font-medium'>Entity Overview</div>

          {rows.length > 0 ? (
            <Table
              headers={['Entity Name', 'Type', 'Status', 'Portfolios']}
              rows={rows}
            />
          ) : (
            <EmptyState
              title='No entities'
              description='No entities have been created yet.'
            />
          )}
        </div>
      </Card>
    </div>
  )
}
