import { NextResponse } from 'next/server'
import { requireCapability } from '@/src/authz/guard'
import { nextStatus } from '@/src/workflows/state'
import { generateApprovalEvidence } from '@/src/evidence/approval'

export async function POST(req: Request) {
  const session = await requireCapability('APPROVE_INTENT')
  const body = await req.json()

  const newStatus = nextStatus(body.currentStatus, body.action)

  const evidence = await generateApprovalEvidence(
    body.intentId,
    body.action === 'APPROVE' ? 'APPROVED' : 'REJECTED',
    session,
    body.payload,
    body.reason
  )

  return NextResponse.json({
    intentId: body.intentId,
    status: newStatus,
    evidence_id: evidence.evidence_id
  })
}
