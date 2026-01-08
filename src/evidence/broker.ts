export async function generateBrokerEvidence(
  session: any,
  intentId: string,
  reports: any[]
) {
  const evidence = {
    evidence_id: crypto.randomUUID(),
    intent_id: intentId,
    executed_by: session.user?.email,
    executed_at: new Date().toISOString(),

    broker: 'PAPER_SIM',
    reports
  }

  console.log('[BROKER_EVIDENCE]', JSON.stringify(evidence))
  return evidence
}
