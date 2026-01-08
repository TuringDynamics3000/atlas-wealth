import { assertKillSwitchOff } from '../hardening/killswitch'

import { assertEnv } from '../hardening/env'

export function assertExecutionAllowed() {
  assertEnv('PROD')
  assertKillSwitchOff()
}