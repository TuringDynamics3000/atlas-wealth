export type EvidenceRef = {
  id: string
  kind: 'decision' | 'projection' | 'policy'
}

export function evidenceHref(e: EvidenceRef): string {
  return \/evidence/\\
}
