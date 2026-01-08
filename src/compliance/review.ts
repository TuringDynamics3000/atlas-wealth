export type ComplianceResult = 'PASS' | 'REWORK' | 'FAIL'

type ComplianceReview = {
  advice_id: string
  result: ComplianceResult
  rework_count: number
  missing_sections: string[]
  inserted_clauses: string[]
  review_codes: string[]
  timestamp: string
}

export function createReview(
  advice_id: string
  result: ComplianceResult
  rework_count: number
  missing_sections: string[]
  inserted_clauses: string[]
  review_codes: string[]
) {
  return {
    advice_id,
    result,
    rework_count,
    missing_sections,
    inserted_clauses,
    review_codes,
    timestamp: new Date().toISOString()
  }
}