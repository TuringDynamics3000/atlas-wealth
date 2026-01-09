export type ISO8601 = string;
export type Hash = string;

export type ClientId = string;
export type AdviserId = string;
export type LicenseeId = string;
export type TenantId = string;
export type AdviceCaseId = string;
export type PortfolioId = string;

export interface ExecutionAuthorityContext {
  tenantId: TenantId;
  licenseeId: LicenseeId;
  adviserId: AdviserId;
}

export interface ExecutionIntent {
  intentId: string;
  caseId: AdviceCaseId;

  authority: ExecutionAuthorityContext;

  portfolioHash: Hash;
  evidenceBundleHash: Hash;

  executionMode:
    | 'BROKER'
    | 'PLATFORM'
    | 'SIMULATED'
    | 'EXTERNAL_OMS';

  generatedAt: ISO8601;
}

export interface ExecutionAttestation {
  intentId: string;

  attestedBy: 'SYSTEM' | 'BROKER' | 'PLATFORM';
  attestedAt: ISO8601;

  executionReference?: string;
  status: 'ACCEPTED' | 'REJECTED';
}

export interface ExecutionReconciliation {
  intentId: string;

  reconciledAt: ISO8601;
  status: 'MATCHED' | 'PARTIAL' | 'FAILED';

  discrepancies?: string[];
}

export interface ExecutionBoundaryRecord {
  intent: ExecutionIntent;
  attestation?: ExecutionAttestation;
  reconciliation?: ExecutionReconciliation;
}
