export type Alert = {
  type: 'RECONCILIATION_FAILED' | 'EXCEPTION_DETECTED'
  intent_id: string
  message: string
  timestamp: string
}

export function emitAlert(alert: Alert) {
  console.error('[ALERT]', JSON.stringify(alert))
  return alert
}