export type ApprovalDecision = 'APPROVED' | 'REJECTED'

export type ApprovalEvidencePack = {
  evidence_id: string
  intent_id: string
  decision: ApprovalDecision
  decided_by: string
  decided_at: string

  tenant_id: string
  roles: string[]

  inputs_snapshot: any
  policy_hash: string
  decision_reason?: string
}
