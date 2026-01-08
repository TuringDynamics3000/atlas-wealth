export type BrokerCertResult = {
  order_hash: string
  instrument: string
  quantity: number
  side: 'BUY' | 'SELL'
  checks: {
    instrument_valid: boolean
    margin_ok: boolean
    account_ok: boolean
  }
  timestamp: string
}
