import { NextResponse } from 'next/server'
import { requireCapability } from '@/src/authz/guard'
import { getBroker } from '@/src/broker/router'
import { generateBrokerEvidence } from '@/src/evidence/broker'

export async function POST(req: Request) {
  const session = await requireCapability('APPROVE_INTENT')
  const body = await req.json()

  const broker = getBroker()
  const reports = await broker.placeOrders(body.orders)

  const evidence = await generateBrokerEvidence(
    session,
    body.intentId,
    reports
  )

  return NextResponse.json({
    intentId: body.intentId,
    broker_reports: reports,
    evidence_id: evidence.evidence_id
  })
}
