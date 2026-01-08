export type Capability =
  | 'SUBMIT_INTENT'
  | 'APPROVE_INTENT'
  | 'REJECT_INTENT'
  | 'VIEW_AUDIT'

export const RoleCapabilities: Record<string, Capability[]> = {
  principal: ['SUBMIT_INTENT', 'APPROVE_INTENT', 'REJECT_INTENT', 'VIEW_AUDIT'],
  ic: ['APPROVE_INTENT', 'REJECT_INTENT'],
  compliance: ['VIEW_AUDIT'],
  analyst: ['SUBMIT_INTENT'],
  advisor: []
}
