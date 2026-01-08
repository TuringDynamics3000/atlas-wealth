import { getAuthContext } from '../auth/context'
import { fetchProjection } from '../turingcore/client'

export async function getDashboardProjection() {
  const auth = getAuthContext()
  return fetchProjection('dashboard', auth)
}

export async function getEntitiesProjection() {
  const auth = getAuthContext()
  return fetchProjection('entities', auth)
}

export async function getPortfoliosProjection() {
  const auth = getAuthContext()
  return fetchProjection('portfolios', auth)
}
