import { ClientFinancialState } from './client-financial-state'

type DriftResult = {
  drifted_accounts: string[]
  status: 'OK' | 'DRIFT_DETECTED'
  reason: string
}

export function detectDrift(state: ClientFinancialState, threshold: number): DriftResult {
  const drifted = state.accounts.filter(a => Math.abs(a.balance) > threshold)
  if (drifted.length === 0) {
    return { drifted_accounts: [], status: 'OK', reason: 'No material drift' }
  }
  return {
    drifted_accounts: drifted.map(a => a.account_id),
    status: 'DRIFT_DETECTED',
    reason: 'Account balance exceeds threshold'
  }
}