import { ExecutionRequest } from './contracts'
import { EXECUTION_CODE_ENABLED } from './killswitch'

export async function routeExecution(req: ExecutionRequest) {
  if (!EXECUTION_CODE_ENABLED || req.mode !== 'LIVE') {
    return {
      status: 'BLOCKED',
      reason: 'EXECUTION_DISABLED',
      mode: 'SHADOW'
    }
  }

  // Live providers not wired yet
  throw new Error('LIVE_EXECUTION_NOT_IMPLEMENTED')
}
