import { Projection } from '../contracts/base'
import { DashboardKPI } from '../contracts/dashboard'

export const dashboardMock: Projection<DashboardKPI> = {
  meta: {
    asAt: '2026-01-08T00:00:00Z',
    source: 'mock',
  },
  data: {
    totalAssets: '.24B',
    activePortfolios: 18,
    cashAllocation: '12.4%',
  },
}
