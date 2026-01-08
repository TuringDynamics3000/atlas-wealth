export type SourceType = 'XPIAN' | 'BANK' | 'BROKER' | 'MANUAL'

export type AccountBalance = {
  account_id: string
  balance: number
  currency: string
  source: SourceType
  as_of: string
}

export type ClientFinancialState = {
  client_id: string
  accounts: AccountBalance[]
  last_updated: string
}