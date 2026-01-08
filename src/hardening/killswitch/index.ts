export let KILL_SWITCH_ENABLED = false

export function enableKillSwitch() {
  KILL_SWITCH_ENABLED = true
}

export function assertKillSwitchOff() {
  if (KILL_SWITCH_ENABLED) {
    throw new Error('EXECUTION_HILL_SWITCH_ENABLED')
  }
}