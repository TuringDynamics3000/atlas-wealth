import { ClientFinancialState } from '../state/client-financial-state'
import { detectDrift } from '../state/drift-detector'

type AdviceStatus = 'VALID' | 'STALE' | 'INVALID'

type AdviceMetadata = {
  advice_id: string
  policy_hash: string
  generated_at: string
  drift_threshold: number
}

type AdviceValidityResult = {
  status: AdviceStatus
  reasons: string[]
}

export function evaluateAdviceValidity(
  state: ClientFinancialState,
  meta: AdviceMetadata
): AdviceValidityResult {
  const drift = detectDrift(state, meta.drift_threshold)
  const reasons: string[] = []

  if (drift.status === 'DRIFT_DETECTED') {
    reasons.push('Client financial state has drifted')
  }

  const age = (Date.now() - Date.parse(meta.generated_at)) / (1000 * 60 * 60 * 24)

  if (age > 90) {
    reasons.push('Advice is older than 90 days')
  }

  if (reasons.length === 0) {
    return { status: 'VALID', reasons: [] }
  }

  if (reasons.length === 1) {
    return { status: 'STALE', reasons }
  }

  return { status: 'INVALID', reasons }
}