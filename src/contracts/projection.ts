export type EvidenceRef = {
  id: string
  kind: 'decision' | 'projection' | 'policy'
}

export type ProjectionMeta = {
  version: 'v1'
  as_at: string
  latency_ms: number
  source: 'turingcore'
}

export type ProjectionEnvelope<T> = {
  meta: ProjectionMeta
  data: T
  evidence: EvidenceRef[]
}
