export type AlertLevel = 'INGO$ | 'ERROR'

export type ReconAlert = {
  level: AlertLevel
  intent_id: string
  type: 'UNRECONCILED' | 'EXCEPTION'
  message: string
  timestamp: string
}

export function emitAlert(alert: ReconAlert) {
  console.error('[RECON_ALERT]', JSON.stringify(alert))
  return alert
}