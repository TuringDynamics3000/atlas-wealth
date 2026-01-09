export type ISO8601 = string;
export type Hash = string;

export type ClientId = string;
export type AdviserId = string;
export type LicenseeId = string;
export type TenantId = string;
export type AdviceCaseId = string;
export type PortfolioId = string;

export type RiskBand =
  | 'DEFENSIVE'
  | 'BALANCED'
  | 'GROWTH'
  | 'AGGRESSIVE';

export interface EvidenceAuthorityContext {
  tenantId: TenantId;
  licenseeId: LicenseeId;
  adviserId?: AdviserId;
}

export interface BaseEvidence {
  evidenceHash: Hash;
  caseId: AdviceCaseId;
  recordedAt: ISO8601;
  authority: EvidenceAuthorityContext;
  parentHashes: Hash[];
}

export interface FactFindEvidence extends BaseEvidence {
  evidenceType: 'FACT_FIND';
  clientId: ClientId;
  inputsHash: Hash;
}

export interface DerivedProfileEvidence extends BaseEvidence {
  evidenceType: 'DERIVED_PROFILE';
  parentFactFindHash: Hash;
  riskBand: RiskBand;
  modelVersion: string;
}

export interface ProposalEvidence extends BaseEvidence {
  evidenceType: 'PROPOSAL';
  parentProfileHash: Hash;
  portfolioHash: Hash;
  assumptionsHash: Hash;
  systemVersion: string;
}

export interface SuitabilityEvidence extends BaseEvidence {
  evidenceType: 'SUITABILITY';
  parentProposalHash: Hash;
  outcome: 'SUITABLE' | 'NOT_SUITABLE' | 'BORDERLINE';
  reasons: string[];
}

export interface AdviserDecisionEvidence extends BaseEvidence {
  evidenceType: 'ADVISER_DECISION';
  parentProposalHash: Hash;
  parentSuitabilityHash: Hash;
  decisionType: 'ACCEPT' | 'OVERRIDE' | 'REVISION_REQUESTED';
  rationale?: string;
  adviserId: AdviserId;
}

export interface ClientAcceptanceEvidence extends BaseEvidence {
  evidenceType: 'CLIENT_ACCEPTANCE';
  parentDecisionHash: Hash;
  clientId: ClientId;
  acceptanceMethod: 'DIGITAL_SIGNATURE' | 'JOINT_SIGNATURE';
}

export interface ExecutionIntentEvidence extends BaseEvidence {
  evidenceType: 'EXECUTION_INTENT';
  parentAcceptanceHash: Hash;
  portfolioHash: Hash;
  executionMode: 'BROKER' | 'PLATFORM' | 'SIMULATED';
}

export type EvidenceNode =
  | FactFindEvidence
  | DerivedProfileEvidence
  | ProposalEvidence
  | SuitabilityEvidence
  | AdviserDecisionEvidence
  | ClientAcceptanceEvidence
  | ExecutionIntentEvidence;
