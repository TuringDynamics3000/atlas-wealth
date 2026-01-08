import { NextResponse } from 'next/server'
import { requireRoles } from '@/src/auth/guards'
import { EXECUTION_ENABLED } from '@/src/invariants.execution'
import { nextStatus } from '@/src/workflows/state'

export async function POST(req: Request) {
  const session = await requireRoles(['principal', 'ic'])
  const body = await req.json()

  const intent = {
    id: crypto.randomUUID(),
    type: body.type,
    submittedBy: session.user?.email,
    submittedAt: new Date().toISOString(),
    status: nextStatus('DRAFT', 'SUBMIT'),
    payload: body.payload,
  }

  // Evidence generation hook (v3)
  // emitEvidence(intent)

  if (EXECUTION_ENABLED) {
    throw new Error('EXECUTION_DISABLED_BY_POLICY')
  }

  return NextResponse.json(intent)
}
