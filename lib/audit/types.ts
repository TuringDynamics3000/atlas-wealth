export type EvidenceRef = {
  id: string
  type: 'decision' | 'projection' | 'policy'
  hash: string
  asAt: string
  source: 'engine' | 'mock'
}

export type WithEvidence<T> = {
  data: T
  evidence?: EvidenceRef[]
}
