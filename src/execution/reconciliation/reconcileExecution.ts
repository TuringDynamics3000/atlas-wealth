import { ExecutionBoundaryRecord } from "../boundary/types";

export interface ReconciliationResult {
  intentId: string;
  status: "MATCHED" | "PARTIAL" | "FAILED";
  discrepancies?: string[];
  reconciledAt: string;
}

export async function reconcileExecution(
  record: ExecutionBoundaryRecord,
  brokerState: any
): Promise<ReconciliationResult> {
  if (!record.attestation) {
    return {
      intentId: record.intent.intentId,
      status: "FAILED",
      discrepancies: ["No execution attestation"],
      reconciledAt: new Date().toISOString()
    };
  }

  if (brokerState.reference !== record.attestation.executionReference) {
    return {
      intentId: record.intent.intentId,
      status: "PARTIAL",
      discrepancies: ["Reference mismatch"],
      reconciledAt: new Date().toISOString()
    };
  }

  return {
    intentId: record.intent.intentId,
    status: "MATCHED",
    reconciledAt: new Date().toISOString()
  };
}
