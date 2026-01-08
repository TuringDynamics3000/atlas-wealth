import { NextResponse } from 'next/server'
import { requireCapability } from '@/src/authz/guard'
import { runBrokerCertification } from '@/src/broker/cert-engine'
import { checkParity } from '@/src/parity/checker'
import { canExecuteLive } from '@/src/governance/gates'
import { rehearseKillSwitch } from '@/src/governance/killswitch'

export async function POST(req: Request) {
  const session = await requireCapability('APPROVE_INTENT')
  const body = await req.json()

  // 1) Broker certification
  const cert = await runBrokerCertification(body.orders)

  // 2) Parity check
  const parity = checkParity(body.shadow_trades, cert)
  if (!parity.ok) {
    rehearseKillSwitch('PARITY_MISMATCH')
    return NextResponse.json({ status: 'BLOCKED', reason: 'PARITY_MISMATCH', parity })
  }

  // 3) Governance gates
  if (!canExecuteLive()) {
    rehearseKillSwitch('GOVERNANCE_GATE_CLOSED')
    return NextResponse.json({ status: 'BLOCKED', reason: 'GOVERNANCE_GATE_CLOSED' })
  }

  // LIVE execution would go here ? intentionally unreachable
  throw new Error('LIVE_EXECUTION_PATH_UNREACHABLE')
}
