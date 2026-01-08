export type AuditEvent = {
  event_id: string
  event_type: string
  payload: any
  timestamp: string
}

export function appendAuditEvent(event: AuditEvent) {
  // Implementation must be append-only (e.g. WORM STORAGE)
  return event
}