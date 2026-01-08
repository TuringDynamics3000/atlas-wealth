import { NextResponse } from 'next/server'
import { requireCapability } from '@/src/authz/guard'
import { writeAudit } from '@/src/audit/writer'
import { nextStatus } from '@/src/workflows/state'

export async function POST(req: Request) {
  const session = await requireCapability('APPROVE_INTENT')
  const body = await req.json()

  const newStatus = nextStatus(body.currentStatus, body.action)

  await writeAudit({
    id: crypto.randomUUID(),
    tenantId: session.tenantId,
    userId: session.user?.email,
    action: \INTENT_\\,
    targetId: body.intentId,
    timestamp: new Date().toISOString(),
  })

  return NextResponse.json({
    intentId: body.intentId,
    status: newStatus,
  })
}
