import "server-only";

export type SuitabilityStatus = "GREEN" | "AMBER" | "RED";
export type RiskBand = "DEFENSIVE" | "BALANCED" | "GROWTH" | "AGGRESSIVE";

export interface AdviserWorkQueueItem {
  id: string;
  clientId: string;
  clientName: string;
  kind: "ADVICE_DRAFT" | "SUITABILITY_BORDERLINE" | "ACCEPTANCE_PENDING" | "DRIFT_ALERT";
  status: "OPEN" | "BLOCKED" | "WAITING_ON_CLIENT" | "WAITING_ON_REVIEW";
  dueLabel?: string;
  route: string;
  summary: string;
}

export interface AdviserWorkQueueProjection {
  asOf: string;
  summary: {
    open: number;
    blocked: number;
    waitingOnClient: number;
    waitingOnReview: number;
  };
  items: AdviserWorkQueueItem[];
}

export interface AdviserClientRow {
  clientId: string;
  name: string;
  riskBand: RiskBand;
  suitability: SuitabilityStatus;
  lastAdviceStatus: "NONE" | "DRAFT" | "ISSUED";
  acceptanceStatus: "NONE" | "PENDING" | "JOINT_PENDING" | "COOLING_OFF" | "COMPLETED";
}

export interface AdviserAdviceCaseProjection {
  asOf: string;
  caseId: string;
  clientId: string;
  clientName: string;
  riskBand: RiskBand;
  suitability: { status: SuitabilityStatus; reasons: string[] };
  evidence: { factFindHash?: string; riskProfileHash?: string; universeHash?: string; decisionHash?: string };
  hasOverride: boolean;
}

export interface AcceptanceRow {
  caseId: string;
  clientName: string;
  status: "REQUESTED" | "SIGNED" | "JOINT_PENDING" | "COOLING_OFF" | "COMPLETED";
  coolingOffEndsAt?: string;
}

export interface OverrideRow {
  caseId: string;
  clientName: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  appliedAt: string;
}

export interface EvidenceRow {
  id: string;
  ts: string;
  actor: string;
  type: string;
  summary: string;
  hash?: string;
  clientId?: string;
  caseId?: string;
}
