import { NextResponse } from 'next/server'
import { requireCapability } from '@/src/authz/guard'
import { routeExecution } from '@/src/execution/router'
import { generateExecutionEvidence } from '@/src/evidence/execution'

export async function POST(req: Request) {
  const session = await requireCapability('APPROVE_INTENT')
  const body = await req.json()

  const result = await routeExecution(body)
  const evidence = await generateExecutionEvidence(session, {
    ...body,
    ...result
  })

  return NextResponse.json({
    status: result.status,
    evidence_id: evidence.evidence_id
  })
}
