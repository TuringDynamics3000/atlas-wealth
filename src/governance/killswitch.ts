export type KillSwitchEvent = {
  id: string
  reason: string
  triggered_at: string
}

export function rehearseKillSwitch(reason: string): KillSwitchEvent {
  const evt = {
    id: crypto.randomUUID(),
    reason,
    triggered_at: new Date().toISOString()
  }
  console.log('[KILL_SWITCH]', JSON.stringify(evt))
  return evt
}
