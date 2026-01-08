export type ExecutionMode = 'SHADOW' | 'LIVE'

export type ExecutionProvider =
  | 'BROKER_SIM'
  | 'BROKER_LIVE'
  | 'BANK_SIM'
  | 'BANK_LIVE'

export type ExecutionRequest = {
  intent_id: string
  provider: ExecutionProvider
  trades: any[]
  cash_delta: number
  mode: ExecutionMode
}
