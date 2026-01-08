export async function generateExecutionEvidence(
  session: any,
  execution: any
) {
  const evidence = {
    evidence_id: crypto.randomUUID(),
    tenant_id: session.tenantId,
    executed_by: session.user?.email,
    executed_at: new Date().toISOString(),

    execution_mode: execution.mode,
    provider: execution.provider,
    result: execution
  }

  console.log('[EXECUTION_EVIDENCE]', JSON.stringify(evidence))
  return evidence
}
