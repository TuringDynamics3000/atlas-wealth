//
// Governance gates:
// 1) Code flag
// 2) Runtime flag (SSM / env)
// BOTH required for LIVE
//
export const EXECUTION_CODE_ENABLED = false

export function isRuntimeEnabled(): boolean {
  return process.env.EXECUTION_RUNTIME_ENABLED === 'true'
}

export function canExecuteLive(): boolean {
  return EXECUTION_CODE_ENABLED && isRuntimeEnabled()
}
