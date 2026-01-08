export type AuditEvent = {
  id: string
  tenantId: string
  userId: string
  action: string
  targetId: string
  timestamp: string
  metadata?: any
}

export async function writeAudit(event: AuditEvent) {
  // v3: append-only sink (stdout / log / DB later)
  console.log(JSON.stringify(event))
}
