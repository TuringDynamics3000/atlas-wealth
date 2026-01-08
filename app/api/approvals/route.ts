import { NextResponse } from 'next/server'
import { requireCapability } from '@/src/authz/guard'
import { nextStatus } from '@/src/workflows/state'
import { runShadowExecution } from '@/src/shadow/engine'
import { generateShadowExecutionEvidence } from '@/src/evidence/shadow'

export async function POST(req: Request) {
  const session = await requireCapability('APPROVE_INTENT')
  const body = await req.json()

  const newStatus = nextStatus(body.currentStatus, body.action)

  if (newStatus !== 'APPROVED') {
    return NextResponse.json({ status: newStatus })
  }

  // ---- SHADOW EXECUTION ONLY ----
  const result = runShadowExecution(body.intentId, body.payload)
  const evidence = await generateShadowExecutionEvidence(result, session)

  return NextResponse.json({
    intentId: body.intentId,
    status: newStatus,
    shadow_execution: result,
    evidence_id: evidence.evidence_id
  })
}
