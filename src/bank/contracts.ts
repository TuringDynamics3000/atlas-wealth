export type ShadowCashLeg = {
  account: string
  direction: 'DEBIT' | 'CREDIT'
  amount: number
  currency: string
}

export type ShadowBankResult = {
  shadow_id: string
  intent_id: string
  legs: ShadowCashLeg[]
  net_delta: number
  simulated_at: string
}
