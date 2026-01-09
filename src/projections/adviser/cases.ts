import "server-only";
import { MOCK_CASES } from "../../../lib/adviser/mocks";
import { AdviserAdviceCaseProjection } from "./types";

export function getAdviceCaseProjection(caseId: string): AdviserAdviceCaseProjection | null {
  const c = (MOCK_CASES as any)[caseId];
  if (!c) return null;

  return {
    asOf: new Date().toISOString(),
    caseId: c.caseId,
    clientId: c.clientId,
    clientName: c.clientName,
    riskBand: c.riskBand,
    suitability: c.suitability,
    evidence: c.evidence,
    hasOverride: (c.overrides && c.overrides.length > 0) ? true : false,
  };
}
