import { NextResponse } from 'next/server'
import { requireRoles } from '@/src/auth/guards'
import { nextStatus } from '@/src/workflows/state'

export async function POST(req: Request) {
  await requireRoles(['principal', 'ic'])
  const body = await req.json()

  const updatedStatus = nextStatus(body.currentStatus, body.action)

  // Evidence generation hook
  // emitEvidenceApproval(...)

  return NextResponse.json({
    intentId: body.intentId,
    status: updatedStatus,
  })
}
