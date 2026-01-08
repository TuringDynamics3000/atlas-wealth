import { ShadowExecutionResult } from '../contracts/shadow-execution'

export async function generateShadowExecutionEvidence(
  result: ShadowExecutionResult,
  session: any
) {
  const evidence = {
    evidence_id: crypto.randomUUID(),
    intent_id: result.intent_id,
    execution_id: result.execution_id,

    tenant_id: session.tenantId,
    executed_by: session.user?.email,
    executed_at: result.executed_at,

    trades: result.trades,
    cash_delta: result.cash_delta,

    execution_mode: 'SHADOW'
  }

  console.log('[SHADOW_EXECUTION_EVIDENCE]', JSON.stringify(evidence))
  return evidence
}
