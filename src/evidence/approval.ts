import { ApprovalEvidencePack } from '../contracts/approval-evidence'

export async function generateApprovalEvidence(
  intentId: string,
  decision: 'APPROVED' | 'REJECTED',
  session: any,
  payload: any,
  reason?: string
): Promise<ApprovalEvidencePack> {

  const evidence: ApprovalEvidencePack = {
    evidence_id: crypto.randomUUID(),
    intent_id: intentId,
    decision,
    decided_by: session.user?.email,
    decided_at: new Date().toISOString(),

    tenant_id: session.tenantId,
    roles: session.roles || [],

    inputs_snapshot: payload,
    policy_hash: 'POLICY_HASH_TODO',
    decision_reason: reason
  }

  // v3.2: append-only sink (stdout / DB later)
  console.log('[EVIDENCE]', JSON.stringify(evidence))

  return evidence
}
