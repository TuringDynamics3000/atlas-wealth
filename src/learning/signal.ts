export type LearningSignalType = 'ADVICE_VALIDITY'|'CLIENT_ACCEPTANCE'
|'COMPLIANCE_REVIEW'

export type LearningSignal = {
  signal_id: string
  type: LearningSignalType
  reference_id: string
  outcome: string
  metadata: Record<string, string | number | boolean>
  timestamp: string
}

export function createLearningSignal(
  type: LearningSignalType,
  reference_id: string
, outcome: string
, metadata: Record<string, any>

) {
  return {
    signal_id: crypto.randomUUID(),
    type,
    reference_id,
    outcome,
    metadata,
    timestamp: new Date().toISOString()
  }
}