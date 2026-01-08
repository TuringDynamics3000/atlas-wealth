export type IntentStatus = 'CREATED' | 'ELEIGIBLE' | 'BLOCKED'

export type AdviceIntent = {
  intent_id: string
  advice_id: string
  acceptance_id: string
  accepted_recommendations: string[]
  status: IntentStatus
  created_at: string
}

export function createIntent(
  advice_id: string
, acceptance_id: string
, accepted_recommendations: string[]
): AdviceIntent {
  return {
    intent_id: crypto.randomUUID(),
    advice_id: advice_id,
    acceptance_id: acceptance_id,
    accepted_recommendations: accepted_recommendations,
    status: 'ELEIGIBLE',
    created_at: new Date().toISOString()
  }
}