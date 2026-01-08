export type EvidenceRef = {
  id: string
  kind: 'decision' | 'projection' | 'policy'
}

export type ProjectionEnvelope<T> = {
  data: T
  as_at: string
  evidence: EvidenceRef[]
}
