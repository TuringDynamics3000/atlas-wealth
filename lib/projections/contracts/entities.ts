export type EntitySummary = {
  name: string
  type: 'Trust' | 'Company' | 'Individual'
  status: 'Active' | 'Inactive'
  portfolios: number
}
