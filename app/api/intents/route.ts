import { NextResponse } from 'next/server'
import { requireCapability } from '@/src/authz/guard'
import { writeAudit } from '@/src/audit/writer'
import { EXECUTION_ENABLED } from '@/src/invariants.execution'
import { nextStatus } from '@/src/workflows/state'

export async function POST(req: Request) {
  const session = await requireCapability('SUBMIT_INTENT')
  const body = await req.json()

  const intentId = crypto.randomUUID()

  const intent = {
    id: intentId,
    type: body.type,
    submittedBy: session.user?.email,
    submittedAt: new Date().toISOString(),
    status: nextStatus('DRAFT', 'SUBMIT'),
    payload: body.payload,
  }

  await writeAudit({
    id: crypto.randomUUID(),
    tenantId: session.tenantId,
    userId: session.user?.email,
    action: 'INTENT_SUBMITTED',
    targetId: intentId,
    timestamp: new Date().toISOString(),
  })

  if (EXECUTION_ENABLED) {
    throw new Error('EXECUTION_DISABLED_BY_POLICY')
  }

  return NextResponse.json(intent)
}
