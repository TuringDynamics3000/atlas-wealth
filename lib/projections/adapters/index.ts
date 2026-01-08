import { entitiesMock } from '../mocks/entities'
import { portfoliosMock } from '../mocks/portfolios'
import { dashboardMock } from '../mocks/dashboard'

const ENTITIES = entitiesMock
const PORTFOLIOS = portfoliosMock
const DASHBOARD = dashboardMock

export const Projections = {
  entities: () => ENTITIES,
  portfolios: () => PORTFOLIOS,
  dashboard: () => DASHBOARD,
}
