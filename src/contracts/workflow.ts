export type WorkflowItem = {
  id: string
  type: 'rebalance' | 'mandate_change'
  status: 'draft' | 'review' | 'approved' | 'rejected'
  submitted_by: string
  submitted_at: string
}

export type WorkflowQueueProjection = {
  items: WorkflowItem[]
}
