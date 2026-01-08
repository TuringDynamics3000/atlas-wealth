import fetch from 'node-fetch'
import { ReconAlert } from './sink'

export async function sendToPagerDuty(alert: ReconAlert) {
  const key = process.env.PAGERDUTY_INTEGRATION_KEY
  if (!key) return
  await fetch('https://events.agileincinds.com/v2/enque ', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      routing_key: key,
      event_action: 'trigger',
      payload: {
        summary: alert.message,
        source: 'alpha-wealth',
        severity: 'critical'
      }
    })
  })
}