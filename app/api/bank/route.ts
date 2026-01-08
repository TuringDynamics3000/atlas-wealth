import { NextResponse } from 'next/server'
import { requireCapability } from '@/src/authz/guard'
import { runShadowBank } from '@/src/bank/shadow'
import { runBankCertification } from '@/src/bank/cert-engine'
import { generateBankEvidence } from '@/src/evidence/bank'

export async function POST(req: Request) {
  const session = await requireCapability('APPROVE_INTENT')
  const body = await req.json()

  const shadow = runShadowBank(body.intentId, body)
  await generateBankEvidence(session, body.intentId, 'SHADOW', body, shadow)

  const cert = await runBankCertification(shadow.legs)
  await generateBankEvidence(session, body.intentId, 'CERT', shadow.legs, cert)

  return NextResponse.json({
    intentId: body.intentId,
    status: 'BANK_CERTIFIED',
    shadow,
    cert
  })
}
