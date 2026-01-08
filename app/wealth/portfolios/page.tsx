import { Card } from '@/components/ui/Card'
import { Table } from '@/components/ui/Table'
import { StatBlock } from '@/components/ui/StatBlock'
import { EmptyState } from '@/components/ui/EmptyState'

export default function PortfoliosPage() {
  const rows = [
    ['Balanced Growth', 'Demo Family Trust', 'Balanced', '', 'Active'],
    ['Capital Preservation', 'Demo Holdings Pty Ltd', 'Defensive', '', 'Active'],
    ['Demo Individual Long-Term', 'Demo Individual', 'Growth', '', 'Active'],
  ]

  return (
    <div className='space-y-6'>
      <h1 className='text-lg font-medium'>
        Portfolios
      </h1>

      {/* Portfolio Summary */}
      <div className='grid grid-cols-3 gap-6'>
        <Card>
          <div className='p-6'>
            <StatBlock
              label='Total Portfolios'
              value='6'
            />
          </div>
        </Card>

        <Card>
          <div className='p-6'>
            <StatBlock
              label='Assets Under Management'
              value=''
            />
          </div>
        </Card>

        <Card>
          <div className='p-6'>
            <StatBlock
              label='Strategies'
              value='4'
            />
          </div>
        </Card>
      </div>

      {/* Portfolio List */}
      <Card>
        <div className='p-6 space-y-4'>
          <div className='text-sm font-medium'>
            Portfolio Overview
          </div>

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

