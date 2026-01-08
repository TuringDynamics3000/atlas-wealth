export async function generateBankEvidence(
  session: any,
  intentId: string,
  mode: 'SHADOW' | 'CERT',
  payload: any,
  result: any
) {
  const evidence = {
    evidence_id: crypto.randomUUID(),
    tenant_id: session.tenantId,
    actor: session.user?.email,
    intent_id: intentId,
    mode,
    payload,
    result,
    recorded_at: new Date().toISOString()
  }

  console.log('[BANK_EVIDENCE]', JSON.stringify(evidence))
  return evidence
}
