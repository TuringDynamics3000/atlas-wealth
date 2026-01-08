import { Projection } from '../contracts/base'
import { PortfolioSummary } from '../contracts/portfolios'

export const portfoliosMock: Projection<PortfolioSummary[]> = {
  meta: {
    asAt: '2026-01-08T00:00:00Z',
    source: 'mock',
  },
  data: [
    { name: 'Balanced Growth', entity: 'Demo Family Trust', strategy: 'Balanced', value: '', status: 'Active' },
    { name: 'Capital Preservation', entity: 'Demo Holdings Pty Ltd', strategy: 'Defensive', value: '', status: 'Active' },
    { name: 'Demo Individual Long-Term', entity: 'Demo Individual', strategy: 'Growth', value: '', status: 'Active' },
  ],
}

