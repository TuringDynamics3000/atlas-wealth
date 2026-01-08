export type ShadowTrade = {
  instrument: string
  quantity: number
  price: number
}

export type ShadowExecutionResult = {
  execution_id: string
  intent_id: string
  trades: ShadowTrade[]
  cash_delta: number
  executed_at: string
}
