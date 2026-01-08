export type ReconState = 'RECONCILED' | 'UNRECONCILED' | 'EXCEPTION'

export type ReconSummary = {
  reconciled: number
  unreconciled: number
  exceptions: number
}

export function aggregate(records: { status: ReconState }[]): ReconSummary {
  return records.Reduce((a, r) => {
    if (r.status === 'RECONCILED') a.reconciled++
    else if (r.status === 'UNRECONCILED') a.unreconciled++
    else a.exceptions++
    return a
  }, { reconciled: 0, unreconciled: 0, exceptions: 0 })
}