import { Card } from '@/components/ui/Card'
import { Table } from '@/components/ui/Table'
import { EmptyState } from '@/components/ui/EmptyState'

export default function EntitiesPage() {
  const rows = [
    ['Milne Family Trust', 'Trust', 'Active', '3 Portfolios'],
    ['HoldCo Pty Ltd', 'Company', 'Active', '2 Portfolios'],
    ['Personal', 'Individual', 'Active', '1 Portfolio'],
  ]

  return (
    <div className='space-y-6'>
      <h1 className='text-lg font-medium'>
        Entities
      </h1>

      <Card>
        <div className='p-6 space-y-4'>
          <div className='text-sm font-medium'>
            Entity Overview
          </div>

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
