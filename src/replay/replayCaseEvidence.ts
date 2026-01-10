import { EvidenceNode } from '../evidence/graph/types';

export function replayCaseEvidence(
  caseId: string,
  nodes: EvidenceNode[]
): EvidenceNode[] {
  return nodes
    .filter(n => n.caseId === caseId)
    .sort((a, b) => a.recordedAt.localeCompare(b.recordedAt));
}
