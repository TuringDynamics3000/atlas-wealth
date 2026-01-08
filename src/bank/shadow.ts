import { ShadowBankResult } from './contracts'

export function runShadowBank(
  intentId: string,
  payload: any
): ShadowBankResult {

  const legs = (payload.legs || []).map((l: any) => ({
    account: l.account,
    direction: l.direction,
    amount: l.amount,
    currency: l.currency || 'AUD'
  }))

  const net = legs.reduce((sum: number, l: any) => {
    return l.direction === 'DEBIT' ? sum - l.amount : sum + l.amount
  }, 0)

  return {
    shadow_id: crypto.randomUUID(),
    intent_id: intentId,
    legs,
    net_delta: net,
    simulated_at: new Date().toISOString()
  }
}
