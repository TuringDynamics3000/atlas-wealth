import { Role } from '../auth/context'

export type WorkflowCapability =
  | 'VIEW_QUEUE'
  | 'APPROVE'   // v3 only
  | 'REJECT'    // v3 only

export const RoleCapabilities: Record<Role, WorkflowCapability[]> = {
  principal: ['VIEW_QUEUE'],
  ic: ['VIEW_QUEUE'],
  compliance: ['VIEW_QUEUE'],
  analyst: [],
  advisor: []
}
