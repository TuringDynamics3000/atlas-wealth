import { ExecutionIntent } from '../boundary/types';

export function generateExecutionIntent(
  caseId: string,
  portfolioHash: string,
  evidenceBundleHash: string,
  authority: {
    tenantId: string;
    licenseeId: string;
    adviserId: string;
  }
): ExecutionIntent {
  return {
    intentId: `intent-${caseId}`,
    caseId,
    authority,
    portfolioHash,
    evidenceBundleHash,
    executionMode: 'SIMULATED',
    generatedAt: new Date().toISOString(),
  };
}
