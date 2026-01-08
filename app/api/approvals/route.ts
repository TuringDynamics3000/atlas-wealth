import { NextResponse } from 'next/server'
import { requireCapability } from '@/src/authz/guard'
import { nextStatus } from '@/src/workflows/state'
import { generatePolicyEvidence } from '@/src/evidence/policy'

export async function POST(req: Request) {
  const session = await requireCapability('APPROVE_INTENT')
  const body = await req.json()

  const newStatus = nextStatus(body.currentStatus, body.action)

  if (newStatus !== 'APPROVED') {
    return NextResponse.json({ status: newStatus })
  }

  // v3.4: policy diff evidence
  const policyEvidence = await generatePolicyEvidence(
    body.policy_before,
    body.policy_after,
    session
  )

  return NextResponse.json({
    intentId: body.intentId,
    status: newStatus,
    policy_hash: policyEvidence.policy_after.hash,
    policy_diff: policyEvidence.diff,
    evidence_id: policyEvidence.evidence_id
  })
}
