import { Projection } from '../contracts/base'
import { DashboardKPI } from '../contracts/dashboard'

export const dashboardMock: Projection<DashboardKPI> & {
  evidence: {
    id: string
    type: 'projection'
    hash: string
    asAt: string
    source: 'mock'
  }[]
} = {
  meta: {
    asAt: '2026-01-08T00:00:00Z',
    source: 'mock',
  },
  data: {
    totalAssets: '.24B',
    activePortfolios: 18,
    cashAllocation: '12.4%',
  },
  evidence: [
    {
      id: 'proj-dashboard-v1',
      type: 'projection',
      hash: '0xDEMO123456',
      asAt: '2026-01-08T00:00:00Z',
      source: 'mock',
    },
  ],
}
