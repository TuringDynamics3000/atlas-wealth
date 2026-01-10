import { EvidenceNode } from '../graph/types';

export interface EvidenceBundle {
  caseId: string;
  bundleHash: string;
  nodes: EvidenceNode[];
  generatedAt: string;
}

export function buildEvidenceBundle(
  caseId: string,
  nodes: EvidenceNode[]
): EvidenceBundle {
  const bundleHash = `bundle-${caseId}-${nodes.length}`;

  return {
    caseId,
    bundleHash,
    nodes,
    generatedAt: new Date().toISOString(),
  };
}
