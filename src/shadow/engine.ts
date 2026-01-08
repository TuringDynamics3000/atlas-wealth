import { ShadowExecutionResult } from '../contracts/shadow-execution'

export function runShadowExecution(
  intentId: string,
  payload: any
): ShadowExecutionResult {

  // v3.3: deterministic, side-effect free simulation
  const trades = (payload.trades || []).map((t: any) => ({
    instrument: t.instrument,
    quantity: t.quantity,
    price: t.price || 100
  }))

  const cashDelta = trades.reduce(
    (sum: number, t: any) => sum - t.quantity * t.price,
    0
  )

  return {
    execution_id: crypto.randomUUID(),
    intent_id: intentId,
    trades,
    cash_delta: cashDelta,
    executed_at: new Date().toISOString()
  }
}
