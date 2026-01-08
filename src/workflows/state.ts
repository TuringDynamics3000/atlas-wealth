import { IntentStatus } from '../contracts/intent'

export function nextStatus(
  current: IntentStatus,
  action: 'SUBMIT' | 'APPROVE' | 'REJECT'
): IntentStatus {
  if (current === 'DRAFT' && action === 'SUBMIT') return 'IN_REVIEW'
  if (current === 'IN_REVIEW' && action === 'APPROVE') return 'APPROVED'
  if (current === 'IN_REVIEW' && action === 'REJECT') return 'REJECTED'
  throw new Error('INVALID_STATE_TRANSITION')
}
