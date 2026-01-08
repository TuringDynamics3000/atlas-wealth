import { Projection } from '../contracts/base'
import { EntitySummary } from '../contracts/entities'

export const entitiesMock: Projection<EntitySummary[]> = {
  meta: {
    asAt: '2026-01-08T00:00:00Z',
    source: 'mock',
  },
  data: [
    { name: 'Demo Family Trust', type: 'Trust', status: 'Active', portfolios: 3 },
    { name: 'Demo Holdings Pty Ltd', type: 'Company', status: 'Active', portfolios: 2 },
    { name: 'Demo Individual', type: 'Individual', status: 'Active', portfolios: 1 },
  ],
}

