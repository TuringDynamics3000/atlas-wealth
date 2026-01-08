export type AcceptanceAction = 'ACCEPT' | 'REJECT' | 'DEFER'

type PartialAcceptance = {
  recommendation_id: string
  accepted: boolean

}

export type AdviceAcceptance = {
  advice_id: string
  action: AcceptanceAction
  partial: PartialAcceptance[]
  rationale: string
  timestamp: string
}

export function createAcceptance(
  advice_id: string,
  action: AcceptanceAction,
  partial: PartialAcceptance[],
  rationale: string
): AdviceAcceptance {
  return {
    advice_id,
    action,
    partial,
    rationale,
    timestamp: new Date().toISOString()
  }
}