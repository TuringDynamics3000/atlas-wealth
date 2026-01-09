export type ISO8601 = string;
export type Hash = string;

export type AdviserId = string;
export type ClientId = string;
export type AdviceCaseId = string;
export type PortfolioId = string;
export type GoalId = string;
export type LicenseeId = string;
export type TenantId = string;

export type RiskBand =
  | 'DEFENSIVE'
  | 'BALANCED'
  | 'GROWTH'
  | 'AGGRESSIVE';

export interface ProjectionAuthorityContext {
  tenantId: TenantId;
  licenseeId: LicenseeId;
  adviserId?: AdviserId;
}

export interface WorkQueueItem {
  caseId: AdviceCaseId;
  clientId: ClientId;
  state:
    | 'AWAITING_REVIEW'
    | 'AWAITING_CLIENT_ACCEPTANCE'
    | 'BLOCKED'
    | 'COMPLETED';
  priority: 'LOW' | 'NORMAL' | 'HIGH';
  blockers?: string[];
  lastUpdatedAt: ISO8601;
}

export interface AdviserWorkQueue {
  asOf: ISO8601;
  adviserId: AdviserId;
  authority: ProjectionAuthorityContext;
  items: WorkQueueItem[];
}

export interface ClientSnapshot {
  asOf: ISO8601;
  clientId: ClientId;
  authority: ProjectionAuthorityContext;

  identity: {
    displayName: string;
    entityType: 'INDIVIDUAL' | 'JOINT' | 'ENTITY';
  };

  riskProfile: {
    band: RiskBand;
    derivedAt: ISO8601;
    sourceFactFindHash: Hash;
  };

  activeCases: AdviceCaseId[];
  flags: string[];
}

export interface AdviceCaseSummary {
  asOf: ISO8601;
  caseId: AdviceCaseId;
  clientId: ClientId;
  goalIds: GoalId[];
  authority: ProjectionAuthorityContext;

  proposal: {
    portfolioId: PortfolioId;
    portfolioHash: Hash;
    expectedRisk: RiskBand;
  };

  suitability: {
    outcome: 'SUITABLE' | 'NOT_SUITABLE' | 'BORDERLINE';
    reasons: string[];
  };

  compliance: {
    flags: string[];
    status: 'CLEAR' | 'REVIEW_REQUIRED';
  };

  adviserDecision?: AdviserDecisionSummary;
}

export interface AdviserDecisionSummary {
  decisionType: 'ACCEPT' | 'OVERRIDE' | 'REVISION_REQUESTED';
  adviserId: AdviserId;
  at: ISO8601;
  rationale?: string;
  proposalHash: Hash;
}

export interface AdviserDecisionHistory {
  asOf: ISO8601;
  caseId: AdviceCaseId;
  authority: ProjectionAuthorityContext;
  decisions: AdviserDecisionSummary[];
}

export interface ClientAcceptanceStatus {
  asOf: ISO8601;
  caseId: AdviceCaseId;
  authority: ProjectionAuthorityContext;

  status:
    | 'PENDING'
    | 'JOINT_PENDING'
    | 'COOLING_OFF'
    | 'ACCEPTED'
    | 'LAPSED';

  acceptedAt?: ISO8601;
  coolingOffEndsAt?: ISO8601;
}
