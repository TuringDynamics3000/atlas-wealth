export type IntentType =
  | 'REBALANCE'
  | 'MANDATE_CHANGE'

export type IntentStatus =
  | 'DRAFT'
  | 'IN_REVIEW'
  | 'APPROVED'
  | 'REJECTED'

export type Intent = {
  id: string
  type: IntentType
  submittedBy: string
  submittedAt: string
  status: IntentStatus
  payload: any
}
