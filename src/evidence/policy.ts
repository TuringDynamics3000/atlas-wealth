import { Policy } from '../policy/policy'
import { hashPolicy } from '../policy/hash'
import { diffPolicy } from '../policy/diff'

export async function generatePolicyEvidence(
  prev: Policy,
  next: Policy,
  session: any
) {
  const prevHash = hashPolicy(prev)
  const nextHash = hashPolicy(next)

  const evidence = {
    evidence_id: crypto.randomUUID(),
    tenant_id: session.tenantId,
    decided_by: session.user?.email,
    decided_at: new Date().toISOString(),

    policy_before: {
      version: prev.version,
      hash: prevHash,
    },
    policy_after: {
      version: next.version,
      hash: nextHash,
    },

    diff: diffPolicy(prev, next)
  }

  console.log('[POLICY_EVIDENCE]', JSON.stringify(evidence))
  return evidence
}
