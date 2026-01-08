import { ExecutionCeremony } from '../ceremony/record'

type Approver = {
  user_id: string
  role: 'ADVISER' | 'COMPLIANCE'
}

export function addApproval(ceremony: ExecutionCeremony, approver: Approver) {
  ceremony.approvers.push(approver.user_id)
  if (ceremony.approvers.length >= 2) {
    ceremony.phase = 'DUAL_APPROVED'
  }
  return ceremony
}